
const Gallery = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=600", alt: "Treningi piłki nożnej", category: "Piłka nożna" },
    { src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600", alt: "Zajęcia cheerleading", category: "Cheerleading" },
    { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600", alt: "Kort padel", category: "Padel" },
    { src: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=600", alt: "Sala fitness", category: "Fitness" },
    { src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600", alt: "Wydarzenia społeczne", category: "Wydarzenia" },
    { src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600", alt: "Nagrody i sukcesy", category: "Sukcesy" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Galeria</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Zobacz jak wyglądają nasze treningi i wydarzenia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300">
            Zobacz więcej zdjęć
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
