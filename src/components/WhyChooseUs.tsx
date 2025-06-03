
const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Małe grupy treningowe",
      description: "Maksymalnie 12 osób w grupie zapewnia indywidualne podejście do każdego uczestnika",
      icon: "👥"
    },
    {
      title: "Doświadczeni trenerzy",
      description: "Nasi trenerzy posiadają odpowiednie licencje i wieloletnie doświadczenie w pracy z dziećmi",
      icon: "🏆"
    },
    {
      title: "Przyjazna atmosfera",
      description: "Tworzymy środowisko, w którym każdy czuje się mile widziany i może rozwijać swoje umiejętności",
      icon: "💝"
    },
    {
      title: "Nowoczesne obiekty",
      description: "Dysponujemy profesjonalnym sprzętem i bezpiecznymi obiektami sportowymi",
      icon: "🏟️"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Dlaczego warto wybrać CHECZ Gdynia?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Poznaj korzyści płynące z trenowania w naszym klubie
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

export default WhyChooseUs;
