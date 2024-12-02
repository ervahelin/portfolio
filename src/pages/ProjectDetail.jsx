import React from "react";

function ProjectDetail() {
  const { id } = useParams();
  const project = projectData.find((proj) => proj.id === id);

  if (!project) {
    return <div>Projekt nicht gefunden</div>;
  }
  return (
    <div className="project-detail">
      <img src={project.image} alt={project.title} />
      <span>{project.date}</span>
      <h2 className="font-extrabold text-5xl text-white">{project.title}</h2>
      <p className="text-grey text-xl">{project.role}</p>
      <p>{project.description}</p>
      <div>{project.languages}</div>
    </div>
  );
}

export default ProjectDetail;
