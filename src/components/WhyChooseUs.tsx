import { Users } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white" id="onas">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Dlaczego warto wybrać CHECZ Gdynia?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
            Poznaj korzyści płynące z treningów w naszym klubie!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Małe grupy treningowe */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 border-2 border-yellow-400 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col items-center h-full relative overflow-hidden">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 z-10">👥</div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2 drop-shadow">Grupy treningowe</h3>
            <p className="text-blue-100 leading-relaxed text-sm z-10">
              Nasze zajęcia sportowe oferują grupy treningowe dostosowane do różnych grup wiekowych, od dzieci po dorosłych, aby każdy mógł znaleźć coś dla siebie. Ponadto, programy są podzielone na poziomy zaawansowania, co pozwala uczestnikom rozwijać umiejętności w bezpiecznej i wspierającej atmosferze.
            </p>
            <span className="absolute bottom-2 right-2 text-yellow-400 opacity-10 text-7xl pointer-events-none select-none">⭐</span>
          </div>
          {/* Doświadczeni trenerzy */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-900 border-2 border-blue-400 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col items-center h-full relative overflow-hidden">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 z-10">🎓</div>
            <h3 className="text-lg font-semibold text-yellow-300 mb-2 drop-shadow">Doświadczeni trenerzy</h3>
            <p className="text-blue-100 leading-relaxed text-sm z-10">
              Nasi trenerzy posiadają odpowiednie licencje i wieloletnie doświadczenie w pracy w sporcie. To pasjonaci, którzy z sercem i profesjonalizmem wprowadzają wszystkich w świat sportu i rekreacji, dbając o wszechstronny rozwój.
            </p>
            <span className="absolute top-2 left-2 text-blue-200 opacity-10 text-7xl pointer-events-none select-none">🏅</span>
          </div>
          {/* Przyjazna atmosfera */}
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 border-2 border-pink-300 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col items-center h-full relative overflow-hidden">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 z-10">🤝</div>
            <h3 className="text-lg font-semibold text-pink-200 mb-2 drop-shadow">Przyjazna atmosfera</h3>
            <p className="text-blue-100 leading-relaxed text-sm z-10">
              Tworzymy środowisko, w którym każdy czuje się mile widziany i może rozwijać swoje umiejętności. W Checzy stawiamy na wzajemny szacunek, współpracę i radość z gry, budując prawdziwą sportową rodzinę.
            </p>
            <span className="absolute bottom-2 left-2 text-pink-200 opacity-10 text-7xl pointer-events-none select-none">💖</span>
          </div>
          {/* Nowoczesne obiekty */}
          <div className="bg-gradient-to-br from-blue-800 to-blue-900 border-2 border-green-300 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col items-center h-full relative overflow-hidden">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 z-10">🏟️</div>
            <h3 className="text-lg font-semibold text-green-200 mb-2 drop-shadow">Nowoczesne obiekty</h3>
            <p className="text-blue-100 leading-relaxed text-sm z-10">
              Dysponujemy profesjonalnym sprzętem i bezpiecznymi obiektami sportowymi, które zapewniają optymalne warunki do treningów i doskonalenia techniki. Dbamy o komfort i bezpieczeństwo naszych zawodników na każdym etapie szkolenia.
            </p>
            <span className="absolute top-2 right-2 text-green-200 opacity-10 text-7xl pointer-events-none select-none">⚽</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
