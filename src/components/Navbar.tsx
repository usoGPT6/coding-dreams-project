
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <header className="w-full py-4 px-6 md:px-12 bg-dark-navy">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/f5e341a8-579a-4824-b735-ba0e668a97a4.png" 
            alt="Logo" 
            className="h-8 w-8"
          />
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'text-light-cyan' : 'text-muted-blue-gray'}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'text-light-cyan' : 'text-muted-blue-gray'}`}
          >
            About
          </Link>
          <Link 
            to="/projects" 
            className={`nav-link ${location.pathname === '/projects' ? 'text-light-cyan' : 'text-muted-blue-gray'}`}
          >
            Projects
          </Link>
          <a 
            href="https://github.com/devsuperior" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link text-muted-blue-gray hover:text-light-cyan"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/feed/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link text-muted-blue-gray hover:text-light-cyan"
          >
            <Linkedin size={20} />
          </a>
          <Link 
            to="/contact" 
            className="contact-btn"
          >
            Contact Me
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
