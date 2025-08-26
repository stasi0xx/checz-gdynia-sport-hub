
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      
      <footer className="mt-16 pt-8 border-t border-blue-500">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400">CHECZ GDYNIA</h3>
            <p className="text-blue-100">
              Stowarzyszenie rozwoju sportu i rekreacji
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://www.facebook.com/sportowachecz" target={'_blank'} className="text-blue-100 hover:text-white transition-colors">Facebook</a>
              <a href="https://www.instagram.com/checzgdynia/" target={'_blank'} className="text-blue-100 hover:text-white transition-colors">Instagram</a>
              <a href="https://www.youtube.com/@checzgdynia1971" target={'_blank'} className="text-blue-100 hover:text-white transition-colors">YouTube</a>
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
