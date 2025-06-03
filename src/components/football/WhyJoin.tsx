
const WhyJoin = () => {
  const benefits = [
    {
      title: "Zajęcia ogólnorozwojowe + elementy piłki nożnej",
      description: "Rozwijamy motorykę, koordynację i podstawowe umiejętności piłkarskie w zabawowej formie",
      icon: "👟"
    },
    {
      title: "Świetna atmosfera i małe grupy",
      description: "Maksymalnie 12 dziewczynek w grupie zapewnia indywidualne podejście i przyjazną atmosferę",
      icon: "💬"
    },
    {
      title: "Możliwość startu w turniejach i meczach",
      description: "Organizujemy mecze sparingowe i udział w lokalnych turniejach dla chętnych zawodniczek",
      icon: "🏅"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Dlaczego warto dołączyć?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Poznaj korzyści płynące z treningów w naszej drużynie
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center space-y-4 group">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-yellow-400">{benefit.title}</h3>
              <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
