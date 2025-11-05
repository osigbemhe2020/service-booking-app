import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Calendar } from "lucide-react";

type ProviderNavProps = {
  content: React.ReactNode;
  title: string;
};
const ProviderNav = ({ content, title }: ProviderNavProps) => {
  return (
    <section className="w-full">
      <menu className=" flex justify-between items-center w-11/12 mx-auto py-2 ">
        <div className="flex  gap-4 items-center">
          <li>
            <Link href="/">
              <FaArrowLeft />
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center gap-2">
              <div className="p-2 bg-[rgba(3,2,19,1)]  rounded-[10px] flex items-center justify-center">
                <Calendar size={20} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg">Book It</span>
                <span className="text-secondary300 text-sm">{title}</span>
              </div>
            </Link>
          </li>
        </div>

        {content}
      </menu>
      <hr className="text-secondary500" />
    </section>
  );
};

// navigator buttons

export default ProviderNav;
