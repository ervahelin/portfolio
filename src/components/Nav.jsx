import React from "react";

function Nav() {
  return (
    <div className="py-10 relative">
      <ul className="flex flex-row justify-center gap-12 uppercase items-center text-white text-sm">
        <li>
          <a href="#aboutme">About Me</a>
        </li>
        <li>
          <a href="#aboutme">Projects</a>
        </li>
        <li>
          <a className="text-4xl font-extrabold" href="#aboutme">
            HG
          </a>
        </li>
        <li>
          <a href="#aboutme">Skills</a>
        </li>
        <li>
          <a href="#aboutme">Experience</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
