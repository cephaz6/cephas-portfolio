import { ArrowDown, Github, Linkedin, Mail, Download, Eye } from "lucide-react";
import logo from "../assets/cephas.jpg";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-6 w-full min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
      {/* Advanced animated background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(52, 211, 153, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(52, 211, 153, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 left-10 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse delay-700"></div>
      <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>

      <div className="w-full h-screen flex items-center relative z-10">
        <div className="w-full px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl mx-auto">
            {/* Left side - Content */}
            <div className="space-y-8 lg:space-y-10 w-full">
              {/* Status indicator */}
              <div className="flex items-center space-x-3 text-emerald-400 text-sm font-medium">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>Available for new opportunities</span>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight">
                    <span className="text-white">OSELUMESE</span>
                    <br />
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                      CEPHAS
                    </span>
                  </h1>

                  <div className="space-y-2">
                    <div className="text-xl lg:text-2xl xl:text-3xl text-gray-300 font-light">
                      Full Stack Developer
                    </div>
                    <div className="text-lg text-emerald-400 font-medium">
                      & Co-Founder
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg lg:text-xl max-w-2xl leading-relaxed">
                  Crafting{" "}
                  <span className="text-emerald-400 font-semibold">
                    scalable digital solutions
                  </span>{" "}
                  with 4+ years of experience. MSc Software Engineering graduate
                  passionate about
                  <span className="text-teal-400 font-semibold">
                    {" "}
                    innovation
                  </span>{" "}
                  and clean architecture.
                </p>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-2xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40">
                  <span className="flex items-center space-x-2">
                    <Eye size={20} />
                    <span>View My Work</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>

                <button className="group relative px-8 py-4 bg-gray-800/50 backdrop-blur-sm border-2 border-gray-700 text-gray-300 font-semibold rounded-2xl hover:border-emerald-400 hover:text-white hover:bg-emerald-400/10 transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center space-x-2">
                    <Download size={20} />
                    <span>Download CV</span>
                  </span>
                </button>
              </div>

              {/* Enhanced Social Links */}
              <div className="flex space-x-6">
                <a
                  href="mailto:cephasblog@gmail.com"
                  className="group relative p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-emerald-400 hover:bg-emerald-400/10 transition-all duration-300 transform hover:scale-110"
                >
                  <Mail
                    size={24}
                    className="text-gray-400 group-hover:text-emerald-400 transition-colors"
                  />
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>

                <a
                  href="#"
                  className="group relative p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-emerald-400 hover:bg-emerald-400/10 transition-all duration-300 transform hover:scale-110"
                >
                  <Github
                    size={24}
                    className="text-gray-400 group-hover:text-emerald-400 transition-colors"
                  />
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>

                <a
                  href="#"
                  className="group relative p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-emerald-400 hover:bg-emerald-400/10 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin
                    size={24}
                    className="text-gray-400 group-hover:text-emerald-400 transition-colors"
                  />
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>

              {/* Stats */}
              <div className="flex space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">4+</div>
                  <div className="text-sm text-gray-400">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400">50+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">100%</div>
                  <div className="text-sm text-gray-400">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right side - Enhanced Profile */}
            <div className="flex justify-center lg:justify-end w-full">
              <div className="relative group w-full max-w-md lg:max-w-lg">
                {/* Animated gradient rings */}
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 animate-pulse transition-opacity duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

                {/* Main profile container */}
                <div className="relative w-full aspect-square max-w-80 lg:max-w-96 mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 group-hover:border-emerald-400/50 transition-all duration-500">
                  {/* Placeholder for image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <img src={logo} alt="" />
                  </div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>

                  {/* Floating tech badges */}
                  <div className="absolute top-6 right-6 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-emerald-400 border border-emerald-400/30 animate-bounce">
                    Javascript
                  </div>
                  <div className="absolute bottom-6 left-6 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-teal-400 border border-teal-400/30 animate-bounce delay-300">
                    Python
                  </div>
                  <div className="absolute top-1/2 left-6 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-cyan-400 border border-cyan-400/30 animate-bounce delay-700">
                    DevOps
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-emerald-400/50 rounded-tl-lg"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-emerald-400/50 rounded-br-lg"></div>
                </div>

                {/* Floating geometric shapes */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl opacity-20 blur-xl animate-spin-slow"></div>
                <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl opacity-30 blur-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
        <span className="text-gray-400 text-sm">Scroll to explore</span>
        <ArrowDown size={24} className="text-emerald-400" />
      </div>

      {/* Side decorative elements */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-emerald-400 to-teal-500 opacity-50"></div>
      <div className="absolute right-0 top-1/3 transform -translate-y-1/2 w-1 h-24 bg-gradient-to-b from-teal-400 to-cyan-500 opacity-50"></div>
    </section>
  );
};

export default HeroSection;
