import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-blue-700 tracking-widest">CHECZ GDYNIA</a>
        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setOpen(!open)}
          aria-label="Otwórz menu"
        >
          <span className={`block h-0.5 w-6 bg-blue-700 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-blue-700 my-1 transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-blue-700 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
        {/* Menu */}
        <div className={`flex-col md:flex-row md:flex gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 z-40 ${open ? "flex" : "hidden"}`}>
          <a href="#sekcje" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-3 md:p-0">Sekcje</a>
          <a href="#onas" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-3 md:p-0">O nas</a>
          <a href="#galeria" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-3 md:p-0">Galeria</a>
          <a href="#kontakt" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-3 md:p-0">Kontakt</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 