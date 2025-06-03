
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden" 
             style={{
               backgroundImage: `url('https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2049&q=80')`
             }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center min-h-screen">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              Dołącz do drużyny piłkarskiej dziewcząt
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-yellow-400 tracking-wide">
              Checz Gdynia zaprasza dziewczynki w wieku 6–13 lat
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="mt-12">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-12 py-8 text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-lg"
            >
              ⚽ Zapisz córkę na trening
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
