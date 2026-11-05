import Reveal from "./Reveal";
import { projects, certifications, profile } from "@/data/portfolio";
export default function Stats() {
  const stats = [
    [projects.length, "Projects built"],
    [profile.languages.split(",").length, "Languages spoken"],
  ];
  return (
    <section aria-label="Highlights" className="border-y border-line px-5 py-16">
      <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-10 md:grid-cols-4">
        {stats.map(([v, l], i) => (
          <Reveal key={l} delay={i * 80}>
            <dd className="text-5xl font-black tracking-tight text-accent sm:text-6xl">{v}</dd>
            <dt className="mt-2 text-sm text-mute">{l}</dt>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
