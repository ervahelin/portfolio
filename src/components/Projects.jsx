import React, { useState } from "react";
import { Link } from "react-router-dom";

function Projects() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null); //currenty hovered project

  const projects = [
    { id: 1, name: "Journey Yourself", image: "/journey.png", href: "/Journey" },
    { id: 2, name: "Gradien", image: "/gradien.png", href: "Gradien" },
    { id: 3, name: "MMP3", image: "/future.png", href: "/Future" },
  ];

  return (
    <div className="flex flex-col text-white sm:w-full lg:w-3/6 relative">
      {projects.map((project, index) => (
        <Link to={`/projects/${project.id}`}
          key={index}
          className="px-5 py-10 border-t border-b border-grey text-2xl hover:text-inherit"
          onMouseEnter={() => {
            setHoveredImage(project.image);
            setHoveredIndex(index);
          }}
          onMouseLeave={() => {
            setHoveredImage(null);
            setHoveredIndex(null);
          }}>
          <Link to={`/projects/${project.id}`} className="hover:text-inherit">
            {project.name}
          </Link>
        </Link>
      ))}

      {/* Image preview */}
      {hoveredImage && (
        <div
          className="absolute w-72 h-48 left-2/4 transition-all pointer-events-none"
          style={{
            top: `${hoveredIndex * 33 - 10}%`, // Adjust top position if needed
          }}>
          <img
            src={hoveredImage}
            alt="Project Preview"
            className="w-full h-full object-cover absolute"
          />
        </div>
      )}
    </div>
  );
}

export default Projects;
