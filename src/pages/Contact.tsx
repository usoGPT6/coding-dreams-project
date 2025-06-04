
import React, { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Me";
  }, []);

  const { toast } = useToast();

  const copyEmail = () => {
    navigator.clipboard.writeText('dudu.a.lins@gmail.com');
    toast({
      title: "Email Copied!",
      description: "Email address copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen">
      <div className="py-16 px-6 md:px-12 bg-dark-blue-gray">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-light-cyan">Get In Touch</h1>
          <p className="text-muted-blue-gray text-center mb-12">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
      </div>
      
      <div className="py-16 px-6 md:px-12 bg-dark-navy">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-dark-navy border border-light-gray p-5 rounded-lg">
              <h3 className="text-sm font-medium mb-2 text-light-gray">E-mail</h3>
              <button 
                onClick={copyEmail}
                className="text-light-gray hover:text-white text-sm"
              >
                dudu.a.lins@gmail.com
              </button>
            </div>
            
            <div className="bg-dark-navy border border-light-gray p-5 rounded-lg">
              <h3 className="text-sm font-medium mb-2 text-light-gray">Location</h3>
              <p className="text-light-gray text-sm">Recife, Brazil</p>
            </div>
            
            <div className="bg-dark-navy border border-light-gray p-5 rounded-lg">
              <h3 className="text-sm font-medium mb-2 text-light-gray">GitHub</h3>
              <a 
                href="https://github.com/devsuperior" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light-gray hover:text-white flex items-center gap-2 text-sm"
              >
                <Github size={16} />
                github.com/devsuperior
              </a>
            </div>
            
            <div className="bg-dark-navy border border-light-gray p-5 rounded-lg">
              <h3 className="text-sm font-medium mb-2 text-light-gray">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/feed/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light-gray hover:text-white flex items-center gap-2 text-sm"
              >
                <Linkedin size={16} />
                linkedin.com/in/eduardolins
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
