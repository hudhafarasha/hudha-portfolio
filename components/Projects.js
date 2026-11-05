import Section from "./Section";
import Reveal from "./Reveal";
import Icon from "./Icons";
import { projects } from "@/data/portfolio";
export default function Projects() {
  return (
    <Section id="projects" heading="FEATURED WORKS">
      <ul className="border-t border-line">
        {projects.map((p, i) => (
          <Reveal as="li" key={p.name} delay={i * 60} className="group border-b border-line py-8 transition-colors hover:bg-panel">
            <div className="flex flex-col gap-5 px-2 sm:flex-row sm:items-center sm:justify-between sm:px-4">
              <div className="max-w-xl transition-transform duration-300 group-hover:translate-x-2">
                <h3 className="text-xl font-bold sm:text-2xl">{p.name}</h3>
                <p className="mt-2 text-mute">{p.short}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-mute">{t}</li>)}
                </ul>
              </div>
              <div className="flex items-center gap-4">
                {p.image && <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" className="h-20 w-32 rounded-lg object-cover" />}
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.name} on GitHub`}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-mute transition-colors hover:border-accent hover:bg-accent hover:text-white">
                    <Icon name="arrow" />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
