
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SportSections = () => {
  const sections = [
    {
      title: "Piłka Nożna Dziewcząt",
      description: "Treningi dla dziewczynek w wieku 6-13 lat. Rozwój umiejętności piłkarskich w przyjaznej atmosferze.",
      ageGroup: "6-13 lat",
      schedule: "Wt, Czw 17:00-18:30",
      icon: "⚽",
      link: "https://checzgdynia.sportbm.com/",
      image: "/img/sekcje piłka nożna.jpg"
    },
    {
      title: "Cheerleading",
      description: "Taniec, akrobatyka i doping sportowy. Rozwijamy grację, siłę i pewność siebie.",
      ageGroup: "8-16 lat",
      schedule: "Śr, Pt 18:00-19:30",
      icon: "📣",
      link: "https://checz.sportbm.com/",
      image: "/img/sekcje cheerleading.jpg"
    },
    {
      title: "Padel",
      description: "Nowoczesny sport rakietowy łączący elementy tenisa i squasha. Dla dorosłych i młodzieży.",
      ageGroup: "14+ lat",
      schedule: "Codziennie",
      icon: "🎾",
      link: "https://gdyniapadelclub.pl/",
      image: "/img/sekcje padel.png"
    },
    {
      title: "Stay active",
      description: "Zajęcia fitness dostosowane do różnych poziomów zaawansowania. Zdrowie i kondycja dla każdego.",
      ageGroup: "16+ lat",
      schedule: "Pn, Śr, Pt 19:00-20:00",
      icon: "💪",
      link: "https://www.facebook.com/sportowachecz/posts/1319807183481724 ",
      image: "/img/trening.png"
    }
  ];

  const extraSections = [
    {
      title: "Gdyńska Liga Podwórkowa",
      description: "Amatorska liga piłkarska dla dzieci i młodzieży z okolicy.",
      image: "/img/liga podworkowa.jpg",
      button: { label: "Dowiedz się więcej", link: "https://www.facebook.com/sportowachecz/posts/pfbid0gL86zvaAnSfiwwu1P22XkmCS6zUXHREUZQFTeTixZuN3KpJbDoQh1PePZeXrKyvbl" }
    },
    {
      title: "Gdyńska Liga Stell Darta",
      description: "Rozgrywki darta dla pasjonatów i amatorów. Rywalizacja i dobra zabawa!",
      image: "/img/sekcja gdyńska liga stell darta.jpg",
      button: { label: "Zobacz szczegóły", link: "https://www.facebook.com/blyskawicagdynia" }
    },
    {
      title: "Queens of Six",
      description: "Piłkarska liga szóstek dla kobiet. Sportowa rywalizacja i integracja.",
      image: "/img/herb-chylonia.webp",
      button: { label: "Dołącz do ligi", link: "https://www.facebook.com/ligaszostek" }
    },



  ];

  // Nowe sekcje na dole
  const extraSections2 = [

    {
      title: "Sportowa Checz",
      description: "Wydarzenia i aktywności sportowe dla całej społeczności Checzy.",
      image: "/img/sportowachecz.jpg",
      button: { label: "Zobacz wydarzenia", link: "https://www.facebook.com/sportowachecz" }
    },
    {
      title: "Strefa Ninja",
      description: "Tor przeszkód i zajęcia sprawnościowe inspirowane Ninja Warrior. Dla dzieci i dorosłych!",
      image: "/img/torNinja.jpg",
      button: { label: "Sprawdź atrakcje", link: "https://www.facebook.com/reel/749569914515097" }
    },
    {
      title: "Ogród Sąsiedzki",
      description: "Przestrzeń do wspólnego spędzania czasu, relaksu i integracji sąsiedzkiej.",
      image: "/img/ogródsąsiedzki.jpg",
      button: { label: "Poznaj inicjatywę", link: "https://www.facebook.com/sportowachecz/posts/978600477602398" }
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="sekcje">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Nasze Sekcje Sportowe</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferujemy różnorodne zajęcia sportowe dla dzieci, młodzieży i dorosłych
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            section.link ? (
              <a
                key={index}
                href={section.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  className="relative h-96 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col justify-end"
                  style={{ backgroundImage: `url('${section.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="w-full bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0 h-32 pointer-events-none"></div>
                  <div className="relative z-10 p-6 flex items-end h-32">
                    <span className="text-white text-3xl font-bold drop-shadow-lg flex items-center gap-2">
                      {section.title}
                      <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-5 text-4xl">&raquo;</span>
                    </span>
                  </div>
                </div>
              </a>
            ) : (
              <div
                key={index}
                className="relative h-96 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col justify-end"
                style={{ backgroundImage: `url('${section.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="w-full bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0 h-32 pointer-events-none"></div>
                <div className="relative z-10 p-6 flex items-end h-32">
                  <span className="text-white text-3xl font-bold drop-shadow-lg flex items-center gap-2">
                    {section.title}
                    <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-5 text-4xl">&raquo;</span>
                  </span>
                </div>
              </div>
            )
          ))}
        </div>
        {/* Dodatkowe kafelki */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {extraSections.map((section, index) => (
            <div key={index} className="relative h-80 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group flex items-end hover:scale-105 hover:shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${section.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="relative z-10 p-6 w-full">
                <h3 className="text-xl font-bold text-white mb-3">{section.title}</h3>
                <p className="text-gray-200 mb-4 leading-relaxed">{section.description}</p>
                <a href={section.button.link} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                    {section.button.label}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Nowe dodatkowe kafelki */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {extraSections2.map((section, index) => (
            <div key={index} className="relative h-80 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group flex items-end hover:scale-105 hover:shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${section.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="relative z-10 p-6 w-full">
                <h3 className="text-xl font-bold text-white mb-3">{section.title}</h3>
                <p className="text-gray-200 mb-4 leading-relaxed">{section.description}</p>
                <a href={section.button.link} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                    {section.button.label}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportSections;
