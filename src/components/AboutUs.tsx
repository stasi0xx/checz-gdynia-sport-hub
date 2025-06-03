
const AboutUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">O nas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stowarzyszenie CHECZ Gdynia to miejsce, gdzie sport łączy się z pasją i przyjaźnią
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">M</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Nasza Misja</h3>
              <p className="text-gray-600">
                Rozwijamy talenty sportowe dzieci i młodzieży, promujemy zdrowy styl życia 
                i budujemy silną społeczność sportową w Gdyni.
              </p>
            </div>
            
            <div className="bg-yellow-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">H</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Historia</h3>
              <p className="text-gray-600">
                Działamy od 2015 roku, skupiając wokół siebie setki zawodników 
                i ich rodzin. Nasze sukcesy to efekt wspólnej pracy i determinacji.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">W</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Wartości</h3>
              <p className="text-gray-600">
                Fair play, wzajemny szacunek, determinacja i radość z uprawiania sportu 
                to fundamenty naszej działalności.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
