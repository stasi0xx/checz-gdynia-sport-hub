
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden" 
             style={{
               backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
             }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
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
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Padel, piłka nożna, cheerleading, fitness. Dla każdego.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-10 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-lg"
            >
              🏃‍♂️ Dołącz do zajęć
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-blue-500 bg-blue-600 hover:bg-blue-700 text-white hover:border-blue-400 px-10 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-lg font-semibold"
            >
              🏟️ Zarezerwuj boisko
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
