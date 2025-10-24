import LandingHeader from "@/components/LandingComponents/LandingHeader";
import Hero from "@/components/LandingComponents/Hero";
import WhySection from "@/components/LandingComponents/WhySection";
import HowSection from "@/components/LandingComponents/HowSection";
import PopularSection from "@/components/LandingComponents/PopularSection";
import  Grow from "@/components/LandingComponents/Grow";
import Bottom from "@/components/LandingComponents/Bottom";
import Recomendations from "@/components/LandingComponents/Recomendations";


export default function Home() {
  return (
    <div >
      <LandingHeader />
      <Hero/>
      <WhySection/>
      <HowSection/>
      <PopularSection/>
      <Grow/>
      <Recomendations/>
      <Bottom/>
    </div>
  );
}
