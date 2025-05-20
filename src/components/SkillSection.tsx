
import React from 'react';

interface SkillSectionProps {
  title: string;
  skills: string[];
}

const SkillSection = ({ title, skills }: SkillSectionProps) => {
  return (
    <div className="bg-dark-blue p-5 rounded-lg">
      <h3 className="text-lg font-medium mb-3 text-light-gray">{title}</h3>
      <div className="text-sm text-light-gray">
        {skills.join(', ')}
      </div>
    </div>
  );
};

export default SkillSection;
