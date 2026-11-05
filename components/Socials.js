import Icon from "./Icons";
import { profile } from "@/data/portfolio";
export default function Socials({ className = "", dark = false }) {
  const links = [
    profile.github && ["GitHub", profile.github, "github"],
    ["LinkedIn", profile.linkedin, "linkedin"],
    ["Email", `mailto:${profile.email}`, "mail"],
  ].filter(Boolean);
  const tone = dark ? "border-neutral-300 text-neutral-800 hover:border-accent hover:text-accent" : "border-line text-mute hover:border-accent hover:text-accent";
  return (
    <ul className={`flex gap-2 ${className}`}>
      {links.map(([label, href, icon]) => (
        <li key={label}>
          <a href={href} aria-label={label} title={label} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${tone}`}>
            <Icon name={icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}
