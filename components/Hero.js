import fs from "fs";
import path from "path";
import Image from "next/image";
import Reveal from "./Reveal";
import Socials from "./Socials";
import { profile } from "@/data/portfolio";
export default function Hero() {
  const hasPhoto = fs.existsSync(path.join(process.cwd(), "public", "profile.jpg"));
  return (
    <section id="home" className="flex min-h-screen items-center px-5 pb-28 pt-12">
      <Reveal className="mx-auto w-full max-w-4xl rounded-[2rem] bg-white p-5 text-neutral-900 sm:p-8">
        <div className="grid gap-8 md:grid-cols-[17rem_1fr] md:items-center">
          <div className="relative mx-auto aspect-square w-full max-w-[17rem] overflow-hidden rounded-3xl bg-neutral-900">
            {hasPhoto ? (
              <Image src="/profile.jpg" alt={`Portrait of ${profile.name}`} fill priority sizes="272px" className="object-cover" />
            ) : (
              <div className="flex h-full items-center justify-center text-7xl font-black text-accent" aria-label="Profile photo placeholder">HF</div>
            )}
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">{profile.headline}</p>
            <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">{profile.name}</h1>
            <p className="mt-5 max-w-md leading-relaxed text-neutral-600">{profile.intro}</p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a href="#contact" className="rounded-full bg-accent px-7 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5 hover:brightness-110">Contact me</a>
              <a href={profile.resume} target="_blank" rel="noreferrer" className="rounded-full border border-neutral-300 px-7 py-3 font-semibold transition-colors hover:border-accent hover:text-accent">Resume</a>
              <Socials dark />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
