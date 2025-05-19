
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-4 px-6 md:px-12 mt-12 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img 
            src="/lovable-uploads/f5e341a8-579a-4824-b735-ba0e668a97a4.png" 
            alt="Logo" 
            className="h-6 w-6"
          />
        </div>
        <div className="text-sm text-muted-foreground">
          © {currentYear} Eduardo A Lins. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
