import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero /><About /><Stats /><Projects /><Skills /><Experience /><Contact />
      </main>
      <Footer />
    </>
  );
}
