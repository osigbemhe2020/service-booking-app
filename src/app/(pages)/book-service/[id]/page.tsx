"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { getServiceImageUrl } from "@/lib/uploadServiceImage";

type DbService = {
  id: string;
  service_title: string;
  category: string;
  service_location: string;
  description: string | null;
  price: number;
  duration: string;
  availability: string;
  rating: number;
  review_count: number;
  included_items: string[] | null;
  service_image_path: string | null;
  profiles: { name: string } | null;
};

const ServiceDetailsPage = () => {
  const params = useParams();
  const serviceId = params?.id as string;
  const supabase = createClient();

  const [service, setService] = useState<DbService | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!serviceId) return;
    loadService();
  }, [serviceId]);

  const loadService = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("services")
      .select("*, profiles:seller_id(name)")
      .eq("id", serviceId)
      .single();

    if (error || !data) {
      setNotFound(true);
    } else {
      setService(data as unknown as DbService);
    }
    setLoading(false);
  };

  if (loading) return <p className="text-center mt-10 text-gray-400">Loading...</p>;
  if (notFound || !service) return <p className="text-center mt-10 text-gray-400">Service not found.</p>;

  const imageUrl = service.service_image_path
    ? getServiceImageUrl(service.service_image_path)
    : "/assets/booking.png";

  return (
    <main className="flex flex-col justify-center items-center w-1/2 mx-auto mt-10">
      <img src={imageUrl} alt={service.service_title} className="w-full mb-5 rounded-2xl" />

      <div className="flex justify-between gap-5 p-5">
        <div className="flex flex-col justify-center items-start text-left w-full">
          <h2 className="font-medium mb-4 bg-gray-300 w-fit px-3 rounded p-1">
            {service.category}
          </h2>

          <div className="flex flex-col gap-3 text-left">
            <h3>{service.service_title}</h3>
            <p className="text-gray-400">{service.profiles?.name ?? "Unknown Provider"}</p>
            <div className="flex gap-3 text-gray-400">
              <p>⭐{service.rating} ({service.review_count} reviews)</p>
              <p className="flex gap-2">
                <img src="./assets/clock.png" alt="clock" className="w-5" />
                {service.duration}
              </p>
              <p className="flex gap-2">
                <img src="./assets/location.png" alt="location" className="w-5" />
                {service.service_location}
              </p>
            </div>
            <p className="text-gray-400">{service.description}</p>
            <hr className="mt-5 text-gray-300" />
          </div>

          {service.included_items && service.included_items.length > 0 && (
            <div className="mt-5 flex flex-col gap-4 w-full">
              <h4>What's Included</h4>
              <div className="grid grid-cols-2 gap-3">
                {service.included_items.map((item, i) => (
                  <p key={i} className="flex items-center gap-3">
                    <img src="./assets/check.png" alt="check" />
                    {item}
                  </p>
                ))}
              </div>
              <hr className="mt-5 text-gray-300 w-full" />
            </div>
          )}

          {/* Static placeholder reviews — kept intentionally, real reviews out of scope */}
          <div className="mt-10 flex flex-col justify-center w-full">
            <h3>Recent Reviews</h3>
            <div>
              <div className="flex flex-col gap-3 border border-gray-300 rounded-2xl my-3 p-5">
                <h4 className="flex justify-start items-center gap-3">Sarah Johnson <img src="./assets/check.png" alt="check" /></h4>
                <p>⭐⭐⭐⭐⭐ 2 days ago</p>
                <p>Absolutely amazing service! The team was professional and the results exceeded my expectations. Will definitely book again.</p>
              </div>
              <div className="flex flex-col gap-3 border border-gray-300 rounded-2xl my-3 p-5">
                <h4 className="flex justify-start items-center gap-3">Mike Chen <img src="./assets/check.png" alt="check" /></h4>
                <p>⭐⭐⭐⭐⭐ 1 week ago</p>
                <p>Great experience overall. Very punctual and thorough. The booking process was smooth and easy.</p>
              </div>
              <div className="flex flex-col gap-3 border border-gray-300 rounded-2xl my-3 p-5">
                <h4 className="flex justify-start items-center gap-3">Emily Rodriguez <img src="./assets/check.png" alt="check" /></h4>
                <p>⭐⭐⭐⭐⭐ 2 weeks ago</p>
                <p>Outstanding quality! Worth every penny. The attention to detail was impressive.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-center p-2 w-70 border border-gray-300 rounded-2xl h-full">
          <div>
            <h4 className="font-bold text-2xl">${service.price}</h4>
            <p className="font-light text-gray-400">per session</p>
            <div className="text-left">
              <div className="flex mt-3 text-xs gap-5 justify-between items-center">
                <p>Duration</p>
                <p className="font-medium">{service.duration}</p>
              </div>
              <div className="flex mt-3 gap-5 text-xs justify-between items-center">
                <p>Location</p>
                <p className="font-medium">{service.service_location}</p>
              </div>
              <div className="flex mt-3 gap-5 text-xs justify-between items-right">
                <p>Available</p>
                <p className="font-medium text-right">{service.availability}</p>
              </div>
            </div>
          </div>

          <Link href={`/appointments?serviceId=${service.id}`}>
            <button className="bg-black hover:bg-gray-600 text-white font-semibold py-2 px-2 rounded-lg transition-colors duration-200 mt-5">
              Book Appointment
            </button>
          </Link>

          <p className="text-center text-xs mt-5">Free cancellation up to 24 hours before your appointment</p>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetailsPage;