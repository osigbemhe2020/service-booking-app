// "use client";

// import { useState } from "react";

// import Link from "next/link";
// import BookingCard from "@/components/PaulComponents/BookingCard";
// import TabFilter from "@/components/PaulComponents/TabFilter";
// import { Plus, Filter, Calendar, Phone,} from "lucide-react";
// import bookings from "@/lib/PaulData/booking"
// import StatsCard from "@/components/PaulComponents/StatsCard";

// type ActionProps = {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
// }

// const QuickActions = ({icon,title,description}:ActionProps) =>{
//   return(
//     <div className=" flex items-center p-2 rounded-md gap-4 border border-black/30">
//     <div className="p-[6px] rounded-sm mt-1 flex-shrink-0">
//         {icon}
//     </div>
//     <div>
//     <h3 className="font-semibold text-[18px]">{title}</h3>
//     <p className="text-sm mt-1">{description}</p>
//     </div>
//   </div>
//   )
// }

// const Home  = () => {
//   const [activeTab, setActiveTab] = useState("all");
  

//   const filteredBookings = bookings.filter((booking) => {
//     if (activeTab === "all") return true;
//     return booking.status === activeTab;
//   });

//   const tabs = [
//     { label: "All", count: bookings.length, value: "all" },
//     {
//       label: "Upcoming",
//       count: bookings.filter((b) => b.status === "upcoming").length,
//       value: "upcoming",
//     },
//     {
//       label: "Completed",
//       count: bookings.filter((b) => b.status === "completed").length,
//       value: "completed",
//     },
//     {
//       label: "Cancelled",
//       count: bookings.filter((b) => b.status === "cancelled").length,
//       value: "cancelled",
//     },
//   ];

  

//   return (
//     <div className="min-h-screen ">

//       <main className="w-10/12 mx-auto flex flex-col gap-6 my-12">
        
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
//           <div>
//             <h1 className="font-semibold text-3xl">My Bookings</h1>
//             <p className="text-secondary300">
//               Manage your appointments and booking history
//             </p>
//           </div>
//           <Link href = "/book-service">
//           <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-smooth font-medium shadow-md">
//             <Plus className="w-5 h-5" />
//             Book New Service
//           </button>
//           </Link>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
//           <StatsCard
//            value='2'
//            label='upcoming'
//           />
//           <StatsCard
//            value='2'
//            label='completed'
//           />
//           <StatsCard
//            value='$180'
//            label='Total Amount'
//           />
//         </div>

        
//         <div className=" rounded-xl px-8 py-6  border border-black/30 mb-6">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//             <h2 className="text-lg font-semibold">Your Bookings</h2>
//             <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-smooth">
//               <Filter className="w-4 h-4" />
//               Filter
//             </button>
//           </div>
//           <div className="mt-4">
//             <TabFilter
//               tabs={tabs}
//               activeTab={activeTab}
//               onTabChange={setActiveTab}
//             />
//           </div>
       

//           {/* Bookings List */}
//           <div className="space-y-4">
//             {filteredBookings.length > 0 ? (
//               filteredBookings.map((booking) => (
//                 <BookingCard key={booking.id} booking={booking} />
//               ))
//             ) : (
//               <div className=" rounded-xl p-12 text-center shadow-card border border-border">
//                 <p className="text-muted-foreground">
//                   No bookings found in this category.
//                 </p>
//               </div>
//             )}
//           </div>
//          </div>
//          <div className="rounded-xl px-8 py-6  border border-black/30">
//           <h2 className="font-semibold text-2xl">Quick Actions</h2>
//           <div className = "mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <QuickActions
//            icon = {<Calendar/>}
//            title= 'Reshedule'
//            description='Change your appointment time'
//           />
//           <QuickActions
//           icon = {<Phone/>}
//            title= 'Contact Provider'
//            description='get in touch directly'/>
//           <QuickActions
//             icon = {<Plus/>}
//            title= 'Book again'
//            description='Repeat a previous Service'
//           />
//           </div>
//          </div>
//       </main>
//     </div>
//   );
// };

// export default Home;
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Filter, Calendar, Phone } from "lucide-react";
import BookingCard, { type Booking } from "@/components/PaulComponents/BookingCard";
import TabFilter from "@/components/PaulComponents/TabFilter";
import StatsCard from "@/components/PaulComponents/StatsCard";
import { createClient } from "@/utils/supabase/client";
import { getServiceImageUrl } from "@/lib/uploadServiceImage";

type ActionProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const QuickActions = ({ icon, title, description }: ActionProps) => {
  return (
    <div className="flex items-center p-2 rounded-md gap-4 border border-black/30">
      <div className="p-[6px] rounded-sm mt-1 flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-semibold text-[18px]">{title}</h3>
        <p className="text-sm mt-1">{description}</p>
      </div>
    </div>
  );
};

type DbBooking = {
  id: string;
  title: string;
  provider: string;
  booking_date: string;
  duration: string;
  location: string;
  price: number;
  status: "upcoming" | "completed" | "cancelled";
  services: { service_image_path: string | null } | null;
};

const Home = () => {
  const supabase = createClient();
  const [activeTab, setActiveTab] = useState("all");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkAuthAndLoad();
  }, []);

  const checkAuthAndLoad = async () => {
    const { data: userData } = await supabase.auth.getUser();
    const user = userData?.user ?? null;

    setIsLoggedIn(!!user);
    setAuthChecked(true);

    if (!user) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("bookings")
      .select("*, services(service_image_path)")
      .eq("buyer_id", user.id)
      .order("booking_date", { ascending: false });

    if (!error && data) {
      const mapped: Booking[] = (data as DbBooking[]).map((b) => ({
        id: b.id,
        title: b.title,
        provider: b.provider,
        image: b.services?.service_image_path
          ? getServiceImageUrl(b.services.service_image_path)
          : "/assets/booking.png",
        date: new Date(b.booking_date).toLocaleString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }),
        duration: b.duration,
        location: b.location,
        price: b.price,
        status: b.status,
      }));
      setBookings(mapped);
    }
    setLoading(false);
  };

  const filteredBookings = bookings.filter((booking) => {
    if (activeTab === "all") return true;
    return booking.status === activeTab;
  });

  const tabs = [
    { label: "All", count: bookings.length, value: "all" },
    {
      label: "Upcoming",
      count: bookings.filter((b) => b.status === "upcoming").length,
      value: "upcoming",
    },
    {
      label: "Completed",
      count: bookings.filter((b) => b.status === "completed").length,
      value: "completed",
    },
    {
      label: "Cancelled",
      count: bookings.filter((b) => b.status === "cancelled").length,
      value: "cancelled",
    },
  ];

  const upcomingCount = bookings.filter((b) => b.status === "upcoming").length;
  const completedCount = bookings.filter((b) => b.status === "completed").length;
  const totalAmount = bookings.reduce((sum, b) => sum + b.price, 0);

  if (authChecked && !isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Sign in to view your bookings</h2>
          <p className="text-secondary300 mb-6">
            Your bookings are tied to your account. Please sign in to continue.
          </p>
          <Link href="/sign-in">
            <button className="px-6 py-3 bg-black text-white rounded-lg font-medium">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <main className="w-10/12 mx-auto flex flex-col gap-6 my-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="font-semibold text-3xl">My Bookings</h1>
            <p className="text-secondary300">
              Manage your appointments and booking history
            </p>
          </div>
          <Link href="/book-service">
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-smooth font-medium shadow-md">
              <Plus className="w-5 h-5" />
              Book New Service
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <StatsCard value={String(upcomingCount)} label="upcoming" />
          <StatsCard value={String(completedCount)} label="completed" />
          <StatsCard value={`$${totalAmount}`} label="Total Amount" />
        </div>

        <div className="rounded-xl px-8 py-6 border border-black/30 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-lg font-semibold">Your Bookings</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-smooth">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
          <div className="mt-4">
            <TabFilter tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          <div className="space-y-4">
            {loading ? (
              <p className="text-center text-secondary300 py-8">Loading your bookings...</p>
            ) : filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))
            ) : (
              <div className="rounded-xl p-12 text-center shadow-card border border-border">
                <p className="text-muted-foreground">
                  No bookings found in this category.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="rounded-xl px-8 py-6 border border-black/30">
          <h2 className="font-semibold text-2xl">Quick Actions</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <QuickActions
              icon={<Calendar />}
              title="Reschedule"
              description="Change your appointment time"
            />
            <QuickActions
              icon={<Phone />}
              title="Contact Provider"
              description="Get in touch directly"
            />
            <QuickActions
              icon={<Plus />}
              title="Book again"
              description="Repeat a previous Service"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;