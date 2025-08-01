// app/components/Projects.tsx
const projects = [
  {
    title: "DevTask Tracker",
    description:
      "A developer-focused task management app built with FastAPI and React.",
    image: "/images/devtask.png",
    link: "https://github.com/cephaz6/DevTask-Tracker",
  },
  {
    title: "Beth Pay Exchange",
    description:
      "A crypto and gift card exchange platform with real-time wallet management.",
    image: "/images/bethpay.png",
    link: "https://mybethpay.com/",
  },
  {
    title: "GreenAware API",
    description: "Climate monitoring API using What3Words and Python.",
    image: "/images/greenaware.png",
    link: "https://github.com/cephaz6/GreeenAware-API.git",
  },
];

export default function Projects() {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-52 w-full relative">
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                /> */}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-zinc-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-400 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
