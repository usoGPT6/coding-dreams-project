
import React, { useEffect } from 'react';
import CertificationCard from '../components/CertificationCard';
import TimelineEvent from '../components/TimelineEvent';

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 bg-dark-blue-gray">
        <div className="max-w-6xl mx-auto">
          <div className="py-16 px-6 md:px-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-light-cyan">About me</h1>
            
            <div className="max-w-3xl mx-auto mb-20">
              <p className="text-lg text-muted-blue-gray text-center mb-6">
                Hi! I'm Eduardo Lins, a Student at C.E.S.A.R School and a developer at Shawee, passionate about taking 
                on new challenges and game development at Unreal Engine. As a leader, I can organize teams, solve complex
                issues, and bring people together. Since little, I've worked on personal projects, game jams, and collaborative prototypes that 
                showcase my gameplay programming, level design, UI creation, and debugging analysis. I'm driven to optimize
                whatever I'm genuinely programming. Sometimes, my creativity may wander, but I focus on the core features.
                Outside of development, I like to enjoy my free time by playing games and as a librarian I like site-social networks.
              </p>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="py-16 px-6 md:px-12 mb-0 bg-dark-navy">
            <h2 className="text-3xl font-bold mb-8 text-center text-light-cyan">Certifications</h2>
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
          <div className="py-16 px-6 md:px-12 bg-dark-blue-gray">
            <h2 className="text-3xl font-bold mb-2 text-center text-light-cyan">Professional Timeline</h2>
            <p className="text-center text-muted-blue-gray mb-10">How did I end up here?</p>
            
            <div className="flex justify-center mb-10">
              <img 
                src="/lovable-uploads/35ae585e-2d76-4e26-b25a-420d2ea9ff46.png" 
                alt="Timeline" 
                className="max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
