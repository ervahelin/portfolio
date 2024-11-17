import React from "react";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function Home() {
  return (
    <>
      <div id="home">
        <div>
          <h1>Helin Güyen</h1>
          <span>Frontend Developer - Student</span>
        </div>
      </div>

      <div id="about">
        <p>
          Hello there! I'm [Your Name], and I'm thrilled to welcome you to my
          corner of the internet. Here's a little glimpse into who I am: 🌟
          Passion-Driven: I'm a [Your Passion or Profession], and I'm deeply
          passionate about [What You're Passionate About]. Whether it's through
          [Your Medium of Expression], [Another Medium], or [Another Medium],
          I'm committed to sharing my expertise and insights with the world.
        </p>
        <h2>About</h2>
      </div>
      <div id="projects">
        <h2>Projects</h2>
        <Projects />
      </div>
      <div id="skills">
        <Skills />
        <h2>Projects</h2>
      </div>
      <div id="experience">
        <h2>Projects</h2>
        <div className="ex-list"></div>
      </div>
    </>
  );
}

export default Home;
