import React from "react";

function Nav() {
  return (
    <div className="py-10 fixed z-50 justify-center w-full">
      <ul className="flex flex-row justify-center gap-12 uppercase items-center text-white text-lg">
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a className="text-4xl font-extrabold" href="/">
            HG
          </a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
