
'use client';
import { InputField } from '@/components/popupComponents'
import PrimaryBtn from "@/components/PrimaryButton";
import Link from "next/link";
import { BiStore } from "react-icons/bi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    setError("");
  }

  const isValidEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);

    if (signInError) {
      setError("Incorrect email or password.");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  };

  return (
    <section className="w-full">
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
            onSubmit={handleSubmit}
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
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
            <InputField
              htmlFor="password"
              id="password"
              placeholder="********"
              required
              text="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              name="password"
            />
            {error && (
              <p className="text-red-500 text-sm" role="alert">{error}</p>
            )}
            <PrimaryBtn
              bgColor="bg-secondary50"
              hoverColor="bg-seondary200"
              text={loading ? "Signing in..." : "Sign In"}
              textColor="text-secondary600"
              type="submit"
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

export default SignIn;