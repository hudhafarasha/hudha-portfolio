import Socials from "./Socials";
import { profile } from "@/data/portfolio";
export default function Footer() {
  return (
    <footer className="border-t border-line px-5 pb-28 pt-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-sm text-mute">&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <Socials />
      </div>
    </footer>
  );
}
