import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import DashboardCard from "../../../app/(pages)/dashboard/DashboardCard";
import { FaDollarSign, FaRegCalendar } from "react-icons/fa";
import { IoTrendingUp } from "react-icons/io5";
import { LuStar } from "react-icons/lu";
import ProviderNav from "@/components/ProviderNav";
import { BiStore } from "react-icons/bi";
// import { FaNairaSign } from "react-icons/fa6";

const serviceTabs = [
  { id: 1, name: "services", number: 0 },
  {
    id: 2,
    name: "bookings",
    number: 3,
  },
  {
    id: 3,
    name: "analytics",
  },
  {
    id: 4,
    name: "profile",
  },
];

const Dashboard = () => {
  return (
    <section className="w-full">
      <ProviderNav
        title="Provider Dashboard"
        content={
          <DashboardBtn
            Icon={BiStore}
            href="/dashboard"
            outlineColor="bg-secondary50"
            text="Dashboard"
          />
        }
      />
      <main className="w-10/12 mx-auto flex flex-col gap-6 my-10">
        <header className=" flex justify-between items-center">
          <div>
            <h1 className="font-medium text-2xl">Provider Dashboard</h1>
            <p className="text-secondary300">
              Manage your services, bookings, and business performance
            </p>
          </div>
          <DashboardBtn
            Icon={IoMdAdd}
            href="/book-service"
            outlineColor="bg-secondary50"
            text="Add Service"
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
        <div className="tab-section  flex justify-evenly bg-secondary400 rounded-2xl gap-1 ">
          {serviceTabs?.map((tab) => (
            <button
              key={tab.id}
              className="hover:bg-secondary600 flex-1 rounded-2xl capitalize font-medium py-1"
            >
              {tab.name}
              <span>{tab.number! >= 0 ? `(${tab.number})` : ""}</span>
            </button>
          ))}
        </div>
        <div className="info-box border border-secondary400 rounded-xl py-10">
          <div className="paceholder flex flex-col gap-4 items-center">
            <IoMdAdd className="text-4xl text-secondary300 font-extrabold" />
            <p className="text-secondary300 flex flex-col text-center">
              <span>No Services Added Yet</span>
              <span>Create your first service to start accepting bookings</span>
            </p>
            <DashboardBtn
              Icon={IoMdAdd}
              href="/book-service"
              outlineColor="bg-secondary50"
              text="Add Your First Service"
            />
          </div>
        </div>

        {/* button */}
      </main>
    </section>
  );
};

export default Dashboard;

type DashboardBtnProps = {
  outlineColor: string;
  text: string;
  Icon: React.ElementType;
  href: string;
};

const DashboardBtn = ({
  outlineColor,
  text,
  Icon,
  href,
}: DashboardBtnProps) => {
  return (
    <li
      className={`outline ${outlineColor} rounded-lg flex items-center justify-center px-3 py-2 bg-secondary50 text-secondary500`}
    >
      <Link href={href} className="flex gap-2">
        {Icon && <Icon className="text-xl" />}
        <p className="text-sm">{text}</p>
      </Link>
    </li>
  );
};
