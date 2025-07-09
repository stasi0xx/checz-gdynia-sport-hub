
import Hero from "@/components/Hero";
import SportSections from "@/components/SportSections";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SportSections />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Partners />
      <Contact />
      <Newsletter />
    </div>
  );
};

export default Index;
