"use client";
import Link from "next/link";
import { useState } from "react";
type option = {
  name: string;
  id: number;
};
type DropdownProps = {
  htmlFor: string;
  text: string;
  options: option[];
};

const Dropdown = ({ htmlFor, text, options }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-start">
      <label className="text-secondary50 font-medium" htmlFor={htmlFor}></label>

      <button
        id={htmlFor}
        data-dropdown-toggle="dropdown"
        className="text-secondary50 bg-secondary550 hover:bg-secondary450 focus:ring-2 focus:outline-none focus:ring-secondary550 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center 
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
        } bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44`}
      >
        <ul
          className="py-2 text-sm text-secondary50"
          aria-labelledby="dropdownDefaultButton"
        >
          {options?.map((option) => (
            <li key={option.id}>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                {option.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
