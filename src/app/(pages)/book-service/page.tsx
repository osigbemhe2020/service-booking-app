// import Image from "next/image";

// const BookServicePage = () => {
//   const services = [
//     {
//       id: 1,
//       title: "Professional Home Clearing",
//       provider: "CleanCo Services",
//       rating: 4.9,
//       reviews: 89,
//       duration: "120min",
//       location: "City-wide service",
//       price: 85,
//       image: "/assets/cleaning.png"
//     },
//     {
//       id: 2,
//       title: "Business Consulting",
//       provider: "Strategic Advisors",
//       rating: 4.9,
//       reviews: 67,
//       duration: "90min",
//       location: "Business District",
//       price: 200,
//       image: "/assets/businessconsultation.png"
//     },
//     {
//       id: 3,
//       title: "Luxury Spa Facial Treatment",
//       provider: "Severity Day Spa",
//       rating: 4.5,
//       reviews: 12,
//       duration: "60min",
//       location: "Spa District",
//       price: 120,
//       image: "/assets/luxuryspa.png"
//     },
//     {
//       id: 4,
//       title: "Therapeutic Massage",
//       provider: "Healthy Touch Wellness",
//       rating: 4.5,
//       reviews: 20,
//       duration: "60min",
//       location: "Wellness Center",
//       price: 95,
//       image: "/assets/massage.png"
//     },
//     {
//       id: 5,
//       title: "Personal Training Session",
//       provider: "P/Life Studio",
//       rating: 4.7,
//       reviews: 16,
//       duration: "60min",
//       location: "Fitness Studio",
//       price: 79,
//       image: "/assets/training.png"
//     },
//     {
//       id: 6,
//       title: "Pet Grooming Service",
//       provider: "Pavement Cleaning",
//       rating: 4.6,
//       reviews: 34,
//       duration: "90min",
//       location: "Cleaning Center",
//       price: 90,
//       image: "/assets/pet.png"
//     }
//   ];

//   const categories = [
//     "Highest Read", "Most Popular", "Nearby", "Best Rated", "Affordable"
//   ];

//   return (
//     <>
//       {/* header section */}
//       <header className="mt-10 flex flex-col gap-10 p-5">
//         <div className="">
//           <h2 className="font-semibold text-2xl mb-4">
//             Discover Amazing Services
//           </h2>
//           <p className="text-xl font-light">
//             Book appointments with top-rated professionals in your area
//           </p>
//         </div>

//         <div className="bg-gray-100 flex justify-between items-center rounded p-3">
//           <div className="flex items-center gap-5">
//             <div className="flex items-center gap-3">
//               <img src="./assets/filter.png" alt="filter" />
//               <p>Filters</p>
//             </div>
//             <div>
             
//               <select name="services" id="services">
//                 <option value="0"> All Categories</option>
//                 <option value="Home Services">Home Services</option>
//                 <option value="Consulting">Consulting</option>
//                 <option value="Beauty and Wellnes">Beauty and Wellness</option>
//                 <option value="Fitness">Fitness</option>
//                 <option value="Pet Care">Pet Care</option>
//               </select>
//             </div>
//             <div>
//               <label htmlFor="rate">Highest Rated</label>
//               <select name="rate" id="rate">
//                 <option value="0"></option>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//                 <option value="5">5</option>
//               </select>
//             </div>
//           </div>

//           <p>6 services found</p>
//         </div>
//       </header>

//       <main className="mt-10 p-5">
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//     {services.map((service) => (
//       <div key={service.id} className="bg-white rounded-xl shadow-lg border border-secondary200 overflow-hidden hover:shadow-xl transition-all duration-300">
//         {/* Service Image */}
//         <div className="relative h-48 bg-gradient-to-br from-primary700 to-primary600">
//           <Image
//             src={service.image || "/assets/booking.png"}
//             alt={service.title}
//             fill
//             className="object-cover"
//           />
//           {/* Price Badge */}
//           <div className="absolute top-4 right-4 bg-white text-secondary50 px-3 py-1 rounded-full text-sm font-bold shadow-md">
//             ${service.price}
//           </div>
//         </div>

//         {/* Service Content */}
//         <div className="p-6">
//           {/* Title and Provider */}
//           <div className="mb-4">
//             <h3 className="text-xl font-bold text-secondary100 mb-1">{service.title}</h3>
//             <p className="text-primary500 font-medium text-sm">{service.provider}</p>
//           </div>

//           {/* Rating and Reviews */}
//           <div className="flex items-center mb-4">
//             <div className="flex items-center  px-2 py-1 rounded">
//               <span className="text-warm400 mr-1 text-sm">★</span>
//               <span className="font-bold text-secondary100 text-sm">{service.rating}</span>
//               <span className="text-secondary100 ml-1 text-sm">({service.reviews})</span>

//               <span className="mr-1 ml-5"><img src="./assets/clock.png" alt="" /></span>
//               <span>{service.duration}</span>
//             </div>
//           </div>

//           {/* Location */}
//           <div className="flex justify-between items-center mb-6 text-sm text-secondary300">
//             <div className="flex items-center">
//               <span className="mr-1"><img src="./assets/location.png" alt="" /></span>
//               <span>{service.location}</span>
//             </div>
//           </div>

//           {/* Price Badge */}
//           <div className=" text-secondary50 px-3 py-1 flex items-center justify-between text-sm font-bold">
//             from ${service.price}

//             {/* Action Button */}
//             <button className=" bg-secondary100 hover:bg-secondary300 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 hover:scale-105 transform">
//                 <a href="/service-details">Book Now</a>
//             </button>
//           </div>
          
//         </div>
//       </div>
//     ))}
//   </div>
// </main>
//     </>
//   );
// };

// export default BookServicePage;
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