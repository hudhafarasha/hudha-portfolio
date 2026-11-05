import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/data/portfolio";
export default function About() {
  return (
    <Section id="about">
      <Reveal as="h2" className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-8xl">
        <span className="block text-ink">Quality-driven</span>
        <span className="block text-accent">Tech enthusiast</span>
      </Reveal>
      <Reveal className="mt-12 max-w-2xl space-y-5 text-lg leading-relaxed text-mute" delay={100}>
        {profile.about.map((p) => <p key={p}>{p}</p>)}
      </Reveal>
    </Section>
  );
}
