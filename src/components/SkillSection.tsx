
import React from 'react';

interface SkillSectionProps {
  title: string;
  skills: string[];
}

const SkillSection = ({ title, skills }: SkillSectionProps) => {
  return (
    <div className="bg-card p-5 rounded-lg">
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <div className="text-sm text-muted-foreground">
        {skills.join(', ')}
      </div>
    </div>
  );
};

export default SkillSection;
