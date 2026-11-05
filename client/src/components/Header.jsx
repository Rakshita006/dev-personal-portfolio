
import {useState} from "react"
import {Menu, X} from "lucide-react"

const links=[
  {label:"About", href:"#about"},
  {label:"Projects", href:"#projects"},
  {label:"Skills", href:"#skills"},
  {label:"Contact", href:"#contact"}
]

export default function Header(){
  const [open, setOpen]=useState(false)

  return(
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold text-zinc-100">
          Rakshita Kumari
        </a>

        <ul className="hidden gap-8 md:flex">
            {
              links.map((link)=>(
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-zinc-400 transition-colors hover:text-zinc-100">
                      {link.label}
                  </a>
                </li>
              ))
            }
        </ul>

        <button className="text-zinc-100 md:hidden"
        onClick={()=>setOpen(!open)}
        aria-label="Toggle menu">
              {open ? <X size={24}/>: <Menu size={24}/> }
        </button>
      </nav>

      {open &&(
        <ul className="flex flex-col gap-4 border-t border-white/10 px-6 py-4 md:hidden">
          {links.map((link)=>(
            <li key={link.href}>
                <a className="text-zinc-400 hover:text-zinc-100"
                href={link.href}
                onClick={setOpen(false)}
                >
                  {link.label}
                </a>
            </li>
          ))}

        </ul>
      )}
    </header>
  )
}