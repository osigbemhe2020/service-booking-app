import Image from "next/image";
import Link from "next/link"; 
import { CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/LandingPageAssets/hero.jpg";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-center items-center bg-primary900 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-12 md:py-16 lg:py-20 min-h-[80vh]">
      <div className="grid gap-8 lg:grid-cols-2 items-center w-full max-w-7xl">
        {/* Left side text */}
        <div className="max-w-xl space-y-6 text-center lg:text-left">
          <p className="bg-primary700 rounded-full text-xs sm:text-sm font-semibold text-primary100 uppercase px-4 py-1 inline-block">
            🚀 Now serving 1000+ customers
          </p>

          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-bold text-gray-900 leading-tight">
            Book Service <span className="text-blue-600">Instantly</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Connect with trusted service providers in your area. From beauty
            treatments to home repairs, book appointments in seconds with
            BookIt&apos;s seamless platform.
          </p>

          {/* Buttons */}
          <div className="flex flex-col w-[60%] sm:w-[80%] sm:flex-row gap-4 justify-center mx-auto sm:mx-0 lg:justify-start">
            <Link href="/book-service"><button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-md text-sm sm:text-base">
              Browse Services
            </button></Link>
            <Link href="/sign-up"><button className="px-6 sm:px-8 py-3 text-blue-500 bg-white rounded-md border border-black/10 text-sm sm:text-base">
              Join as a provider
            </button></Link>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground justify-center lg:justify-start">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-success200" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-success200" />
              <span>Easy cancellation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-success200" />
              <span>Secure payments</span>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src={heroImage}
            alt="Hero Image"
            className="w-[280px] sm:w-[400px] md:w-[480px] lg:w-[550px] h-auto rounded-[12px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
