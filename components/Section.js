import Reveal from "./Reveal";
export default function Section({ id, heading, children }) {
  return (
    <section id={id} className="scroll-mt-10 px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        {heading && (
          <Reveal as="h2" className="mb-14 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">
            {heading}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
