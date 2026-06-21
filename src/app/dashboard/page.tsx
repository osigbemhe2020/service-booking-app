
"use client";

import { useState, useEffect } from "react";
import BookServicePopup, { type ServiceFormValue } from "@/components/BookServicePopup";
import { IoMdAdd } from "react-icons/io";
import DashboardCard from "@/components/BlessingComponents/DashboardCard";
import { FaDollarSign, FaRegCalendar } from "react-icons/fa";
import { IoTrendingUp } from "react-icons/io5";
import { LuStar } from "react-icons/lu";
import ProviderNav from "@/components/BlessingComponents/ProviderNav";
import { BiStore } from "react-icons/bi";
import { Users } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { uploadServiceImage, getServiceImageUrl } from "@/lib/uploadServiceImage";

type DbService = {
  id: string;
  service_title: string;
  category: string;
  price: number;
  duration: string;
  service_image_path: string | null;
};

const initialDraft: ServiceFormValue = {
  title: "",
  location: "",
  category: "Consulting",
  description: "",
  price: "",
  duration: "15 mins",
  availability: "",
  customFeature: "",
  imageFile: null,
};

const DashboardBtn = ({ outlineColor, text, Icon, onClick }: any) => (
  <button
    className={`outline ${outlineColor} rounded-lg flex items-center justify-center px-3 py-2 bg-secondary50 text-secondary500`}
    onClick={onClick}
  >
    {Icon && <Icon className="text-xl" />}
    <p className="text-sm">{text}</p>
  </button>
);

const InfoBox = ({ onClick }: { onClick: () => void }) => (
  <div className="paceholder flex flex-col gap-4 items-center">
    <IoMdAdd className="text-4xl text-secondary300 font-extrabold" />
    <p className="text-secondary300 flex flex-col text-center">
      <span>No Services Added Yet</span>
      <span>Create your first service to start accepting bookings</span>
    </p>
    <DashboardBtn Icon={IoMdAdd} outlineColor="bg-secondary50" text="Add Your First Service" onClick={onClick} />
  </div>
);

const Service = ({ service }: { service: DbService }) => {
  const imageUrl = service.service_image_path ? getServiceImageUrl(service.service_image_path) : null;
  return (
    <div className="border border-black/10 flex flex-col justify-between rounded-[14px] h-[350px] p-4">
      {imageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageUrl} alt={service.service_title} className="h-32 w-full object-cover rounded-md" />
      )}
      <div className="flex justify-between"><p>{service.category}</p><p>${service.price}</p></div>
      <div className="space-y-2">
        <h3 className="font-semibold">{service.service_title}</h3>
        <p className="text-black/70">{service.duration}</p>
        <p className="text-black/70 flex gap-2 items-center"><Users className="h-5 w-5 text-black/20" /> 60 bookings</p>
        <p className="text-black/70">Status: <span className="text-green-500">Active</span></p>
      </div>
    </div>
  );
};

const ServiceContainer = ({ services }: { services: DbService[] }) => (
  <div className="mt-6 px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {services.map((s) => <Service key={s.id} service={s} />)}
  </div>
);

const Dashboard = () => {
  const supabase = createClient();
  const [showPopup, setShowPopup] = useState(false);
  const [services, setServices] = useState<DbService[]>([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [serviceDraft, setServiceDraft] = useState<ServiceFormValue>(initialDraft);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    setLoading(true);
    const { data: userData } = await supabase.auth.getUser();
    const uid = userData?.user?.id ?? null;
    setUserId(uid);

    if (!uid) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("services")
      .select("*")
      .eq("seller_id", uid)
      .order("created_at", { ascending: false });

    if (!error && data) setServices(data as DbService[]);
    setLoading(false);
  };

  const handleClick = () => setShowPopup(true);

  const handleCreateService = async (form: ServiceFormValue) => {
    if (!userId) throw new Error("You must be signed in to add a service.");
    if (!form.imageFile) throw new Error("Image is required.");

    const imagePath = await uploadServiceImage(form.imageFile, userId);

    const { error } = await supabase.from("services").insert({
      seller_id: userId,
      service_title: form.title,
      category: form.category,
      service_location: form.location,
      price: Number(form.price),
      duration: form.duration,
      availability: form.availability,
      common_features: "",
      custom_features: form.customFeature || null,
      service_image_path: imagePath,
    });

    if (error) throw error;

    setServiceDraft(initialDraft);
    await loadServices();
  };

  return (
    <section className="w-full">
      <ProviderNav
        title="Provider Dashboard"
        content={<DashboardBtn Icon={BiStore} onClick={handleClick} outlineColor="bg-secondary50" text="Dashboard" />}
      />
      <main className="w-10/12 mx-auto flex flex-col gap-6 my-12">
        <header className=" flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-3xl">Provider Dashboard</h1>
            <p className="text-secondary300">Manage your services, bookings, and business performance</p>
          </div>
          <DashboardBtn Icon={IoMdAdd} outlineColor="bg-secondary50" text="Add Service" onClick={handleClick} />
        </header>
        <section className="card-section flex gap-3">
          <DashboardCard Icon={FaRegCalendar} bgColor="bg-primary700" iconColor="text-primary300" mainText="total bookings" number={142} />
          <DashboardCard Icon={FaDollarSign} bgColor="bg-success400" iconColor="text-success100" mainText="total revenue" number={12540} />
          <DashboardCard Icon={LuStar} bgColor="bg-warm500" iconColor="text-warm300" mainText="avg rating" number={4.8} />
          <DashboardCard Icon={IoTrendingUp} bgColor="bg-accent300" iconColor="text-accent100" mainText="monthly growth" number={12.5} />
        </section>

        <div className=" border border-secondary400 rounded-xl py-8">
          {loading ? (
            <p className="text-center text-secondary300">Loading services...</p>
          ) : services.length === 0 ? (
            <InfoBox onClick={handleClick} />
          ) : (
            <ServiceContainer services={services} />
          )}
        </div>

        <BookServicePopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          onCreate={handleCreateService}
          value={serviceDraft}
          onChange={setServiceDraft}
        />
      </main>
    </section>
  );
};

export default Dashboard;