
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Me";
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (value.trim() !== '') {
      setFormErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('dudu.a.lins@gmail.com');
    toast({
      title: "Email Copied!",
      description: "Email address copied to clipboard",
    });
  };

  const validateForm = () => {
    const errors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '',
      subject: formData.subject.trim() === '',
      message: formData.message.trim() === ''
    };
    
    setFormErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real implementation, we would send an email here
      // For now, we'll just show a success toast
      toast({
        title: "Message Sent!",
        description: `Thanks ${formData.name}, your message has been sent to dudu.a.lins@gmail.com`,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      toast({
        title: "Form incomplete",
        description: "Please fill in all fields",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Get In Touch</h1>
        <p className="text-muted-foreground text-center mb-12">
          Have a question or want to work together? Feel free to reach out!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="bg-card p-5 rounded-lg">
              <h3 className="text-sm font-medium mb-2">E-mail</h3>
              <button 
                onClick={copyEmail}
                className="text-muted-foreground hover:text-white text-sm"
              >
                dudu.a.lins@gmail.com
              </button>
            </div>
            
            <div className="bg-card p-5 rounded-lg">
              <h3 className="text-sm font-medium mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">Recife, Brazil</p>
            </div>
            
            <div className="bg-card p-5 rounded-lg">
              <h3 className="text-sm font-medium mb-2">GitHub</h3>
              <a 
                href="https://github.com/devsuperior" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-white flex items-center gap-2 text-sm"
              >
                <Github size={16} />
                github.com/devsuperior
              </a>
            </div>
            
            <div className="bg-card p-5 rounded-lg">
              <h3 className="text-sm font-medium mb-2">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/feed/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-white flex items-center gap-2 text-sm"
              >
                <Linkedin size={16} />
                linkedin.com/in/eduardolins
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full bg-card border ${formErrors.name ? 'border-red-500' : 'border-border'} rounded-md p-3 text-sm`}
                  />
                  {formErrors.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-card border ${formErrors.email ? 'border-red-500' : 'border-border'} rounded-md p-3 text-sm`}
                  />
                  {formErrors.email && <p className="text-red-500 text-xs mt-1">Email is required</p>}
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full bg-card border ${formErrors.subject ? 'border-red-500' : 'border-border'} rounded-md p-3 text-sm`}
                />
                {formErrors.subject && <p className="text-red-500 text-xs mt-1">Subject is required</p>}
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full bg-card border ${formErrors.message ? 'border-red-500' : 'border-border'} rounded-md p-3 text-sm`}
                />
                {formErrors.message && <p className="text-red-500 text-xs mt-1">Message is required</p>}
              </div>
              
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-primary hover:bg-[#283B4D] transition-colors duration-200 px-6 py-3 rounded text-white"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
