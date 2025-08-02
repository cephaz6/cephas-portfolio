import { Code2, GraduationCap, Users, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "4+ Years Experience",
      description: "Full-stack development with modern technologies",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "MSc Software Engineering",
      description: "Distinction from University of Greater Manchester",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Co-Founder",
      description: "Led startup development at Tindax Technologies",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "22% Growth",
      description: "Increased customer satisfaction through agile practices",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(52, 211, 153, 0.4) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left side - Story */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">
                  Building Digital Solutions with Purpose
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I'm a dynamic software engineer with a unique blend of
                    technical expertise and leadership experience. My journey
                    spans from co-founding a tech startup to teaching the next
                    generation of developers, giving me a comprehensive
                    understanding of both the technical and human sides of
                    technology.
                  </p>
                  <p>
                    With my MSc in Software Engineering from the University of
                    Greater Manchester and 4+ years of hands-on experience, I
                    specialize in architecting scalable web applications,
                    implementing DevOps practices, and leading cross-functional
                    teams to deliver innovative digital solutions.
                  </p>
                </div>
              </div>

              {/* Key strengths */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-emerald-400">
                  Core Strengths
                </h4>
                <div className="space-y-3">
                  {[
                    "Full-stack development across modern tech stacks",
                    "Startup experience with agile methodologies",
                    "Strong communication from teaching background",
                    "Cloud architecture and DevOps automation",
                  ].map((strength, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
                      <span className="text-gray-300">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-emerald-400/50 hover:bg-gray-800/60 transition-all duration-300 group"
                >
                  <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-3 text-lg">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
