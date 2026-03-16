import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Projects } from "@/sections/Projects"
import { Contact } from "@/sections/Contact"
import { Navbar } from "@/layout/Navbar"
import { Skills } from "@/sections/Skills"
import { Footer } from "@/sections/Footer"

function App() {
  
  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
          <Navbar/>
          <main>
            <Hero/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
            <Footer/>
          </main>
      </div>
    </>
  )
}

export default App
