
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  repoUrl: string;
}

const ProjectCard = ({ title, description, repoUrl }: ProjectCardProps) => {
  return (
    <a 
      href={repoUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="project-card block"
    >
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </a>
  );
};

export default ProjectCard;
