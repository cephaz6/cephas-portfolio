import { useEffect, useState } from "react";
import {
  Download,
  Menu,
  X,
  Code,
  //   Terminal,
  //   Rocket,
  //   Sparkles,
} from "lucide-react";

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-emerald-500/20 shadow-lg shadow-emerald-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <Code className="text-black w-6 h-6" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-bold text-xl tracking-tight">
                  Oselumese
                </div>
                <div className="text-emerald-400 text-xs font-medium">
                  Software Engineer
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium group py-2"
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="group relative px-6 py-3 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center space-x-2">
                <Download
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
                <span>Download CV</span>
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-emerald-400 transition-colors duration-300 hover:bg-emerald-400/10 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 space-y-4 border-t border-gray-800/50 bg-black/50 backdrop-blur-xl rounded-b-2xl mt-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium py-3 px-4 hover:bg-emerald-400/10 rounded-lg"
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-semibold rounded-xl transition-all duration-300">
              <span className="flex items-center justify-center space-x-2">
                <Download size={18} />
                <span>Download CV</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
