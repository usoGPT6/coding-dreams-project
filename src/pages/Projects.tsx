
import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  useEffect(() => {
    document.title = "Projects";
  }, []);

  const projects = [
    {
      title: "WikiTrivia",
      description: "A game developed in Javascript by me and my fellow interns.",
      repoUrl: "https://github.com/devsuperior1"
    },
    {
      title: "PintOS-AlarmClock",
      description: "This project enhances PintOS by implementing an alarm clock mechanism.",
      repoUrl: "https://github.com/devsuperior2"
    },
    {
      title: "AybiPalace",
      description: "A mini application focusing on Flutter, without a backend.",
      repoUrl: "https://github.com/devsuperior3"
    },
    {
      title: "cpu-scheduling",
      description: "A implementation to simulate Round Robin algorithms for OS applications.",
      repoUrl: "https://github.com/devsuperior4"
    },
    {
      title: "casusgame-PIF",
      description: "A Dulac-type production to practice the LUCID language.",
      repoUrl: "https://github.com/devsuperior5"
    },
    {
      title: "ProjectsAndBaseDeOsDados",
      description: "A project to analyze datasets with the Matplotlib.",
      repoUrl: "https://github.com/devsuperior6"
    },
    {
      title: "FinalFrontier",
      description: "An extension tool reader made with python and regex.",
      repoUrl: "https://github.com/devsuperior7"
    },
    {
      title: "ECOnnect",
      description: "Web app created and developed with Django.",
      repoUrl: "https://github.com/devsuperior8"
    },
    {
      title: "bloom-django",
      description: "Web app created and developed with Django.",
      repoUrl: "https://github.com/devsuperior9"
    },
    {
      title: "virtual-memory",
      description: "A implementation to simulate a virtual memory in digital systems.",
      repoUrl: "https://github.com/devsuperior10"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-6 md:px-12 bg-dark-blue-gray">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-light-cyan">My Projects</h1>
        <p className="text-muted-blue-gray text-center mb-12">
          A collection of my work across software development
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
