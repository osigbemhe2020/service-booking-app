import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaRegCalendarAlt } from "react-icons/fa";

type ProviderNavProps = {
  content: React.ReactNode;
  title: string;
};
const ProviderNav = ({ content, title }: ProviderNavProps) => {
  return (
    <section className="w-full">
      <menu className=" flex justify-between items-center w-11/12 mx-auto py-4 ">
        <div className="flex  gap-4 items-center">
          <li>
            <Link href="/">
              <FaArrowLeft />
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-md bg-black  text-white flex items-center justify-center ">
                <FaRegCalendarAlt />
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
