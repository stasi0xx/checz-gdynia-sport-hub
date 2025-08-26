import {Button} from "@/components/ui/button.tsx";

const Partners = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* SPONSOR TYTULARNY */}
        <div className="flex flex-col items-center mb-16">
          <span className="uppercase text-sm tracking-widest text-gray-600 mb-2">SPONSOR TYTULARNY</span>
          <img src="/img/energa.jpg" alt="Energa" className="h-12 md:h-20 object-contain mb-8" />
        </div>

        {/* SPONSOR GŁÓWNY */}
        <div className="flex flex-col items-center mb-16">
          <span className="uppercase text-sm tracking-widest text-gray-600 mb-2">Sponsor główny</span>
          <img src="/img/sponsorglowny.webp" alt="Plus500" className="h-12 md:h-12 object-contain mb-8" />
        </div>

        <hr className="my-8 border-gray-200" />

        {/* PARTNER TECHNICZNY / MEDYCZNY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16">
          <div className="flex flex-col items-center">
            <span className="uppercase text-sm tracking-widest text-gray-600 mb-4">PARTNER TECHNICZNY</span>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <img src="/img/adidas.webp" alt="Adidas" className="h-10 md:h-12 object-contain" />
              <img src="/img/rgol.webp" alt="Rgol" className="h-10 md:h-12 object-contain" />
            </div>
          </div>
          <div></div>
          <div className="flex flex-col items-center">
            <span className="uppercase text-sm tracking-widest text-gray-600 mb-4">PARTNER MEDYCZNY</span>
            <img src="/img/rehasport.webp" alt="Rehasport" className="h-10 md:h-12 object-contain" />
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* PARTNERZY */}
        <div className="text-center mb-8">
          <span className="uppercase text-sm tracking-widest text-gray-600">Partnerzy</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10 mb-16">
          <img src="/img/islo.webp" alt="I Społeczne Liceum Ogólnokształcące" className="h-8 md:h-10 object-contain" />
          <img src="/img/muuw.webp" alt="MUUW Center" className="h-8 md:h-10 object-contain" />
          <img src="/img/ingremino.webp" alt="In Gremino" className="h-8 md:h-10 object-contain" />
          <img src="/img/planeta.webp" alt="Planeta Trójmiasto" className="h-8 md:h-10 object-contain" />
        </div>

        <hr className="my-8 border-gray-200" />

        {/* FINANSOWANIE SZKOLENIA */}
        <div className="text-center mb-8 flex justify-center">
          <span className="uppercase text-sm tracking-widest text-gray-600 text-center mx-auto">
            FINANSOWANIE SZKOLENIA
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16 justify-items-center">
          <div className="flex flex-col items-center w-auto">
            <img src="/img/msit.webp" alt="Ministerstwo Sportu i Turystyki" className="h-14 md:h-16 object-contain" />
            <span className="mt-3 text-gray-700 text-base font-normal text-center leading-relaxed max-w-[20rem] md:max-w-[26rem]">
              Realizacja zadań współfinansowana ze środków Ministerstwa Sportu i Turystyki
            </span>
          </div>
          <div className="flex flex-col items-center w-auto">
            <img src="/img/gdynia-sport-logo.webp" alt="Gdynia Sport" className="h-16 md:h-20 object-contain" />
            <span className="mt-3 text-gray-700 text-base font-normal text-center leading-relaxed max-w-[20rem] md:max-w-[26rem]">
              Sportowe szkolenie dzieci i młodzieży w Stowarzyszeniu Ognisko TKKF Checz Gdynia współfinansowane jest przez Gminę Gdynia
            </span>
          </div>
          <div className="flex flex-col items-center w-auto">
            <img src="/img/herb-chylonia.webp" alt="Rada Dzielnicy Chylonia" className="h-14 md:h-16 object-contain" />
            <span className="mt-3 text-gray-700 text-base font-normal text-center leading-relaxed max-w-[20rem] md:max-w-[26rem]">
              Stowarzyszenie Ognisko TKKF Checz Gdynia wspiera Rada Dzielnicy Chylonia
            </span>
          </div>
        </div>

        <div className="text-center mt-16 p-8 bg-blue-600 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">Chcesz zostać naszym partnerem?</h3>
          <p className="text-blue-100 mb-6">
            Wspieraj rozwój sportu w Gdyni i dołącz do grona naszych partnerów
          </p>
          <Button asChild
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
            <a href="https://www.facebook.com/sportowachecz" target="_blank">Skontaktuj się z nami</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Partners;