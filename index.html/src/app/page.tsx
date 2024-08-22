import Image from "next/image";
import Hero from "./componant/Hero";
import Contact from "./componant/Contact";
import Project from "./componant/Project";
import About from "./componant/About";
import Skills from "./componant/Skills"

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  )
}