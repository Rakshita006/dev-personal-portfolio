const skills = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "JavaScript",
  "Tailwind",
  "HTML",
  "CSS",
  "Java",
  "C++",
  "Python",
  "Data Structures"
]

export const Skills=()=>{
  return (
    <section id="skills" className="p-20 text-center">

      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">

        {skills.map(skill => (
          <div className="border p-4 rounded">
            {skill}
          </div>
        ))}

      </div>

    </section>
  )
}