import React from "react";
import { HashLink } from "react-router-hash-link";

function Nav() {
  return (
    <div className="py-10 fixed z-50 justify-center w-full">
      <ul className="flex flex-row justify-center gap-12 uppercase items-center text-white text-lg">
        <li>
          <HashLink to="/#about">About Me</HashLink>
        </li>
        <li>
          <HashLink to="/#projects">Projects</HashLink>
        </li>
        <li>
          <HashLink className="text-4xl font-extrabold" to="/#home">
            HG
          </HashLink>
        </li>
        <li>
          <HashLink to="/#skills">Skills</HashLink>
        </li>
        <li>
          <HashLink to="/#experience">Experience</HashLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
