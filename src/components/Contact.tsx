
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Kontakt i Zapisy</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Skontaktuj się z nami lub zapisz dziecko na zajęcia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Informacje kontaktowe</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Adres</h4>
                    <p className="text-gray-600">ul. Sportowa 15, 81-374 Gdynia</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Telefon</h4>
                    <p className="text-gray-600">+48 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">kontakt@checzgdynia.pl</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Godziny biura</h4>
                    <p className="text-gray-600">Pn-Pt: 15:00-20:00<br />Sb: 9:00-15:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-2xl">
              <h4 className="font-semibold text-gray-800 mb-4">Lokalizacja</h4>
              <div className="bg-blue-200 h-48 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-semibold">🗺️ Mapa (Google Maps)</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Formularz zapisu</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Imię dziecka/uczestnika
                  </label>
                  <Input placeholder="Wprowadź imię" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nazwisko
                  </label>
                  <Input placeholder="Wprowadź nazwisko" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wiek uczestnika
                </label>
                <Input type="number" placeholder="Wprowadź wiek" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wybierz sekcję
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Piłka nożna dziewcząt</option>
                  <option>Cheerleading</option>
                  <option>Padel</option>
                  <option>Fitness</option>
                  <option>Programy społeczne</option>
                </select>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email rodzica/opiekuna
                  </label>
                  <Input type="email" placeholder="twoj@email.pl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <Input type="tel" placeholder="+48 123 456 789" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dodatkowe informacje
                </label>
                <Textarea placeholder="Uwagi, pytania, informacje o doświadczeniu sportowym..." />
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold">
                Wyślij zgłoszenie
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
