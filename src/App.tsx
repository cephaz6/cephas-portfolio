import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/Hero";
import ProjectsSection from "./components/Projects";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/contactSection";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add a slight delay for smooth loading animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`font-base w-full min-h-screen transition-opacity duration-1000 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800  ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Navigation - uncomment when ready */}
      {/* <Navigation /> */}

      <main className="w-full relative">
        {/* Home Section */}
        <section id="home" className="w-full relative">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about" className="w-full relative scroll-mt-20">
          <AboutSection />
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full relative scroll-mt-20">
          <SkillsSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full relative scroll-mt-20">
          <ProjectsSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full relative scroll-mt-20">
          <ContactSection />
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 border-t border-gray-800/50 py-12 relative overflow-hidden">
        {/* Footer background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(52, 211, 153, 0.1) 25%, transparent 25%), 
                               linear-gradient(-45deg, rgba(52, 211, 153, 0.1) 25%, transparent 25%)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Footer content */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Left side */}
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold text-white mb-2">
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                    Ose Cephas
                  </span>
                </div>
                <div className="text-gray-400 text-sm">
                  © 2024 All rights reserved.
                </div>
              </div>

              {/* Center - Quick links */}
              <div className="flex space-x-8 text-sm"></div>

              {/* Right side */}
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

        {/* Footer decorative elements */}
        <div className="absolute bottom-0 left-1/4 w-32 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 opacity-50"></div>
      </footer>
    </div>
  );
}

export default App;
