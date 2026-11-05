import Section from "./Section";
import Reveal from "./Reveal";
import { skillGroups } from "@/data/portfolio";
export default function Skills() {
  return (
    <Section id="skills" heading={<>Premium tools /<br /><span className="text-accent">Tech stack</span></>}>
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.group} delay={(i % 2) * 80} className={g.learning ? "md:col-span-2" : ""}>
            <h3 className="mb-4 flex flex-wrap items-baseline gap-3 border-b border-line pb-3 text-lg font-bold">
              {g.group}
              {g.note && <span className="text-sm font-normal text-accent">{g.note}</span>}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className={`rounded-full px-4 py-1.5 text-sm ${g.learning ? "border border-dashed border-mute text-mute" : "bg-panel text-ink"}`}>{s}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
