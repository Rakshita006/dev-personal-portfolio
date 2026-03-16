export const Navbar=()=>{
  return (
    <nav className="flex justify-between p-6 shadow-md">
      <h1 className="text-xl font-bold">Rakshita</h1>

      <div className="space-x-6">
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}