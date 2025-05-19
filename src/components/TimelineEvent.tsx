
import React from 'react';

interface TimelineEventProps {
  title: string;
  period: string;
  position?: string;
}

const TimelineEvent = ({ title, period, position }: TimelineEventProps) => {
  return (
    <div className="relative pl-12 pb-10">
      <div className="timeline-circle left-5 top-1"></div>
      <div className="flex flex-col">
        <h3 className="text-lg font-medium">{title}</h3>
        {position && <p className="text-sm text-muted-foreground mb-1">{position}</p>}
        <p className="text-sm text-muted-foreground">{period}</p>
      </div>
    </div>
  );
};

export default TimelineEvent;
