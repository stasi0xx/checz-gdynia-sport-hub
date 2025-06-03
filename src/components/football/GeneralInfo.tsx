
const GeneralInfo = () => {
  const infoItems = [
    {
      label: "Wiek uczestniczek",
      value: "6–13 lat",
      icon: "👧"
    },
    {
      label: "Częstotliwość treningów",
      value: "2 razy w tygodniu",
      icon: "📅"
    },
    {
      label: "Dni treningów",
      value: "Wtorki i czwartki",
      icon: "⏰"
    },
    {
      label: "Lokalizacja",
      value: "ul. Zamenhofa 17, Gdynia",
      icon: "📍"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Informacje ogólne</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Treningi prowadzone przez doświadczonych trenerów w atmosferze zabawy i rozwoju. 
            Skupiamy się na ogólnorozwojowych ćwiczeniach z elementami piłki nożnej.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoItems.map((item, index) => (
            <div key={index} className="bg-blue-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">{item.label}</h3>
              <p className="text-gray-700 font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeneralInfo;
