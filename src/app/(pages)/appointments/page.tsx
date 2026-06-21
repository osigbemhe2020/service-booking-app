"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import StepIndicator from "@/components/PaulComponents/StepsIndicator"
import DateTimeStep from "@/components/PaulComponents/DateTimeStep"
import DetailsStep from "@/components/PaulComponents/DetailsStep"
import PaymentStep from "@/components/PaulComponents/PaymentStep"
import ConfirmationStep from "@/components/PaulComponents/ConfirmationStep"
import { createClient } from "@/utils/supabase/client"

type Step = "date-time" | "details" | "payment" | "confirmation"

interface BookingData {
  serviceId: string
  sellerId: string
  service: string
  provider: string
  date: string
  time: string
  duration: number
  serviceFee: number
  bookingFee: number
  name: string
  email: string
  phone: string
  location: string
}

function BookingSummary({ data }: { data: BookingData }) {
  const total = data.serviceFee + data.bookingFee;

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 sticky top-6">
      <h2 className="text-lg font-semibold text-slate-900 mb-6">Booking Summary</h2>

      <div className="space-y-4 mb-6">
        <div>
          <p className="text-sm text-slate-600 mb-1">Service</p>
          <p className="font-medium text-slate-900">{data.service}</p>
        </div>

        <div>
          <p className="text-sm text-slate-600 mb-1">Provider</p>
          <p className="font-medium text-slate-900">{data.provider}</p>
        </div>

        {data.date && data.time && (
          <div>
            <p className="text-sm text-slate-600 mb-1">Date & Time</p>
            <p className="font-medium text-slate-900">{data.date} at {data.time}</p>
          </div>
        )}

        <div>
          <p className="text-sm text-slate-600 mb-1">Duration</p>
          <p className="font-medium text-slate-900">{data.duration} minutes</p>
        </div>
      </div>

      <div className="border-t border-slate-200 pt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Service fee</span>
          <span className="text-slate-900 font-medium">${data.serviceFee}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Booking fee</span>
          <span className="text-slate-900 font-medium">${data.bookingFee}</span>
        </div>
        <div className="flex justify-between text-base font-semibold border-t border-slate-200 pt-3">
          <span className="text-slate-900">Total</span>
          <span className="text-slate-900">${total}</span>
        </div>
      </div>
    </div>
  );
}

export default function BookingFlow() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("serviceId");
  const supabase = createClient();

  const [currentStep, setCurrentStep] = useState<Step>("date-time")
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData>({
    serviceId: "",
    sellerId: "",
    service: "",
    provider: "",
    date: "",
    time: "",
    duration: 0,
    serviceFee: 0,
    bookingFee: 0,
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  useEffect(() => {
    if (!serviceId) {
      setError("No service selected.");
      setLoading(false);
      return;
    }
    loadService();
  }, [serviceId]);

  const loadService = async () => {
    setLoading(true);
    const { data, error: fetchError } = await supabase
      .from("services")
      .select("*, profiles:seller_id(name)")
      .eq("id", serviceId)
      .single();

    if (fetchError || !data) {
      setError("Could not load this service.");
      setLoading(false);
      return;
    }

    setBookingData((prev) => ({
      ...prev,
      serviceId: data.id,
      sellerId: data.seller_id,
      service: data.service_title,
      provider: (data as any).profiles?.name ?? "Unknown Provider",
      duration: parseDurationToMinutes(data.duration),
      serviceFee: data.price,
      bookingFee: 0,
      location: data.service_location,
    }));
    setLoading(false);
  };

  const parseDurationToMinutes = (duration: string): number => {
    const match = duration.match(/(\d+)/);
    if (!match) return 60;
    const num = parseInt(match[1], 10);
    return duration.toLowerCase().includes("hour") ? num * 60 : num;
  };

  const steps: { id: Step; label: string }[] = [
    { id: "date-time", label: "Date & Time" },
    { id: "details", label: "Your Details" },
    { id: "payment", label: "Payment" },
    { id: "confirmation", label: "Confirmation" },
  ]

  const handleNext = (data: Partial<BookingData>) => {
    setBookingData({ ...bookingData, ...data })
    const currentIndex = steps.findIndex((s) => s.id === currentStep)
    if (currentIndex < steps.length - 1) {
      const nextStep = steps[currentIndex + 1].id;
      if (nextStep === "confirmation") {
        createBooking({ ...bookingData, ...data });
      } else {
        setCurrentStep(nextStep);
      }
    }
  }

  const handlePrevious = () => {
    const currentIndex = steps.findIndex((s) => s.id === currentStep)
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id)
    }
  }

  const createBooking = async (finalData: BookingData) => {
    setSubmitting(true);
    setError("");
  
    const { data: userData } = await supabase.auth.getUser();
    const buyerId = userData?.user?.id ?? null;
  
    const bookingDateIso = buildBookingDate(finalData.date, finalData.time);
  
    const payload: any = {
      seller_id: finalData.sellerId,
      service_id: finalData.serviceId,
      title: finalData.service,
      provider: finalData.provider,
      booking_date: bookingDateIso,
      duration: `${finalData.duration} minutes`,
      location: finalData.location,
      price: finalData.serviceFee,
      status: "upcoming",
    };
  
    if (buyerId) {
      payload.buyer_id = buyerId;
    } else {
      payload.buyer_name = finalData.name;
      payload.buyer_email = finalData.email;
      payload.buyer_phone = finalData.phone;
    }
  
    const { error: insertError } = await supabase.from("bookings").insert(payload);
  
    setSubmitting(false);
  
    if (insertError) {
      setError(insertError.message);
      return;
    }
  
    setBookingData(finalData);
    setCurrentStep("confirmation");
  };

  const buildBookingDate = (dateLabel: string, time: string): string => {
    // dateLabel looks like "Mon, Jun 22" — reconstruct with current year
    const year = new Date().getFullYear();
    const parsed = new Date(`${dateLabel} ${year} ${time}`);
    return parsed.toISOString();
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-slate-400">Loading service...</div>;
  }

  if (error && currentStep !== "confirmation") {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-6xl">
          <StepIndicator steps={steps} currentStep={currentStep} />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {currentStep === "date-time" && (
                <DateTimeStep data={bookingData} onNext={handleNext} />
              )}
              {currentStep === "details" && (
                <DetailsStep data={bookingData} onNext={handleNext} onPrevious={handlePrevious} />
              )}
              {currentStep === "payment" && (
                <PaymentStep
                  data={bookingData}
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                />
              )}
              {currentStep === "confirmation" && (
                submitting
                  ? <p className="text-slate-400">Creating your booking...</p>
                  : <ConfirmationStep data={bookingData} />
              )}
            </div>

            <div className="lg:col-span-1">
              <BookingSummary data={bookingData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}