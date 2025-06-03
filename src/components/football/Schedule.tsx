
const Schedule = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Harmonogram treningów</h2>
          <p className="text-xl text-gray-600">
            Regularne treningi dla systematycznego rozwoju umiejętności
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Wtorki</h3>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-800">17:00 - 18:30</p>
                <p className="text-gray-600">Stadion Checz, Gdynia</p>
                <p className="text-gray-600">ul. Zamenhofa 17</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-8 rounded-2xl border-l-4 border-yellow-500">
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">Czwartki</h3>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-800">17:00 - 18:30</p>
                <p className="text-gray-600">Stadion Checz, Gdynia</p>
                <p className="text-gray-600">ul. Zamenhofa 17</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-2xl text-center">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Czas trwania treningu</h4>
            <p className="text-gray-600">90 minut - idealny czas dla dzieci w tym wieku</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
