import { Users } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white" id="onas">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Dlaczego warto wybrać CHECZ Gdynia?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
            Poznaj korzyści płynące z treningów w naszym klubie i dołącz do legendy!
          </p>
        </div>
        <div className="bg-white/10 rounded-2xl shadow-lg p-8 md:p-12 mb-12 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">Z pasją od 1971 roku!</h3>
          <p className="text-blue-100 text-lg md:text-xl mb-2">
            CHECZ Gdynia to nie tylko klub – to kawałek historii. Jesteśmy najstarszym kobiecym klubem piłkarskim w Polsce, z dumą kontynuując misję zapoczątkowaną 21 kwietnia 1971 roku przez Romana i Edwardę Bieszke.
          </p>
          <p className="text-blue-100 text-lg md:text-xl mb-2">
            Od ponad pół wieku kształtujemy pokolenia utalentowanych zawodniczek, zdobywając w latach 1976-1979 aż czterokrotnie tytuł Mistrzyń Polski.
          </p>
          <p className="text-blue-100 text-lg md:text-xl">
            Wybierając nas, stajesz się częścią tej niezwykłej, sportowej opowieści.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Małe grupy treningowe */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 border-2 border-yellow-400 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col items-center h-full relative overflow-hidden">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 z-10">👥</div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2 drop-shadow">Małe grupy treningowe</h3>
            <p className="text-blue-100 leading-relaxed text-sm z-10">
              Maksymalnie 12 osób w grupie zapewnia indywidualne podejście do każdego uczestnika. W Checzy wierzymy, że osobiste zaangażowanie trenera to klucz do rozwoju i sukcesu.
            </p>
            <span className="absolute bottom-2 right-2 text-yellow-400 opacity-10 text-7xl pointer-events-none select-none">⭐</span>
          </div>
          {/* Doświadczeni trenerzy */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-900 border-2 border-blue-400 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col items-center h-full relative overflow-hidden">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 z-10">🎓</div>
            <h3 className="text-lg font-semibold text-yellow-300 mb-2 drop-shadow">Doświadczeni trenerzy</h3>
            <p className="text-blue-100 leading-relaxed text-sm z-10">
              Nasi trenerzy posiadają odpowiednie licencje i wieloletnie doświadczenie w pracy z dziećmi. To pasjonaci, którzy z sercem i profesjonalizmem wprowadzają młodych sportowców w świat piłki nożnej, dbając o ich wszechstronny rozwój.
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
