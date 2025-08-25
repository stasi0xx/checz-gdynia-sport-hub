
import { useState } from "react";

const Gallery = () => {
  const [expanded, setExpanded] = useState(false);
  const images = [
    { src: "/img/galeria 5.jpg", alt: "Wydarzenia społeczne", category: "Wydarzenia" },
      { src: "/img/galeria 6.jpg", alt: "Nagrody i sukcesy", category: "Sukcesy" },
    { src: "/img/galeria 2.jpg", alt: "Zajęcia cheerleading", category: "Cheerleading" },
    { src: "/img/galeria 4.jpg", alt: "Sala fitness", category: "Fitness" },
    {src: '/img/torNinja.jpg', alt: 'Tor Ninja', category: 'Tor Nina'},
    {src: "/img/sekcja gdyńska liga stell darta.jpg", alt: "dart", category: "liga stell darta"},
    { src: "/img/galeria 1.jpg", alt: "Treningi piłki nożnej", category: "Piłka nożna" },

    { src: "/img/galeria 3.jpg", alt: "Kort padel", category: "Padel" },



    { src: "/img/galeria 7.jpg", alt: "Zdjęcie grupowe", category: "Piłka nożna"}
  ];
  const visibleImages = expanded ? images : images.slice(0, 6);


  return (
      <>
      {/* Sekcja z filmami */}
      <section className="py-16 bg-white" id="filmy">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Nasze filmy</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Zobacz filmiki stworze przez naszych podopiecznych
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src="https://www.youtube.com/embed/8_Ry9uiNmtU"
                title="Film 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 md:h-80 rounded-xl shadow-lg border"
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src="https://www.youtube.com/embed/c8HGGFg35Xc"
                title="Film 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 md:h-80 rounded-xl shadow-lg border"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* Sekcja galerii */}
      <section className="py-20 bg-gray-50" id="galeria">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Galeria</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Zobacz jak wyglądają nasze treningi i wydarzenia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleImages.map((image, index) => (
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
            {images.length > 6 && (
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                onClick={() => setExpanded((prev) => !prev)}
              >
                {expanded ? "Pokaż mniej" : "Zobacz więcej zdjęć"}
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
