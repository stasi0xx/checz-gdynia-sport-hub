
const Testimonial = () => {
  return (
    <section className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-10 rounded-3xl shadow-xl border-l-8 border-yellow-500">
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-2xl">⭐</span>
              ))}
            </div>
            <blockquote className="text-2xl text-gray-700 mb-8 italic leading-relaxed">
              "Moja córka Maja trenuje w Checz Gdynia od 8 miesięcy i to była najlepsza decyzja! 
              Widać ogromny postęp w jej kondycji, pewności siebie i umiejętnościach społecznych. 
              Trenerzy są fantastyczni - profesjonalni, ale jednocześnie bardzo cierpliwi z dziećmi. 
              Maja nie może się doczekać każdego treningu!"
            </blockquote>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">AK</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">Anna Kowalska</h4>
                <p className="text-gray-600">Mama Mai (9 lat)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
