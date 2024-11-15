import About from "./components/About";
import Contact from "./components/Contact";
import Counter from "./components/Counter";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="counter">
        <Counter />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
