"use client";
import Link from "next/link";
import { useState } from "react";

type DropdownProps = {
  htmlFor: string;
  text: string;
  options: string[];
};

const DropdownButton = ({ htmlFor, text, options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col relative">
      <label className="text-secondary50 font-medium mb-2" htmlFor={htmlFor}>
        {text}
      </label>

      <button
        id={htmlFor}
        className="text-secondary50 bg-secondary550 hover:bg-secondary450 focus:ring-2 focus:outline-none focus:ring-secondary550 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center justify-between w-full"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {text}
        <svg
          className={`w-2.5 h-2.5 ml-3 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-white divide-y divide-gray-100 rounded-lg shadow-md z-10">
          <ul className="text-sm text-secondary50 py-2">
            {options?.map((option) => (
              <li key={option}>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  {option}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
