
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import SkillSection from '../components/SkillSection';
import TypingAnimation from '../components/TypingAnimation';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 bg-dark-navy">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-light-cyan">Eduardo Alves Lins</h1>
          <div className="text-2xl md:text-3xl font-medium text-muted-blue-gray mb-8">
            <TypingAnimation text="I'm a Developer and Software Engineer" />
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="primary-btn">
              View My Work <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="outline-btn">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 px-6 md:px-12 bg-dark-blue-gray">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="section-title">About me</h2>
              <p className="text-muted-blue-gray mb-6">
                I'm a student in C.E.S.A.R School and a developer at Shawee, passionate about taking 
                on new challenges and game development at Unreal Engine.
              </p>
              <Link to="/about" className="text-light-cyan flex items-center gap-2 hover:text-primary transition-colors">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SkillSection 
                title="Languages" 
                skills={["C/C++", "Java", "JavaScript", "TypeScript", "Python", "HTML/CSS"]}
              />
              <SkillSection 
                title="FrameWorks" 
                skills={["React", "Spring Boot", "Next.js"]}
              />
              <SkillSection 
                title="DataBases" 
                skills={["MySQL", "PostgreSQL"]}
              />
              <SkillSection 
                title="Tools & Platforms" 
                skills={["Docker", "Git/GitHub", "VS Code", "IntelliJ", "Eclipse"]}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-16 px-6 md:px-12 bg-dark-navy">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <ProjectCard 
              title="WikiTrivia" 
              description="A game developed in Javascript by me and my fellow interns."
              repoUrl="https://github.com/devsuperior1"
            />
            <ProjectCard 
              title="PintOS-AlarmClock" 
              description="This project enhances PintOS by implementing an alarm clock mechanism."
              repoUrl="https://github.com/devsuperior2"
            />
            <ProjectCard 
              title="AybiPalace" 
              description="A mini application focusing on Flutter, without a backend."
              repoUrl="https://github.com/devsuperior3"
            />
          </div>
          <div className="flex justify-end">
            <Link to="/projects" className="text-light-cyan flex items-center gap-2 hover:text-primary transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 px-6 md:px-12 bg-dark-blue-gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-4">Let's Work Together</h2>
          <p className="text-muted-blue-gray mb-6">
            I'm ready to apply my skills to your project, creating elegant solutions for complex problems.
          </p>
          <Link to="/contact" className="primary-btn mx-auto inline-flex">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
