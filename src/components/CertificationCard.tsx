
import React from 'react';

interface CertificationCardProps {
  title: string;
  description: string;
}

const CertificationCard = ({ title, description }: CertificationCardProps) => {
  return (
    <div className="bg-card p-5 rounded-lg h-full">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default CertificationCard;
