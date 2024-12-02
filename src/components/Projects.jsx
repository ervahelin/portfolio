import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <di className="flex flex-col text-white w-3/6">
      <div className="px-5 py-10 border-t border-b border-grey text-2xl">
        <Link>Journey Yourself</Link>
      </div>
      <div className="px-5 py-10 border-t border-b border-grey text-2xl">
        <Link>Gradien</Link>
      </div>
      <div className="px-5 py-10 border-t border-b border-grey text-2xl">
        <Link>MMP3</Link>
      </div>
    </di>
  );
}

export default Projects;
