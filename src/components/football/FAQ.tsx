
const FAQ = () => {
  const faqs = [
    {
      question: "Co zabrać na trening?",
      answer: "Strój sportowy, buty z kolkami (lub sportowe na początek), ochraniacze na golenie, bidon z wodą. Piłki zapewniamy."
    },
    {
      question: "Czy można zapisać dziecko w trakcie sezonu?",
      answer: "Tak! Przyjmujemy nowe dziewczynki przez cały rok szkolny. Pierwszy trening jest zawsze bezpłatny i testowy."
    },
    {
      question: "Ile kosztuje uczestnictwo?",
      answer: "Miesięczna składka wynosi 50 zł za 8 treningów. Pierwszy trening jest bezpłatny. Żadnych dodatkowych opłat."
    },
    {
      question: "Czy dziecko musi mieć doświadczenie w piłce nożnej?",
      answer: "Nie! Przyjmujemy dziewczynki na każdym poziomie - od początkujących po te z doświadczeniem. Dostosowujemy ćwiczenia do umiejętności."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Najczęściej zadawane pytania</h2>
          <p className="text-xl text-gray-600">
            Znajdź odpowiedzi na pytania innych rodziców
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">{faq.question}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Masz inne pytania?</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300">
            Skontaktuj się z nami
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
