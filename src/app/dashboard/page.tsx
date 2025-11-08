 "use client";

import { useState } from "react";
import BookServicePopup from "@/components/BookServicePopup";
import { IoMdAdd } from "react-icons/io";
import DashboardCard from "@/components/BlessingComponents/DashboardCard";
import { FaDollarSign, FaRegCalendar } from "react-icons/fa";
import { IoTrendingUp } from "react-icons/io5";
import { LuStar } from "react-icons/lu";
import ProviderNav from "@/components/BlessingComponents/ProviderNav";
import { BiStore } from "react-icons/bi";
import { Users } from "lucide-react";
import { addService, getServices, type SessionService } from "@/lib/sessionServices";


type ServiceTab = {
  id: number;
  name: string;
  number?: number;
};

type DashboardBtnProps = {
  outlineColor: string;
  text: string;
  Icon: React.ElementType;
 onClick: () => void
};

type ServiceProps = SessionService;
const DashboardBtn = ({
  outlineColor,
  text,
  Icon,
  onClick
}: DashboardBtnProps) => {
  return (
    <button
      className={`outline ${outlineColor} rounded-lg flex items-center justify-center px-3 py-2 bg-secondary50 text-secondary500`}
      onClick={onClick}
    >
        {Icon && <Icon className="text-xl" />}
        <p className="text-sm">{text}</p>
    </button>
  );
};

const TabsComponent = ({ serviceTabs }: { serviceTabs: ServiceTab[] }) => {
  return (
    <div className="flex justify-evenly bg-secondary400 rounded-2xl gap-1">
      {serviceTabs.map((tab) => (
        <button
          key={tab.id}
          className="hover:bg-secondary600 flex-1 rounded-2xl capitalize font-medium py-1"
        >
          {tab.name}
          {tab.number !== undefined && <span> ({tab.number})</span>}
        </button>
      ))}
    </div>
  );
};


const InfoBox = ({ onClick }: { onClick: () => void }) => {
  return(
   <div className="paceholder flex flex-col gap-4 items-center">
            <IoMdAdd className="text-4xl text-secondary300 font-extrabold" />
            <p className="text-secondary300 flex flex-col text-center">
              <span>No Services Added Yet</span>
              <span>Create your first service to start accepting bookings</span>
            </p>
            <DashboardBtn
              Icon={IoMdAdd}
              outlineColor="bg-secondary50"
              text="Add Your First Service"
              onClick={onClick}
            />
          </div>
        )
} 
const ServiceContainer = ({ services }: { services: SessionService[] }) => {
  return (
    <div className="mt-6 px-6 grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
      {services.map((s, idx) => (
        <Service key={`${s.title}-${idx}`} title={s.title} category={s.category} cost={s.cost} duration={s.duration} />
      ))}
    </div>
  );
};

const Service = ({title,category,cost,duration}: ServiceProps) => {
  return(
   <div className="border border-black/10 flex flex-col justify-between rounded-[14px]  h-[350px] p-4">
    <div className="flex justify-between"><p>{category}</p><p>${cost}</p></div>
    <div className="space-y-2">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-black/70">{duration}</p>
      <p className="text-black/70 flex  gap-2 items-center"><Users className="h-5 w-5 text-black/20" /> 60 bookings</p>
      <p className="text-black/70">Status: <span className="text-green-500">Active</span></p>
    </div>
   </div>
  )
}

const Dashboard = () => {
  const [showPopup , SetShowPopup] = useState(false)
  const [services, setServices] = useState<SessionService[]>([...getServices()]);
  const [serviceTabs, setServiceTabs] = useState([
    { id: 1, name: "services", number: getServices().length },
    { id: 2, name: "bookings", number: 3 },
    { id: 3, name: "analytics" },
    { id: 4, name: "profile" },
  ]);
  const initialDraft = {
    title: "",
    location: "",
    category: "Consulting" as SessionService["category"],
    description: "",
    price: "",
    duration: "15 mins" as SessionService["duration"],
    availability: "",
    features: "",
    images: "",
  };
  const [serviceDraft, setServiceDraft] = useState<typeof initialDraft>(initialDraft);

 const handleClick = () =>{
    SetShowPopup(true);
 } 
  const handleCreateService = (service: SessionService) => {
    addService(service);
    const next = [...getServices()];
    setServices(next);
    setServiceTabs((prev) =>
      prev.map((t) => (t.id === 1 ? { ...t, number: next.length } : t))
    );
    setServiceDraft(initialDraft);
  };
  return (
    <section className="w-full">
      <ProviderNav
        title="Provider Dashboard"
        content={
          <DashboardBtn
            Icon={BiStore}
            onClick={handleClick}
            outlineColor="bg-secondary50"
            text="Dashboard"
          />
        }
      />
      <main className="w-10/12 mx-auto flex flex-col gap-6 my-12">
        <header className=" flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-3xl">Provider Dashboard</h1>
            <p className="text-secondary300">
              Manage your services, bookings, and business performance
            </p>
          </div>
          <DashboardBtn
            Icon={IoMdAdd}
            outlineColor="bg-secondary50"
            text="Add Service"
            onClick={handleClick}
          />
        </header>
        <section className="card-section flex gap-3">
          <DashboardCard
            Icon={FaRegCalendar}
            bgColor="bg-primary700"
            iconColor="text-primary300"
            mainText="total bookings"
            number={142}
          />
          <DashboardCard
            Icon={FaDollarSign}
            bgColor="bg-success400"
            iconColor="text-success100"
            mainText="total revenue"
            number={12540}
          />
          <DashboardCard
            Icon={LuStar}
            bgColor="bg-warm500"
            iconColor="text-warm300"
            mainText="avg rating"
            number={4.8}
          />
          <DashboardCard
            Icon={IoTrendingUp}
            bgColor="bg-accent300"
            iconColor="text-accent100"
            mainText="monthly growth"
            number={12.5}
          />
        </section>
         <TabsComponent serviceTabs={serviceTabs} />

        <div className=" border border-secondary400 rounded-xl py-8">
          {services.length === 0 ? (
            <InfoBox onClick={handleClick} />
          ) : (
            <ServiceContainer services={services} />
          )}
        </div>

        {/* button */}
        <BookServicePopup 
          isOpen={showPopup}
          onClose={() => SetShowPopup(false)}
          onCreate={handleCreateService}
          value={serviceDraft}
          onChange={setServiceDraft}
        />
      </main>
    </section>

  );
};

export default Dashboard;



