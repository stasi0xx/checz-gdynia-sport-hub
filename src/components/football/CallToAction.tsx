
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Zapisz córkę już dziś!
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Daj swojej córce szansę na rozwój w sporcie, naukę pracy w zespole 
            i mnóstwo radości z aktywności fizycznej.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400">50 zł</div>
                <div className="text-blue-100">miesięcznie</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">2x</div>
                <div className="text-blue-100">treningi tygodniowo</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">12</div>
                <div className="text-blue-100">max. dzieci w grupie</div>
              </div>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-12 py-8 text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-lg"
          >
            ⚽ Wypełnij formularz zapisu
          </Button>
          
          <p className="text-sm text-blue-200 mt-4">
            Pierwszy trening jest bezpłatny!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
