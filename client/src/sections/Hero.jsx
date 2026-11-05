export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
  {/* Background layers */}
  <div className="pointer-events-none absolute inset-0">
    {/* Glow */}
    <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 animate-pulse rounded-full bg-emerald-500/20 blur-3xl" />
    {/* Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
  </div>
    <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 text-center">
  <h1 className="text-5xl font-bold text-zinc-100 sm:text-7xl">
    Hi, I'm Rakshita Kumari
  </h1>

  <p className="mt-5 text-2xl font-semibold text-emerald-400 sm:text-3xl">
    Full-Stack Developer | AI-Powered Products
  </p>

  <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
    I’m a full-stack developer who loves building AI-powered products that solve real problems, from healthcare safety to farming to accessible reading tools. I’ve built these at hackathons, and I currently build Zyptora’s web platform.
  </p>

  <div className="mt-8 flex flex-wrap justify-center gap-4">
    <a
      href="#projects"
      className="rounded-md bg-emerald-400 px-7 py-3 text-base font-medium text-zinc-950 transition-colors hover:bg-emerald-300"
    >
      View Projects
    </a>

    <a
      href="/Rakshita_kumari_resume.pdf"
      target="_blank"
      rel="noreferrer"
      className="rounded-md border border-white/10 px-7 py-3 text-base font-medium text-zinc-100 transition-colors hover:bg-white/5"
    >
      Resume
    </a>
  </div>

  <div className="mt-8 flex gap-6 text-zinc-400">
    <a href="https://github.com/rakshita006" className="hover:text-zinc-100">GitHub</a>
    <a href="https://www.linkedin.com/in/rakshita-kumari-590201291" className="hover:text-zinc-100">LinkedIn</a>
  </div>
</section>
    </section>
  );
};
