import personalJobTrackerImg from "@/assets/personal-job-tracker.png";
import aiRoadmapImg from '@/assets/ai-roadmap.png';
import todoImg from '@/assets/todo.png'
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title:"Todo App",
    description:'Built a responsive task management application that allows users to create, update, and track tasks efficiently with an intuitive user interface.',
    image:todoImg,
    tags:['React','Tailwind'],
    link:'https://todo-lemon-ten-43.vercel.app',
    github:"https://github.com/Rakshita006/todo",
  },
  {
    title:"Prsonal Job Tracker",
    description:'Built a full-stack Personal Job Tracker that streamlines the job application process by allowing users to manage applications in one centralized dashboard. The platform enables tracking of application stages (Applied, Interview, Rejected, Offer), adding notes, deadlines, and company-specific details.Implemented features like dynamic filtering, status updates, and responsive UI for a seamless user experience. Designed with scalability in mind, the application improves productivity and reduces manual tracking effort during job hunts.',
    image:personalJobTrackerImg,
    tags:['MERN stack'],
    link:'https://job-application-tracker-two-ecru.vercel.app',
    github:"https://github.com/Rakshita006/job-application-tracker",
  },
  {
    title:"AI-roadmap-generator",
    description:'An AI-powered tool that generates personalized learning roadmaps based on user goals, skills, and interests.The system analyzes user inputs such as current skill level, goals, and timeline to generate structured, step-by-step roadmaps.',
    image:aiRoadmapImg,
    tags:['MERN stack'],
    link:'https://ai-roadmap-flame.vercel.app',
    github:"https://github.com/Rakshita006/ai-roadmap",
  },
  {
  title:"Fake-News-Detector",
  description:'An AI-powered web application that detects whether a news article is real or fake using natural language processing. The system analyzes user input, provides a prediction with a confidence score, highlights key phrases, and fetches related real news articles for verification.',
  image:fakeNewsImg,
  tags:['Machine Learning','NLP','React','Flask'],
  link:'https://fake-news-detector-tau-gules.vercel.app',
  github:"https://github.com/Rakshita006/fake-news-detector",
}
]



export const Projects=()=>{
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project,idx)=>(
            <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1">
              <div className="relative overflow-hidden aspect-video">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"></div>

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100
                transition-opacity duration-300">
                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                      <ArrowUpRight className='w-5 h-5'/>
                    </a>
                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                      <Github className='w-5 h-5'/>
                    </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transitions-colors">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary
                  group-hover:translate-x-1 group-hover:translate-y-1 transition-all"/>
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag,tagIdx)=>(
                    <span key={tagIdx}
                    className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border
                     border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary 
                     transition-all duration-300">{tag }</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}