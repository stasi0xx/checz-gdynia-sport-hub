
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Bądź na bieżąco!</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Zapisz się do naszego newslettera i otrzymuj informacje o nowych zajęciach, 
            wydarzeniach i sukcesach naszych zawodników
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <Input 
              type="email" 
              placeholder="Twój adres email"
              className="flex-1 bg-white text-gray-800 border-none"
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8">
              Zapisz się
            </Button>
          </div>
          
          <p className="text-sm text-blue-200">
            Możesz wypisać się w każdej chwili. Szanujemy Twoją prywatność.
          </p>
        </div>
      </div>
      
      <footer className="mt-16 pt-8 border-t border-blue-500">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400">CHECZ GDYNIA</h3>
            <p className="text-blue-100">
              Stowarzyszenie rozwoju sportu i rekreacji
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">YouTube</a>
            </div>
            <p className="text-sm text-blue-200">
              © 2024 CHECZ Gdynia. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Newsletter;
