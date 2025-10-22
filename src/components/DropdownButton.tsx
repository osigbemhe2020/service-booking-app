"use client";
import Link from "next/link";
import { useState } from "react";

type DropdownProps = {
  htmlFor: string;
  text: string;
  options: string[];
};

const DropdownButton = ({ htmlFor, text, options }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <label className="text-secondary50 font-medium mb-2" htmlFor={htmlFor}>
        {text}
      </label>

      <button
        id={htmlFor}
        data-dropdown-toggle="dropdown"
        className="text-secondary50 bg-secondary550 hover:bg-secondary450 focus:ring-2 focus:outline-none focus:ring-secondary550 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center relative 
        "
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {text}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
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

      <div
        id="dropdown"
        className={`${
          open ? "hidden" : "block"
        } bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 `}
      >
        <ul
          className="text-sm text-secondary50 absolute bg-white py-2 px-8 shadow-secondary300 shadow-md rounded-xl"
          aria-labelledby="dropdownDefaultButton"
        >
          {options?.map((option) => (
            <li key={option}>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                {option}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownButton;
