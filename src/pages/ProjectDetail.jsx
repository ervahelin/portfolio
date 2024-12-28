import React from "react";
import { useParams } from "react-router-dom";

const projectData = [
  { id: 1, title: "Journey Yourself", 
    description: "Journey Yourself is a website created for solo travelers to explore cities more easily. It provides a collection of places that are well-suited for visiting alone, such as quiet cafes, scenic spots, and attractions that cater to individual visitors. Users can create accounts to save their favorite locations and plan trips by organizing spots they want to visit. Additionally, the platform allows users to add new places they’ve discovered, helping to grow a shared resource for solo travelers. The goal of Journey Yourself is to make solo travel more enjoyable and to offer a practical way to discover and remember places during your trip.",
    image: "/journey.png", date:"2023", role: "Fullstack Developer", languages: "Ruby on Rails, SASS, Figma, HTML" },
  { id: 2,
    title: "Gradien",
    description: "Gradien is a web application that creates personalized color palettes using the ChatGPT API. The colors are tailored to the user based on their eye, hair, and skin color, ensuring the palette suits them perfectly. Users can fill out a form selecting their physical features, and the backend runs a custom script guiding ChatGPT to calculate the most fitting colors. The result is a unique, user-specific palette designed to enhance personal style or design choices. Currently, the color generation feature is unavailable, as the ChatGPT API requires a paid subscription, and the funding for the project at FH Salzburg was limited to the development phase.", 
    image: "/gradien.png", date:"2024", role: "Designer", languages: "HTML, figma, REACT, SASS, git, javascript" },
  { id: 3, title: "Future", description: "For 2025 we plan our last semester project", image: "/future.png", date:"2025", role: "Frontend Developer", languages: "" },
];

function ProjectDetail() {
  const { id } = useParams(); 
  const project = projectData.find((proj) => proj.id === parseInt(id)); // find project

  if (!project) {
    return <div>Projekt nicht gefunden</div>;
  }

  return (
    <section className="project-detail flex flex-col gap-10">
      <div className="flex flex-col">
        <img src={project.image} alt={project.title}  className="w-full max-h-96"/>
        <span className="text-right">{project.date}</span>
      </div>
      <div className="flex flex-col gap-2"> 
        <h2 className="font-extrabold text-5xl text-white">{project.title}</h2>
        <p className="text-grey text-xl">ROLE: {project.role}</p>
      </div>
   
      <p>{project.description}</p>
      <div className="flex flex-row gap-5 justify-center">
        {project.languages.split(", ").map((language, index) => (
          <span key={index} className="skill">{language}</span>
        ))}
      </div>
    </section>
  );
}

export default ProjectDetail;
