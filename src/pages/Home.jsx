import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Home() {
  const projects = [
    { id: 1, title: 'Project One', description: 'This is project one.' },
    { id: 2, title: 'Project Two', description: 'This is project two.' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Home;
