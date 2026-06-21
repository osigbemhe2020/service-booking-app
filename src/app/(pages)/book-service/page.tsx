
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { getServiceImageUrl } from "@/lib/uploadServiceImage";

type DbService = {
  id: string;
  service_title: string;
  category: string;
  service_location: string;
  price: number;
  duration: string;
  rating: number;
  review_count: number;
  service_image_path: string | null;
  profiles: { name: string } | null;
};

const BookServicePage = () => {
  const supabase = createClient();
  const [services, setServices] = useState<DbService[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("0");

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("services")
      .select("*, profiles:seller_id(name)")
      .order("created_at", { ascending: false });

    if (!error && data) setServices(data as unknown as DbService[]);
    setLoading(false);
  };

  const filtered = category === "0"
    ? services
    : services.filter((s) => s.category === category);

  return (
    <>
      <header className="mt-10 flex flex-col gap-10 p-5">
        <div>
          <h2 className="font-semibold text-2xl mb-4">Discover Amazing Services</h2>
          <p className="text-xl font-light">
            Book appointments with top-rated professionals in your area
          </p>
        </div>

        <div className="bg-gray-100 flex justify-between items-center rounded p-3">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <img src="./assets/filter.png" alt="filter" />
              <p>Filters</p>
            </div>
            <div>
              <select
                name="services"
                id="services"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="0">All Categories</option>
                <option value="Consulting">Consulting</option>
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Repair">Repair</option>
                <option value="Training">Training</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>
          <p>{filtered.length} services found</p>
        </div>
      </header>

      <main className="mt-10 p-5">
        {loading ? (
          <p className="text-center text-gray-400">Loading services...</p>
        ) : filtered.length === 0 ? (
          <p className="text-center text-gray-400">No services found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((service) => {
              const imageUrl = service.service_image_path
                ? getServiceImageUrl(service.service_image_path)
                : "/assets/booking.png";

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg border border-secondary200 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 bg-gradient-to-br from-primary700 to-primary600">
                    <Image src={imageUrl} alt={service.service_title} fill className="object-cover" />
                    <div className="absolute top-4 right-4 bg-white text-secondary50 px-3 py-1 rounded-full text-sm font-bold shadow-md">
                      ${service.price}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-secondary100 mb-1">{service.service_title}</h3>
                      <p className="text-primary500 font-medium text-sm">
                        {service.profiles?.name ?? "Unknown Provider"}
                      </p>
                    </div>

                    <div className="flex items-center mb-4">
                      <div className="flex items-center px-2 py-1 rounded">
                        <span className="text-warm400 mr-1 text-sm">★</span>
                        <span className="font-bold text-secondary100 text-sm">{service.rating}</span>
                        <span className="text-secondary100 ml-1 text-sm">({service.review_count})</span>
                        <span className="mr-1 ml-5"><img src="./assets/clock.png" alt="" /></span>
                        <span>{service.duration}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-6 text-sm text-secondary300">
                      <div className="flex items-center">
                        <span className="mr-1"><img src="./assets/location.png" alt="" /></span>
                        <span>{service.service_location}</span>
                      </div>
                    </div>

                    <div className="text-secondary50 px-3 py-1 flex items-center justify-between text-sm font-bold">
                      from ${service.price}
                      <Link href={`/book-service/${service.id}`}>
                        <button className="bg-secondary100 hover:bg-secondary300 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 hover:scale-105 transform">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </>
  );
};

export default BookServicePage;