import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/contactSection";
import HeroSection from "./components/Hero";
import ProjectsSection from "./components/Projects";
import SkillsSection from "./components/SkillsSection";
import Navigation from "./components/Navigation";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`font-base w-full min-h-screen overflow-x-hidden transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Navigation />
      <main className="w-full">
        <section id="home" className="w-full">
          <HeroSection />
        </section>

        <section id="about" className="w-full scroll-mt-20">
          <div className="">
            <AboutSection />
          </div>
        </section>

        <section id="skills" className="w-full scroll-mt-20">
          <div className="">
            <SkillsSection />
          </div>
        </section>

        <section id="projects" className="w-full scroll-mt-20">
          <div className="">
            <ProjectsSection />
          </div>
        </section>

        <section id="contact" className="w-full scroll-mt-20">
          <div className="">
            <ContactSection />
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-black via-gray-900 to-black border-t border-emerald-500/20 py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(16, 185, 129, 0.1) 25%, transparent 25%), 
                                 linear-gradient(-45deg, rgba(16, 185, 129, 0.1) 25%, transparent 25%)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-2">
                  Oselumese Cephas
                </div>
                <div className="text-gray-400 text-sm">
                  © 2024 All rights reserved.
                </div>
              </div>

              <div className="text-center md:text-right">
                <div className="text-gray-400 text-sm mb-1">
                  Built with passion using
                </div>
                <div className="text-emerald-400 text-sm font-medium">
                  React • TypeScript • Tailwind CSS
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/4 w-32 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 opacity-50"></div>
      </footer>
    </div>
  );
}

export default App;
