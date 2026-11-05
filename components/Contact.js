"use client";
import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import Socials from "./Socials";
import { profile } from "@/data/portfolio";
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
const field = "w-full rounded-xl border border-line bg-panel px-4 py-3 text-ink placeholder:text-neutral-500 focus:border-accent focus:outline-none";
export default function Contact() {
  const [status, setStatus] = useState({ type: "", msg: "" });
  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form));
    if (!ENDPOINT) {
      // No backend configured: open the visitor's email app with the message prefilled.
      const body = `${d.message}\n\nFrom: ${d.name} (${d.email})`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(body)}`;
      setStatus({ type: "ok", msg: "Your email app should open with the message ready to send." });
      return;
    }
    setStatus({ type: "", msg: "Sending..." });
    try {
      const r = await fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) });
      if (!r.ok) throw new Error();
      form.reset();
      setStatus({ type: "ok", msg: "Message sent. Thank you." });
    } catch {
      setStatus({ type: "err", msg: `Could not send. Please email ${profile.email} directly.` });
    }
  }
  return (
    <Section id="contact" heading={<>Let&apos;s <span className="text-accent">talk</span></>}>
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <Reveal className="space-y-5 text-mute">
          <p>I&apos;m looking for an entry-level QA or AI quality engineering role.</p>
          <a href={`mailto:${profile.email}`} className="block break-all text-lg font-semibold text-ink hover:text-accent">{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="block hover:text-accent">{profile.phone}</a>
          <p>{profile.location}</p>
          <Socials />
        </Reveal>
        <Reveal delay={100}>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-mute">Name<input name="name" required autoComplete="name" className={`${field} mt-1.5`} /></label>
              <label className="block text-sm text-mute">Email<input name="email" type="email" required autoComplete="email" className={`${field} mt-1.5`} /></label>
            </div>
            <label className="block text-sm text-mute">Subject<input name="subject" required className={`${field} mt-1.5`} /></label>
            <label className="block text-sm text-mute">Message<textarea name="message" required rows={5} className={`${field} mt-1.5 resize-y`} /></label>
            <button type="submit" className="rounded-full bg-accent px-8 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5 hover:brightness-110">Send message</button>
            <p role="status" aria-live="polite" className={`text-sm ${status.type === "err" ? "text-red-400" : "text-mute"}`}>{status.msg}</p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
