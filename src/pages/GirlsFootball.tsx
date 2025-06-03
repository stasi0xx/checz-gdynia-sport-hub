
import Hero from "@/components/football/Hero";
import GeneralInfo from "@/components/football/GeneralInfo";
import WhyJoin from "@/components/football/WhyJoin";
import Testimonial from "@/components/football/Testimonial";
import Schedule from "@/components/football/Schedule";
import CallToAction from "@/components/football/CallToAction";
import FAQ from "@/components/football/FAQ";

const GirlsFootball = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <GeneralInfo />
      <WhyJoin />
      <Testimonial />
      <Schedule />
      <CallToAction />
      <FAQ />
    </div>
  );
};

export default GirlsFootball;
