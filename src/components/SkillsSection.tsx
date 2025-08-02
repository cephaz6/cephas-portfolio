import { useState, type ReactElement } from "react";
import {
  Code,
  Server,
  Database,
  Cloud,
  Brain,
  Palette,
  Globe,
  FileCode,
  Terminal,
  Settings,
  Layers,
  Zap,
  GitBranch,
  Cpu,
  HardDrive,
  Activity,
  Box,
  TestTube,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: ReactElement;
  color: string;
  skills: Array<{
    name: string;
    icon: ReactElement;
  }>;
}

interface SkillCategories {
  [key: string]: SkillCategory;
}

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("frontend");

  const skillCategories: SkillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: <Palette className="w-6 h-6" />,
      color: "from-pink-400 to-rose-500",
      skills: [
        { name: "React", icon: <Code className="text-4xl" /> },
        { name: "Next.js", icon: <Globe className="text-4xl" /> },
        { name: "TypeScript", icon: <FileCode className="text-4xl" /> },
        { name: "Tailwind CSS", icon: <Palette className="text-4xl" /> },
        { name: "JavaScript", icon: <Terminal className="text-4xl" /> },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "from-emerald-400 to-teal-500",
      skills: [
        { name: "Node.js", icon: <Server className="text-4xl" /> },
        { name: "Python", icon: <Code className="text-4xl" /> },
        { name: "PHP", icon: <FileCode className="text-4xl" /> },
        { name: "Apache Spark", icon: <Zap className="text-4xl" /> },
      ],
    },
    database: {
      title: "Database & Storage",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-500",
      skills: [
        { name: "MongoDB", icon: <Database className="text-4xl" /> },
        { name: "PostgreSQL", icon: <HardDrive className="text-4xl" /> },
        { name: "MySQL", icon: <Database className="text-4xl" /> },
        { name: "Redis", icon: <Activity className="text-4xl" /> },
      ],
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-purple-400 to-indigo-500",
      skills: [
        { name: "Docker", icon: <Box className="text-4xl" /> },
        { name: "Kubernetes", icon: <Layers className="text-4xl" /> },
        { name: "GitHub Actions", icon: <GitBranch className="text-4xl" /> },
      ],
    },
    ml: {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      color: "from-green-400 to-emerald-500",
      skills: [
        { name: "TensorFlow", icon: <Brain className="text-4xl" /> },
        { name: "Scikit-learn", icon: <Cpu className="text-4xl" /> },
        { name: "Pandas", icon: <Activity className="text-4xl" /> },
        { name: "NumPy", icon: <Code className="text-4xl" /> },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      icon: <Code className="w-6 h-6" />,
      color: "from-orange-400 to-red-500",
      skills: [
        { name: "Git", icon: <GitBranch className="text-4xl" /> },
        { name: "Linux", icon: <Terminal className="text-4xl" /> },
        { name: "Jira", icon: <Settings className="text-4xl" /> },
        { name: "Testing Library", icon: <TestTube className="text-4xl" /> },
      ],
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(52, 211, 153, 0.1) 25%, transparent 25%), 
                             linear-gradient(-45deg, rgba(52, 211, 153, 0.1) 25%, transparent 25%), 
                             linear-gradient(45deg, transparent 75%, rgba(52, 211, 153, 0.1) 75%), 
                             linear-gradient(-45deg, transparent 75%, rgba(52, 211, 153, 0.1) 75%)`,
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Technical Skills
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Comprehensive expertise across the full technology stack
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto"></div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-2xl border transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 border-emerald-400 text-white shadow-lg shadow-emerald-500/25"
                    : "bg-gray-800/40 border-gray-700 text-gray-300 hover:border-emerald-400/50 hover:bg-gray-800/60"
                }`}
              >
                <span
                  className={
                    activeCategory === key ? "text-white" : "text-emerald-400"
                  }
                >
                  {category.icon}
                </span>
                <span className="font-medium">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Icons Display */}
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-3xl p-8">
            <div className="flex items-center space-x-3 mb-8">
              <div
                className={`p-3 rounded-xl bg-gradient-to-r ${skillCategories[activeCategory].color} text-white`}
              >
                {skillCategories[activeCategory].icon}
              </div>
              <h3 className="text-2xl font-bold">
                {skillCategories[activeCategory].title}
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
              {skillCategories[activeCategory].skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-emerald-400 hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl">
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                10+
              </div>
              <div className="text-gray-400">Programming Languages</div>
            </div>
            <div className="text-center p-6 bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl">
              <div className="text-3xl font-bold text-teal-400 mb-2">25+</div>
              <div className="text-gray-400">Frameworks & Libraries</div>
            </div>
            <div className="text-center p-6 bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl">
              <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-gray-400">Tools & Platforms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
