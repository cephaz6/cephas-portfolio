// app/components/TechStack.tsx

const tech = [
  "Python",
  "JavaScript",
  "TypeScript",
  "Django",
  "FastAPI",
  "React",
  "Node.js",
  "AWS",
  "Docker",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "CI/CD",
  "GitHub Actions",
  "Kubernetes",
];

export default function TechStack() {
  return (
    <section className="bg-black text-zinc-300 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {tech.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-800 text-center py-4 rounded-lg shadow"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
