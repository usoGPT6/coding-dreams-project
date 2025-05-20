
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
      className="bg-dark-blue-gray p-6 rounded-lg block border-2 border-light-gray hover:bg-[#3C4755] transition-all duration-200 text-light-gray"
    >
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </a>
  );
};

export default ProjectCard;
