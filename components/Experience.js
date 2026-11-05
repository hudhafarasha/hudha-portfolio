import Section from "./Section";
import Reveal from "./Reveal";
import { experience, education, certifications } from "@/data/portfolio";
const Row = ({ title, sub, meta }) => (
  <Reveal as="li" className="relative border-l border-line pb-8 pl-6 last:pb-0">
    <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
    <h4 className="font-bold">{title}</h4>
    {sub && <p className="text-mute">{sub}</p>}
    {meta && <p className="text-sm text-mute">{meta}</p>}
  </Reveal>
);
export default function Experience() {
  return (
    <Section id="experience" heading="Experience & education">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <h3 className="mb-6 text-sm font-semibold text-accent">Experience and training</h3>
          <ul>{experience.map((e) => <Row key={e.role} title={e.role} sub={e.org} meta={[e.period, e.points[0]].filter(Boolean).join(" · ")} />)}</ul>
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold text-accent">Education</h3>
          <ul>{education.map((e) => <Row key={e.school} title={e.degree} sub={e.school} meta={`${e.period} · ${e.extra}`} />)}</ul>
          <h3 className="mb-6 mt-12 text-sm font-semibold text-accent">Certifications</h3>
          <ul>{certifications.map((c) => <Row key={c} title={c} />)}</ul>
        </div>
      </div>
    </Section>
  );
}
