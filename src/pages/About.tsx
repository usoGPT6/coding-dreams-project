
import React, { useEffect } from 'react';
import CertificationCard from '../components/CertificationCard';
import TimelineEvent from '../components/TimelineEvent';

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="min-h-screen py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About me</h1>
        
        <div className="max-w-3xl mx-auto mb-20">
          <p className="text-lg text-muted-foreground text-center mb-6">
            Hi! I'm Eduardo Lins, a Student at C.E.S.A.R School and a developer at Shawee, passionate about taking 
            on new challenges and game development at Unreal Engine. As a leader, I can organize teams, solve complex
            issues, and bring people together. Since little, I've worked on personal projects, game jams, and collaborative prototypes that 
            showcase my gameplay programming, level design, UI creation, and debugging analysis. I'm driven to optimize
            whatever I'm genuinely programming. Sometimes, my creativity may wander, but I focus on the core features.
            Outside of development, I like to enjoy my free time by playing games and as a librarian I like site-social networks.
          </p>
        </div>
        
        {/* Certifications */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <CertificationCard 
              title="ECPE" 
              description="Certificate of Proficiency in English by Michigan: C2 level" 
            />
            <CertificationCard 
              title="Tutor NEXT" 
              description="Tutor of the NEXT program for the subjects of Logic, OOP, APIs, HTML, CSS, JavaScript, and REACT" 
            />
            <CertificationCard 
              title="Tutor PIF" 
              description="Instructor and Excellence Award recipient for participation in PIF course teaching Python and C programming languages" 
            />
            <CertificationCard 
              title="Tutor Mathematics" 
              description="supporting students in the fundamentals of university-level calculus course" 
            />
            <CertificationCard 
              title="Hackathon" 
              description="Winning day teams, hosted by IQA Brazil Private and The Center for Health Innovation and Education" 
            />
          </div>
        </div>
        
        {/* Timeline */}
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center">Professional Timeline</h2>
          <div className="max-w-2xl mx-auto relative">
            <div className="timeline-line"></div>
            <TimelineEvent 
              title="Enrollment in C.E.S.A.R"
              period="03 / 2022"
            />
            <TimelineEvent 
              title="Tutor Mathematics"
              position="C.E.S.A.R School"
              period="06 / 2022"
            />
            <TimelineEvent 
              title="Tutor PIF"
              position="Computer Science"
              period="02 / 2023"
            />
            <TimelineEvent 
              title="Tutor NEXT"
              position="Programming Languages"
              period="03 / 2024 - 05 / 2024"
            />
            <TimelineEvent 
              title="Developer Shawee"
              position="Software Engineer"
              period="05 / 2024 - Present"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
