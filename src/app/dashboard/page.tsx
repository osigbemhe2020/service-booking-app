"use client";

import Link from "next/link";
import { useState } from "react";
import BookServicePopup from "@/components/BookServicePopup";
import { IoMdAdd } from "react-icons/io";
import DashboardCard from "@/components/BlessingComponents/DashboardCard";
import { FaDollarSign, FaRegCalendar } from "react-icons/fa";
import { IoTrendingUp } from "react-icons/io5";
import { LuStar } from "react-icons/lu";
import ProviderNav from "@/components/ProviderNav";
import { BiStore } from "react-icons/bi";
// import { FaNairaSign } from "react-icons/fa6";

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
const Service = () => {
  return(
   <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      
   </div>
  )
}

const Dashboard = () => {
  const [showPopup , SetShowPopup] = useState(false)
  const [serviceTabs, setServiceTabs] = useState([
    { id: 1, name: "services", number: 0 },
    { id: 2, name: "bookings", number: 3 },
    { id: 3, name: "analytics" },
    { id: 4, name: "profile" },
  ]);

 const handleClick = () =>{
    SetShowPopup(true);
 } 
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

        <div className=" border border-secondary400 rounded-xl py-10">
           {serviceTabs[0].number === 0 ? (
            <InfoBox onClick={handleClick} />
          ) : (
           <InfoBox onClick={handleClick} />
          )}
        </div>

        {/* button */}
        <BookServicePopup 
          isOpen={showPopup}
          onClose={() => SetShowPopup(false)}
        />
      </main>
    </section>
  );
};

export default Dashboard;



