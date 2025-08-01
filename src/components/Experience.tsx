// app/components/Experience.tsx

const experience = [
  {
    role: "ICT & DT Teacher",
    company: "rTriibe (Liverpool)",
    period: "Nov 2023 – Present",
  },
  {
    role: "Full Stack Developer",
    company: "Tindax Technologies",
    period: "Aug 2020 – Present",
  },
  {
    role: "Full Stack Developer",
    company: "Beth Pay Exchange",
    period: "Mar 2023 – Aug 2023",
  },
  {
    role: "Graduate Developer Intern",
    company: "DeediX Technologies",
    period: "Nov 2019 – Jun 2020",
  },
];

export default function Experience() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Experience</h2>
        <ul className="space-y-6">
          {experience.map((item, index) => (
            <li key={index} className="border-l-4 border-purple-600 pl-4">
              <p className="text-lg font-semibold">{item.role}</p>
              <p className="text-sm text-zinc-400">{item.company}</p>
              <p className="text-sm text-zinc-500">{item.period}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
