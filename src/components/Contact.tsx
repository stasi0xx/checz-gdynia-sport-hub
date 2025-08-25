import { Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-white" id="kontakt">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Kontakt</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Skontaktuj się bezpośrednio z odpowiedzialnymi za wybrane sekcje
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

                {/* Usunięto ogólny numer telefonu, zgodnie z prośbą o kontakty do sekcji */}

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
                    <p className="text-gray-600">
                      Pn-Pt: 15:00-20:00
                      <br />
                      Sb: 9:00-15:00
                    </p>
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

          {/* Prawa kolumna: kontakty do sekcji (zamiast formularza) */}
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Kontakty do sekcji</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Piłka nożna dziewcząt */}
              <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                <h4 className="text-lg font-semibold text-gray-900">Piłka nożna dziewcząt</h4>
                <p className="text-gray-700 mt-1">Mateusz Kruszyński</p>
                <a
                  href="tel:+48881534010"
                  className="mt-3 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                  aria-label="Zadzwoń do Mateusza Kruszyńskiego"
                >
                  <Phone className="h-5 w-5" />
                  881 534 010
                </a>
              </div>

              {/* Cheerleading */}
              <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                <h4 className="text-lg font-semibold text-gray-900">Cheerleading</h4>
                <p className="text-gray-700 mt-1">Nina Sobczyk</p>
                <a
                  href="tel:+48798096473"
                  className="mt-3 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                  aria-label="Zadzwoń do Niny Sobczyk"
                >
                  <Phone className="h-5 w-5" />
                  798 096 473
                </a>
              </div>

              {/* Padel */}
              <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                <h4 className="text-lg font-semibold text-gray-900">Padel</h4>
                <a
                  href="tel:+48534044544"
                  className="mt-3 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                  aria-label="Zadzwoń do sekcji Padel"
                >
                  <Phone className="h-5 w-5" />
                  534 044 544
                </a>
              </div>

              {/* Stay Active */}
              <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                <h4 className="text-lg font-semibold text-gray-900">Stay Active</h4>

                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-gray-700">
                      Fitness, Zdrowy Kręgosłup — Izabela Sobiecka
                    </p>
                    <a
                      href="tel:+48501516445"
                      className="mt-1 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                      aria-label="Zadzwoń do Izabeli Sobieckiej"
                    >
                      <Phone className="h-5 w-5" />
                      501 516 445
                    </a>
                  </div>

                  <div>
                    <p className="text-gray-700">Zajęcia biegowe — Mateusz Bieszke</p>
                    <a
                      href="tel:+48518040621"
                      className="mt-1 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                      aria-label="Zadzwoń do Mateusza Bieszke"
                    >
                      <Phone className="h-5 w-5" />
                      518 040 621
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Koniec prawej kolumny */}
        </div>
      </div>
    </section>
  );
};

export default Contact;