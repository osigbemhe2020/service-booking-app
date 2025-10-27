import InputField from "@/components/Input";
import ProviderNav from "@/components/ProviderNav";
import PrimaryBtn from "@/components/PrimaryButton";
import Link from "next/link";
import { BiStore } from "react-icons/bi";
import NavBtn from "./NavBtn";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineStorefront } from "react-icons/md";

const SignUp = () => {
  return (
    <section className="w-full">
      <ProviderNav
        title="Provider Login"
        content={
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
        }
      />
      <main className=" mx-auto my-10">
        <div className="flex flex-col gap-1 items-center mb-4">
          <div className="h-18 w-18 bg-secondary400 rounded-full flex items-center justify-center text-3xl">
            <BiStore />
          </div>
          <h3>Provider Sign In</h3>
          <p className="text-secondary300">
            Access your provider dashboard and manage your services
          </p>
        </div>

        <div>
          <form
            action=""
            className="flex flex-col w-7/12 mx-auto  gap-4 p-4 border border-secondary400 rounded-lg"
          >
            <h4 className="text-secondary300">Sign in into your account</h4>
            <InputField
              htmlFor="email"
              id="email"
              placeholder="your@gmail.com"
              required
              text="Email Address"
              type="email"
            />
            <InputField
              htmlFor="password"
              id="password"
              placeholder="********"
              required
              text="Password"
              type="password"
            />
            <PrimaryBtn
              bgColor="bg-secondary50"
              hoverColor="bg-seondary200"
              text="Sign In"
              textColor="text-secondary600"
              href="/signin"
            />
            <p className="text-center">
              Don&apos;t have an account?
              <Link
                href="/sign-up"
                className="text-lg ml-2 underline text-secondary100"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </main>
    </section>
  );
};

export default SignUp;
