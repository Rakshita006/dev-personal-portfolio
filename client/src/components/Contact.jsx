import { Mail, MapPin, Code, Link2, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const contacts = [
  {
    label: "Email",
    value: "rakshita0903@gmail.com",
    href: "mailto:rakshita0903@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/rakshita006",
    href: "https://github.com/rakshita006",
    icon: Code,
  },
  {
    label: "LinkedIn",
    value: "Rakshita Kumari",
    href: "https://www.linkedin.com/in/rakshita-kumari-590201291",
    icon: Link2,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-emerald-400">What's next?</p>
          <h2 className="mt-2 text-3xl font-bold text-zinc-100 sm:text-5xl">
            Let's work together
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            I'm open to internships and full-stack or backend roles. If you have
            an opportunity or just want to say hi, my inbox is always open.
          </p>

          <a
            href="mailto:rakshita0903@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-emerald-400 px-7 py-3 text-base font-medium text-zinc-950 transition-colors hover:bg-emerald-300"
          >
            Say hello
            <ArrowUpRight size={18} />
          </a>
        </div>
      </Reveal>

      <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">
        {contacts.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.label} delay={index * 100}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group block h-full rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-emerald-400/40"
              >
                <Icon size={24} className="text-emerald-400" />
                <p className="mt-4 text-sm text-zinc-500">{item.label}</p>
                <p className="mt-1 break-words font-medium text-zinc-100 group-hover:text-emerald-400">
                  {item.value}
                </p>
              </a>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={300}>
        <p className="mt-10 flex items-center justify-center gap-2 text-sm text-zinc-500">
          <MapPin size={16} />
          Based in Kolkata, India
        </p>
      </Reveal>
    </section>
  );
}