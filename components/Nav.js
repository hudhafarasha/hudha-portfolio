"use client";
import { useEffect, useState } from "react";
import Icon from "./Icons";
const items = [["home","Home","home"],["about","About","user"],["projects","Projects","folder"],["skills","Skills and Tools","tools"],["experience","Experience","briefcase"],["contact","Contact","mail"]];
export default function Nav() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
    }, { rootMargin: "-40% 0px -55% 0px" });
    items.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <nav aria-label="Primary" className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full border border-line bg-panel/95 p-1.5 shadow-xl shadow-black/50 backdrop-blur">
      <ul className="flex items-center gap-1">
        {items.map(([id, label, icon]) => (
          <li key={id}>
            <a href={`#${id}`} aria-label={label} title={label} aria-current={active === id ? "true" : undefined}
              className={`flex h-11 items-center gap-2 rounded-full px-3.5 text-sm font-medium transition-colors ${active === id ? "bg-accent text-white" : "text-mute hover:text-ink"}`}>
              <Icon name={icon} />
              {active === id && <span className="hidden sm:inline">{label}</span>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
