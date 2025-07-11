
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScpEFKY2tRXAcb4gbBGXmm5iy8wQtNXCvpN5oM91tFSWRs18g/formResponse";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const data = new FormData(form);

  // Zamień poniższe entry.xxxxx na swoje identyfikatory z Google Forms!
  const payload = new URLSearchParams({
    "entry.1127660953": data.get("imie") as string,
    "entry.248888698": data.get("nazwisko") as string,
    "entry.1938710591": data.get("wiek") as string,
    "entry.937092977": data.get("sekcja") as string,
    "entry.1016056112": data.get("email") as string,
    "entry.816515353": data.get("telefon") as string,
    "entry.1321395482": data.get("dodatkowe_informacje") as string,
    // ...pozostałe pola
  });

  await fetch(GOOGLE_FORM_ACTION_URL, {
    method: "POST",
    mode: "no-cors",
    body: payload,
  });

  // Możesz dodać info o sukcesie
  alert("Dziękujemy za zgłoszenie!");
};

const Contact = () => {
  return (
    <section className="py-20 bg-white" id="kontakt">
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
                    <p className="text-gray-600">ul. Ludwika Zamenhofa 17, 81-218 Gdynia</p>
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.861157888766!2d18.480616976325546!3d54.53594338505492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda6bd4639f00f%3A0x4e8c1f616d734cce!2sLudwika%20Zamenhofa%2017%2C%2081-218%20Gdynia!5e0!3m2!1spl!2spl!4v1752234998381!5m2!1spl!2spl"
                width="100%"
                height="192"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa dojazdu"
              />
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Formularz zapisu</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Imię dziecka/uczestnika
                  </label>
                  <Input name="imie" placeholder="Wprowadź imię" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nazwisko
                  </label>
                  <Input name="nazwisko" placeholder="Wprowadź nazwisko" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wiek uczestnika
                </label>
                <Input name="wiek" type="number" placeholder="Wprowadź wiek" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wybierz sekcję
                </label>
                <select name="sekcja" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
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
                  <Input name="email" type="email" placeholder="twoj@email.pl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <Input name="telefon" type="tel" placeholder="+48 123 456 789" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dodatkowe informacje
                </label>
                <Textarea name="dodatkowe_informacje" placeholder="Uwagi, pytania, informacje o doświadczeniu sportowym..." />
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
