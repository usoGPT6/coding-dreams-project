
import React from 'react';

interface CertificationCardProps {
  title: string;
  description: string;
}

const CertificationCard = ({ title, description }: CertificationCardProps) => {
  return (
    <div className="bg-dark-blue-gray p-5 rounded-lg h-full border border-light-gray">
      <h3 className="text-lg font-medium mb-2 text-light-gray">{title}</h3>
      <p className="text-sm text-light-gray">{description}</p>
    </div>
  );
};

export default CertificationCard;
