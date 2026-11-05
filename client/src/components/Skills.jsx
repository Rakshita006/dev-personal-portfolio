import Reveal from "./Reveal";

const categories = [
  { title: "Languages", items: ["C++", "Python", "JavaScript", "TypeScript"] },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "Leaflet.js"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "Node.js", "Express.js", "REST APIs", "WebSockets"],
  },
  {
    title: "Database",
    items: ["SQLite", "MongoDB", "Supabase", "Prisma", "SQLAlchemy"],
  },
  { title: "AI / ML", items: ["Google Gemini API", "NDVI/NDWI Analysis"] },
  {
    title: "Concepts",
    items: ["Data Structures & Algorithms", "OOPs", "JWT Authentication", "OAuth2"],
  },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "Vercel"] },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <h2 className="text-3xl font-bold text-zinc-100 sm:text-4xl">Skills</h2>
        <p className="mt-3 text-zinc-400">Technologies I work with.</p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <Reveal key={category.title} delay={index * 100}>
            <div className="h-full rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-emerald-400/40">
              <h3 className="text-lg font-semibold text-emerald-400">
                {category.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 px-3 py-1 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}