import Link from "next/link";
import { FaArrowLeft, FaRegCalendarAlt } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineStorefront } from "react-icons/md";

const ProviderNav = () => {
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
                <span className="text-secondary300 text-sm">
                  Provider Login
                </span>
              </div>
            </Link>
          </li>
        </div>

        <div className="flex gap-2">
          <NavBtn
            outlineColor="outline-transparent"
            Icon={IoPersonOutline}
            text="My Bookings"
            href="/my-bookings"
          />
          <NavBtn
            outlineColor="outline-secondary300"
            Icon={MdOutlineStorefront}
            text="Become a Provider"
            href="/register"
          />
        </div>
      </menu>
      <hr className="text-secondary400" />
    </section>
  );
};

// navigator buttons
type NavBtnProps = {
  outlineColor: string;
  text: string;
  Icon: React.ElementType;
  href: string;
};

const NavBtn = ({ outlineColor, text, Icon, href }: NavBtnProps) => {
  return (
    <li
      className={`outline ${outlineColor} rounded-lg flex items-center justify-center p-2`}
    >
      <Link href={href} className="flex gap-2">
        {Icon && <Icon />}
        <p className="text-sm">{text}</p>
      </Link>
    </li>
  );
};

export default ProviderNav;
