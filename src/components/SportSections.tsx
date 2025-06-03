
const SportSections = () => {
  const sections = [
    {
      title: "Piłka Nożna Dziewcząt",
      description: "Trenujemy młode talenty w kategorii dziewcząt. Nasze drużyny regularnie odnoszą sukcesy w rozgrywkach lokalnych.",
      age: "6-18 lat",
      color: "bg-pink-500",
      features: ["Treningi techniczne", "Gra zespołowa", "Rozgrywki ligowe"]
    },
    {
      title: "Cheerleading",
      description: "Dynamiczne treningi łączące taniec, akrobatykę i gimnastykę. Rozwijamy gracię, siłę i pewność siebie.",
      age: "5-16 lat",
      color: "bg-purple-500",
      features: ["Choreografia", "Akrobatyka", "Konkursy"]
    },
    {
      title: "Padel",
      description: "Nowoczesny sport rakietowy dla dorosłych. Łączy w sobie elementy tenisa i squasha w przyjaznej atmosferze.",
      age: "16+ lat",
      color: "bg-orange-500",
      features: ["Gra podwójna", "Turniety", "Społeczność"]
    },
    {
      title: "Fitness",
      description: "Zajęcia kondycyjne dla wszystkich poziomów zaawansowania. Popraw swoją formę fizyczną w grupie motywujących osób.",
      age: "16+ lat",
      color: "bg-green-500",
      features: ["Trening siłowy", "Cardio", "Stretching"]
    },
    {
      title: "Programy Społeczne",
      description: "Inicjatywy integrujące lokalną społeczność poprzez sport. Organizujemy wydarzenia charytatywne i edukacyjne.",
      age: "Wszyscy",
      color: "bg-blue-500",
      features: ["Wydarzenia", "Integracja", "Edukacja"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Nasze Sekcje</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferujemy różnorodne zajęcia sportowe dla każdego wieku i poziomu zaawansowania
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className={`${section.color} h-48 relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {section.age}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
                <div className="space-y-2">
                  {section.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportSections;
