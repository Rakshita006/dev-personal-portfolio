import { Hero } from "@/sections/Hero"

import { Footer } from "@/sections/Footer"
import Header from "./components/Header"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  
  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
          
          <Header/>
          <main>
            <Hero/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
          </main>
      </div>
    </>
  )
}

export default App
