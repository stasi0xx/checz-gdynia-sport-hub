import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const Hero = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowButtons(true), 200); // opóźnienie dla efektu
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const id = href.slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();

    const navHeight =
      (document.querySelector("nav") as HTMLElement | null)?.offsetHeight ?? 0;

    const y =
      target.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden animate-hero-bg"
      style={{
        backgroundImage: `url('/img/448583461_990093979789660_3271476276578368938_n-1-lyvwug9r.jpg')`
      }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center min-h-screen">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Main heading */}
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight text-white">
              CHECZ
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold leading-tight text-yellow-400">
              GDYNIA
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-white mt-4 tracking-wide">
              Sport. Energia. Społeczność.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mt-12 transition-all duration-700
  ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
`}>
              <Button
                  asChild
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold px-10 py-5 text-2xl rounded-2xl shadow-lg border-2 border-yellow-400 hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                  <a href="#sekcje" onClick={handleAnchorClick}>
                      Nasze sekcje<span className="ml-2 text-2xl">&rarr;</span>
                  </a>
              </Button>
            <Button
              asChild
                size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-10 py-5 text-2xl rounded-2xl shadow-lg border-2 border-blue-600 hover:scale-105 transition-all duration-300"
            >
              <a href="#kontakt" onClick={handleAnchorClick}>Dołącz do nas<span className="ml-2 text-2xl">&rarr;</span></a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
  );
};

export default Hero;