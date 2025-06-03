
const Partners = () => {
  const partners = [
    { name: "Ministerstwo Sportu i Turystyki", type: "Instytucja rządowa" },
    { name: "Urząd Miasta Gdyni", type: "Samorząd lokalny" },
    { name: "Gdyński Ośrodek Sportu i Rekreacji", type: "Partner sportowy" },
    { name: "Lokalne przedsiębiorstwa", type: "Sponsorzy prywatni" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Nasi Partnerzy</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Współpracujemy z instytucjami i firmami, które wspierają rozwój sportu w Gdyni
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-600">{partner.type}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 p-8 bg-blue-600 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">Chcesz zostać naszym partnerem?</h3>
          <p className="text-blue-100 mb-6">
            Wspieraj rozwój sportu w Gdyni i dołącz do grona naszych partnerów
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
            Skontaktuj się z nami
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
