import { ExternalLink, Play, Code } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    title: "MediGuard",
    subtitle: "Multi-Agent AI Patient Safety Platform",
    description:
      "A patient-safety platform where autonomous AI agents catch life-threatening problems faster than manual review. SepsisGuard watches ICU vitals to detect early sepsis and generates a treatment plan in under 15 minutes, while CrossCare flags dangerous drug interactions across prescriptions from multiple doctors. Results stream live to a React dashboard over WebSocket.",
    image: "/projects/mediguard.png",
    tags: ["FastAPI", "LangGraph", "Groq LLaMA", "React", "SQLite", "Tailwind CSS", "WebSocket", "RxNorm API"],
    github: "https://github.com/fdumary/MediGuard",
    live: "https://medi-guard-theta.vercel.app/",
    youtube: "https://www.youtube.com/watch?v=BN3U7-NQ-5w&t=2s",
  },
  {
    title: "JalSense",
    subtitle: "AI-Powered Water Stress Alert System for Farmers",
    description:
      "A WhatsApp-based system that brings satellite intelligence to smallholder farmers. A farmer sends a village name and crop, and JalSense pulls live Sentinel-2 imagery, calculates NDWI/NDVI, checks the 10-day weather forecast, and replies with a Hindi voice note on whether to irrigate. A React dashboard with a live Leaflet map shows stress levels across registered farmers.",
    image: "/projects/jalsense.png",
    tags: ["React", "Tailwind CSS", "FastAPI", "Leaflet.js", "Sentinel-2", "Twilio WhatsApp API", "Python", "SQLAlchemy", "Edge TTS",],
    github: "https://github.com/Rakshita006/jalsense",
    live: "",
    youtube: "https://www.youtube.com/watch?v=rUyRrdmrNAg",
  },
  {
    title: "DyslexiFlow Lite",
    subtitle: "AI-Powered Assistive Reading Platform",
    description:
      "An adaptive reading space for K-12 students with dyslexia, ADHD, and visual processing differences. It spotlights the active paragraph, adds a reading ruler and syllable breakdowns, and detects struggle when a reader lingers on a paragraph. A Gemini-powered Socratic tutor then asks a comprehension question and gives encouraging feedback instead of corrections, with text-to-speech at comfortable speeds.",
    image: "/projects/dyslexiflow.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Google Gemini", "Web Speech API", "Vite"],
    github: "https://github.com/riyanshika7/dyslexiflow",
    live: "https://dyslexiflow.onrender.com/",
    youtube: "https://www.youtube.com/watch?v=sdBd_I33lYQ&t=1s",
  },
];

const linkStyle="inline-flex items-centre gap-2 rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:border-emerald-400/40 hover:text-emerald-400"

export default function Projects(){
  return (
    <section id="projects" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24">
        <Reveal>
          <h2 className="text-3xl font-bold text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 text-zinc-400">
            Things I've built.
          </p>
        </Reveal>

        <div className="flex flex-col mt-12 gap-20">
            {
              projects.map((project)=>(
                <Reveal key={project.title}>
                    <article className="grid items-center gap-8 md:grid-cols-2">
                      <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
                          <img
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          className="aspect-video object-cover w-full"
                          />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-zinc-100 sm:text-3xl">
                            {project.title}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-emerald-400">
                          {project.subtitle}
                        </p>
                        <p className="mt-4 leading-relaxed text-zinc-400">
                          {project.description}
                        </p>


                          <div className="mt-5 flex flex-wrap gap-2">
                            {
                              project.tags.map((tag)=>(
                                <span key={tag} className="rounded-md border border-white/10 px-3 py-1 text-sm text-zinc-300">
                                  {tag}
                                </span>
                              ))
                            }
                          </div>

                          <div className="mt-6 flex flex-wrap gap-3">
                            {
                              project.github && (
                                <a href={project.github} target="_blank" rel="noreferrer" className={linkStyle}>
                                  <Code size={16}/>
                                  Github
                                </a>
                              )
                            }

                            {
                              project.live &&(
                                <a href={project.live} target="_blank" rel="noreferrer" className={linkStyle}>
                                  <ExternalLink size={16}/>
                                  Live Demo
                                </a>
                              )
                            }

                            {
                              project.youtube &&(
                                <a href={project.youtube} target="_blank" rel="noreferrer" className={linkStyle}>
                                  <Play size={16}/>
                                  Watch on YouTube
                                </a>
                              )
                            }
                          </div>
                      </div>
                    </article>
                </Reveal>
              ))
            }
        </div>
    </section>
  )
}