import LandingHeader from "@/components/LandingComponents/LandingHeader";
import Hero from "@/components/LandingComponents/Hero";
import WhySection from "@/components/LandingComponents/WhySection";
import HowSection from "@/components/LandingComponents/HowSection";
import PopularSection from "@/components/LandingComponents/PopularSection";
import Grow from "@/components/LandingComponents/Grow";
import CTASection from "@/components/LandingComponents/CTASection";
import Testimonials from "@/components/LandingComponents/Testimonials";
import AppointmentForm from "@/components/appointment_form/appointment_form";

export default function Home() {
  return (
    <div>
      <LandingHeader />
      <Hero />
      <WhySection />
      <HowSection />
      <PopularSection />
      <Grow />
      <Testimonials />
      <CTASection />
      <AppointmentForm />
    </div>
  );
}
