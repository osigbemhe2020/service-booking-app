"use client"

import { useState } from "react"
import StepIndicator from "@/components/PaulComponents/StepsIndicator"
import DateTimeStep from "@/components/PaulComponents/DateTimeStamp"
import DetailsStep from "@/components/PaulComponents/DetailsStep"
import PaymentStep from "@/components/PaulComponents/PaymentStep"
import ConfirmationStep from "@/components/PaulComponents/ConfirmationStep"

type Step = "date-time" | "details" | "payment" | "confirmation"

interface BookingData {
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
            <p className="font-medium text-slate-900">
              {data.date} at {data.time}
            </p>
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
};


export default function BookingFlow() {
  const [currentStep, setCurrentStep] = useState<Step>("date-time")
  const [bookingData, setBookingData] = useState<BookingData>({
      service: "Professional Home Cleaning",
      provider: "CleanCo Services",
      date: "",
      time: "",
      duration: 120,
      serviceFee: 85,
      bookingFee: 0,
      name: "",
      email: "",
      phone: "",
    });

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
      setCurrentStep(steps[currentIndex + 1].id)
    }
  }

  const handlePrevious = () => {
    const currentIndex = steps.findIndex((s) => s.id === currentStep)
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
     <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-6xl">
          <StepIndicator steps={steps} currentStep={currentStep} />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {currentStep === "date-time" && <DateTimeStep data={bookingData} onNext={handleNext} />}
              {currentStep === "details" && (
                <DetailsStep data={bookingData} onNext={handleNext} onPrevious={handlePrevious} />
              )}
              {currentStep === "payment" && (
                <PaymentStep data={bookingData} onNext={handleNext} onPrevious={handlePrevious} />
              )}
              {currentStep === "confirmation" && <ConfirmationStep data={bookingData} />}
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

