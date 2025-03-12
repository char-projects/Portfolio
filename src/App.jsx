import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { About, Contact, Experience, Languages, Hero, Navbar, Footer, Tech, Works, StarsCanvas } from "./components";
import { arrow } from "./assets";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
      <button
          onClick={scrollToTop}
          className={`fixed bottom-5 right-5 p-3 bg-pink-200 text-white rounded-full shadow-lg transition-opacity duration-300 ${
              visible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        <img src={arrow} alt="Scroll to top" className="w-6 h-6" />
      </button>
  );
};

const App = () => {
  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Languages />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
            <Footer />
          </div>
          <ScrollToTopButton />
        </div>
      </BrowserRouter>
  );
};

export default App;
