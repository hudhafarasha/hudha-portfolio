import "./globals.css";
import { profile } from "@/data/portfolio";
export const metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.positioning,
};
export const viewport = { themeColor: "#0b0b0b" };
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
