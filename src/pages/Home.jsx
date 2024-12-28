import React from "react";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

function Home() {
  return (
    <div className="flex flex-col gap-40 leading-8">
      <div id="home" className="bg-[url('../../public/verschwommen_breit-1.jpg')] bg-cover bg-center h-80 m-0">
        
        <div className="absolute z-40 right-0 h-full">
          <div className="w-48 h-48 blur-3xl bg-primary opacity-50"></div>
          <div className="w-56 h-56 blur-3xl bg-white absolute z-40 right-56 opacity-55"></div>
          <div className="w-56 h-56 blur-3xl bg-primary opacity-50"></div>
        </div>

        <div className="flex flex-col lg:flex-row z-50 h-screen items-center">
          <div className="lg:w-3/6"></div>
          <div className="flex flex-col gap-4 w-full lg:w-3/6 text-white z-50">
            <h1 className="text-5xl lg:text-8xl font-extrabold">Helin Güyen</h1>
            <span className="text-xl lg:text-2xl">
              Frontend Developer - Student
            </span>
            <a className="skill text-white transition-colors border-primary  bg-primary lg:w-3/6 mt-10 hover:bg-white hover:text-primary hover:border-white" href="/cv-gueyen.pdf" download> Download CV</a>
          </div>
        </div>
      </div>

      <section id="about" className="justify-between relative">
        <p className="max-w-2xl order-1 lg:order-0">
          Hello there! I'm [Your Name], and I'm thrilled to welcome you to my
          corner of the internet. Here's a little glimpse into who I am: <br />
          <br />
          🌟 Passion-Driven: I'm a [Your Passion or Profession], and I'm deeply
          passionate about [What You're Passionate About]. Whether it's through
          [Your Medium of Expression], [Another Medium], or [Another Medium],
          I'm committed to sharing my expertise and insights with the world.
        </p>
        <h2 className="font-extrabold text-5xl text-white grid order-0 lg:order-1">
          About Me
        </h2>
      </section>
      <section id="projects">
        <h2 className="font-extrabold text-5xl text-white">Projects</h2>
        <Projects />
      </section>
      <section id="skills">
        <Skills />
        <h2 className="font-extrabold text-5xl text-white order-0 lg:order-1">
          Skills
        </h2>
      </section>
      <section id="experience">
        <h2 className="font-extrabold text-5xl text-white">Experience</h2>
        <Experience />
      </section>
    </div>
  );
}

export default Home;
