
const Testimonials = () => {
  const testimonials = [
    {
      name: "Anna Kowalska",
      role: "Mama Zuzii (8 lat)",
      text: "Zuzia trenuje piłkę nożną od roku i jest zachwycona! Trenerzy są fantastyczni, a atmosfera bardzo przyjazna. Córka z niecierpliwością czeka na każdy trening.",
      rating: 5
    },
    {
      name: "Michał Nowak",
      role: "Zawodnik padel",
      text: "Świetne miejsce do grania w padel! Korty są w doskonałym stanie, a społeczność bardzo sympatyczna. Polecam każdemu, kto chce spróbować tego sportu.",
      rating: 5
    },
    {
      name: "Katarzyna Wiśniewska",
      role: "Mama Oli (12 lat)",
      text: "Ola trenuje cheerleading i fitness. Widać ogromny postęp w jej kondycji i pewności siebie. Trenerzy są profesjonalni i bardzo cierpliwi z dziećmi.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Co mówią o nas rodzice i zawodnicy</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Poznaj opinie naszej społeczności sportowej
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
