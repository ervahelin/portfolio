import React from "react";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

function Home() {
  return (
    <div className="flex flex-col gap-40 leading-8">
      <div id="home" className="h-full">
        <img
          src="/verschwommen_breit-1.jpg"
          alt="Home image"
          className="absolute left-0 top-0"
        />
        <div className="flex flex-row relative z-50">
          <div className="w-3/6"></div>
          <div className="flex flex-col gap-4 w-3/6 h-full justify-center text-white">
            <h1 className="text-8xl font-extrabold">Helin Güyen</h1>
            <span className="text-2xl">Frontend Developer - Student</span>
            <button className="skill text-white transition-colors border-primary  bg-primary w-3/6 mt-10 hover:bg-white hover:text-primary hover:border-white">
              Download CV
            </button>
          </div>
        </div>
      </div>

      <section id="about" className="flex flex-row justify-between">
        <p className="max-w-2xl">
          Hello there! I'm [Your Name], and I'm thrilled to welcome you to my
          corner of the internet. Here's a little glimpse into who I am: <br />
          <br />
          🌟 Passion-Driven: I'm a [Your Passion or Profession], and I'm deeply
          passionate about [What You're Passionate About]. Whether it's through
          [Your Medium of Expression], [Another Medium], or [Another Medium],
          I'm committed to sharing my expertise and insights with the world.
        </p>
        <h2 className="font-extrabold text-5xl text-white">About Me</h2>
      </section>
      <section id="projects">
        <h2 className="font-extrabold text-5xl text-white">Projects</h2>
        <Projects />
      </section>
      <section id="skills">
        <Skills />
        <h2 className="font-extrabold text-5xl text-white">Skills</h2>
      </section>
      <section id="experience">
        <h2 className="font-extrabold text-5xl text-white">Experience</h2>
        <Experience />
      </section>
    </div>
  );
}

export default Home;
