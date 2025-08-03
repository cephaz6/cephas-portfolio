import {
  ArrowDown,
  Code,
  Github,
  LinkedinIcon,
  Mail,
  Sparkles,
  Terminal,
} from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/cephas.jpg";

const HeroSection = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const technologies = [
    "React",
    "Node.js",
    "Python",
    "TypeScript",
    "AWS",
    "Docker",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white relative overflow-hidden flex items-center px-6">
      <div className="container mx-auto">
        {/* Dynamic Background */}
        <div className="absolute inset-0 w-full h-full">
          {/* Animated Grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "100px 100px",
              animation: "grid-move 20s linear infinite",
            }}
          ></div>

          {/* Floating Code Blocks */}
          <div className="absolute top-20 left-20 text-emerald-400/20 font-mono text-sm animate-pulse">
            {'{ "code": "life" }'}
          </div>
          <div className="absolute top-1/3 right-20 text-teal-400/20 font-mono text-sm animate-pulse delay-1000">
            {'const dev = "awesome";'}
          </div>
          <div className="absolute bottom-1/3 left-1/4 text-cyan-400/20 font-mono text-sm animate-pulse delay-500">
            {"function() { return magic; }"}
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

          {/* Floating Particles */}
          <div className="absolute top-32 right-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-20 w-1 h-1 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="space-y-8 pt-36">
              {/* Status Badge */}
              <div className="inline-flex items-center space-x-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 backdrop-blur-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 text-sm font-medium">
                  Available for Opportunities
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-white">Hi, I'm</span>
                    <Sparkles className="text-emerald-400 w-12 h-12 animate-spin" />
                  </div>
                  <div className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                    OSELUMESE
                  </div>
                  <div className="text-white mt-2">CEPHAS</div>
                </h1>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Terminal className="text-emerald-400 w-8 h-8" />
                    <div className="text-2xl lg:text-3xl text-gray-300 font-light">
                      Software Engineer
                    </div>
                  </div>

                  {/* <div className="flex items-center space-x-4">
                    <Rocket className="text-teal-400 w-6 h-6" />
                    <div className="text-lg text-teal-400 font-medium">
                      Full Stack Developer & Co-Founder
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                Building scalable digital solutions with 4+ years of experience.
                MSc Software Engineering graduate passionate about innovative
                architecture, and solving complex problems.
              </p>

              <div className="space-y-4">
                {/* Dynamic Tech Display */}
                <div className="flex items-center space-x-4 mt-6">
                  <Code className="text-cyan-400 w-6 h-6" />
                  <div className="text-lg text-gray-300">
                    Currently working with{" "}
                    <span className="text-cyan-400 font-semibold transition-all duration-500">
                      {technologies[currentTech]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  {
                    icon: Mail,
                    href: "mailto:cephasblog@gmail.com",
                    color: "emerald",
                  },
                  {
                    icon: Github,
                    href: "https://github.com/cephaz6",
                    color: "teal",
                  },
                  {
                    icon: LinkedinIcon,
                    href: "https://linkedin.com/in/cephaz6",
                    color: "cyan",
                  },
                ].map(({ icon: Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    className={`group relative p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-${color}-400 hover:bg-${color}-400/10 transition-all duration-300 transform hover:scale-110`}
                  >
                    <Icon
                      size={24}
                      className={`text-gray-400 group-hover:text-${color}-400 transition-colors`}
                    />
                    <div
                      className={`absolute inset-0 bg-${color}-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                  </a>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800/50 pb-4">
                {[
                  { number: "4+", label: "Years Experience", color: "emerald" },
                  { number: "50+", label: "Projects Built", color: "teal" },
                  {
                    number: "100%",
                    label: "Client Satisfaction",
                    color: "cyan",
                  },
                ].map(({ number, label, color }, index) => (
                  <div key={index} className="text-center group">
                    <div
                      className={`text-3xl font-bold text-${color}-400 group-hover:scale-110 transition-transform`}
                    >
                      {number}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Enhanced Profile */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Main Container */}
                <div className="relative w-96 h-96 lg:w-[400px] lg:h-[400px]">
                  {/* Rotating Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 p-1 animate-spin-slow">
                    <div className="w-full h-full bg-black rounded-3xl"></div>
                  </div>

                  {/* Profile Container */}
                  <div className="absolute inset-2 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden border border-emerald-500/20">
                    {/* Profile Image Placeholder */}
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 relative">
                      <img
                        className="w-fit rounded-2xl"
                        src={logo}
                        alt=""
                        srcSet=""
                      />

                      {/* Overlay Effects */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>

                    {/* Floating Tech Badges */}
                    <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-lg text-emerald-400 text-sm border border-emerald-500/30 animate-bounce">
                      React
                    </div>
                    <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-lg text-teal-400 text-sm border border-teal-500/30 animate-bounce delay-300">
                      FastAPI
                    </div>
                    <div className="absolute top-1/2 left-6 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-lg text-cyan-400 text-sm border border-cyan-500/30 animate-bounce delay-700">
                      AWS
                    </div>
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-lg text-purple-400 text-sm border border-purple-500/30 animate-bounce delay-1000">
                      Python
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl opacity-20 blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl opacity-30 blur-lg animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-gray-400 text-sm">Scroll to explore</span>
          <ArrowDown size={24} className="text-emerald-400" />
        </div>

        {/* Side Accents */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-emerald-400 to-teal-500 opacity-50"></div>
        <div className="absolute right-0 top-1/3 transform -translate-y-1/2 w-1 h-24 bg-gradient-to-b from-teal-400 to-cyan-500 opacity-50"></div>
      </div>
    </section>
  );
};

export default HeroSection;
