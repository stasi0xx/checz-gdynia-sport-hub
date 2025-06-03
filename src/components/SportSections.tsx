
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
      link: "/pilka-nozna-dziewczat"
    },
    {
      title: "Cheerleading",
      description: "Taniec, akrobatyka i doping sportowy. Rozwijamy grację, siłę i pewność siebie.",
      ageGroup: "8-16 lat",
      schedule: "Śr, Pt 18:00-19:30",
      icon: "📣"
    },
    {
      title: "Padel",
      description: "Nowoczesny sport rakietowy łączący elementy tenisa i squasha. Dla dorosłych i młodzieży.",
      ageGroup: "14+ lat",
      schedule: "Codziennie",
      icon: "🎾"
    },
    {
      title: "Fitness",
      description: "Zajęcia fitness dostosowane do różnych poziomów zaawansowania. Zdrowie i kondycja dla każdego.",
      ageGroup: "16+ lat",
      schedule: "Pn, Śr, Pt 19:00-20:00",
      icon: "💪"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Nasze Sekcje Sportowe</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferujemy różnorodne zajęcia sportowe dla dzieci, młodzieży i dorosłych
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {section.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{section.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{section.description}</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm">
                  <span className="font-semibold text-blue-600 mr-2">Wiek:</span>
                  <span className="text-gray-700">{section.ageGroup}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-semibold text-blue-600 mr-2">Grafik:</span>
                  <span className="text-gray-700">{section.schedule}</span>
                </div>
              </div>
              {section.link ? (
                <Link to={section.link}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Dowiedz się więcej
                  </Button>
                </Link>
              ) : (
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Dowiedz się więcej
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportSections;
