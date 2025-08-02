// import { useState } from "react";
import {
  ExternalLink,
  Github,
  ChevronRight,
  Database,
  Brain,
  Shield,
  Leaf,
} from "lucide-react";

const ProjectsSection = () => {
  //   const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Developers Task Tracker",
      description:
        "A comprehensive task management tool specifically designed for developers with advanced features for project organization, time tracking, and team collaboration.",
      longDescription:
        "Built with modern architecture using FastAPI for robust backend services and React with TypeScript for a responsive frontend. Features include real-time updates, advanced filtering, and integration with popular developer tools.",
      tech: ["FastAPI", "React", "TypeScript", "SHADCN", "PostgreSQL"],
      icon: <Database className="w-6 h-6" />,
      color: "from-emerald-400 to-teal-500",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "ML Fraud Detection System",
      description:
        "Advanced machine learning model for detecting anomalies and classifying fraudulent welfare claims, developed as a case study for the DWP, UK.",
      longDescription:
        "Implemented using Python with scikit-learn and TensorFlow, featuring data preprocessing, model training, and real-time prediction capabilities. Achieved high accuracy in fraud detection while minimizing false positives.",
      tech: ["Python", "TensorFlow", "Scikit-learn", "AWS SageMaker", "Pandas"],
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-400 to-indigo-500",
      category: "Machine Learning",
    },
    {
      id: 3,
      title: "Beth Pay Exchange",
      description:
        "Secure cryptocurrency and gift cards exchange platform with real-time trading capabilities and multi-layer security implementation.",
      longDescription:
        "Full-stack web application featuring secure payment processing, real-time price tracking, user authentication, and comprehensive transaction management. Built with scalability and security as primary concerns.",
      tech: ["Node.js", "React", "MongoDB", "Socket.io", "Stripe API"],
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-500",
      category: "FinTech",
    },
    {
      id: 4,
      title: "Green-Aware Climate API",
      description:
        "Python-based climate monitoring API implementing the What3Words system for precise location-based environmental data tracking.",
      longDescription:
        "RESTful API service providing comprehensive climate data with geographical precision using What3Words integration. Features include data visualization, historical tracking, and alert systems for environmental changes.",
      tech: ["Python", "Flask", "What3Words API", "PostgreSQL", "Docker"],
      icon: <Leaf className="w-6 h-6" />,
      color: "from-green-400 to-emerald-500",
      category: "API Development",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-400/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Showcasing innovative solutions built with cutting-edge
              technologies
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden hover:border-gray-600 hover:bg-gray-800/60 transition-all duration-500`}
                // onMouseEnter={() => setHoveredProject(project.id)}
                // onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-r ${project.color} text-white shadow-lg`}
                      >
                        {project.icon}
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 uppercase tracking-wide font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-700 group-hover:text-emerald-400/50 transition-colors">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600 hover:border-emerald-400/50 hover:text-emerald-400 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-700">
                    <div className="flex space-x-6">
                      <button className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors group/btn">
                        <Github size={18} />
                        <span className="text-sm group-hover/btn:translate-x-1 transition-transform">
                          Code
                        </span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors group/btn">
                        <ExternalLink size={18} />
                        <span className="text-sm group-hover/btn:translate-x-1 transition-transform">
                          Live Demo
                        </span>
                      </button>
                    </div>

                    <button className="flex items-center space-x-2 text-emerald-400 hover:text-white transition-colors group/more">
                      <span className="text-sm font-medium">Learn More</span>
                      <ChevronRight
                        size={16}
                        className="group-hover/more:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mb-16">
            <button className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-2xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25 group">
              <span className="flex items-center space-x-3">
                <span>View All Projects</span>
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </button>
          </div>

          {/* Project Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-700">
            {[
              {
                number: "15+",
                label: "Projects Completed",
                color: "text-emerald-400",
              },
              {
                number: "4+",
                label: "Years Experience",
                color: "text-teal-400",
              },
              {
                number: "100%",
                label: "Client Satisfaction",
                color: "text-blue-400",
              },
              {
                number: "22%",
                label: "Growth Achieved",
                color: "text-green-400",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
