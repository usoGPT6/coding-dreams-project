
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

  const [isSubmitting, setIsSubmitting] = useState(false);
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
      title: "Email Copiado!",
      description: "Endereço de email copiado para a área de transferência",
    });
  };

  const validateForm = () => {
    const errors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '' || !formData.email.includes('@'),
      subject: formData.subject.trim() === '',
      message: formData.message.trim() === ''
    };
    
    setFormErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Formulário incompleto",
        description: "Por favor, preencha todos os campos corretamente",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Usando Formspree para envio de emails
      const response = await fetch('https://formspree.io/f/xdkobgqp', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        toast({
          title: "Mensagem Enviada com Sucesso!",
          description: `Obrigado ${formData.name}, sua mensagem foi recebida. Retornarei em breve!`,
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Falha no envio');
      }

    } catch (error) {
      console.error('Erro ao enviar email:', error);
      
      toast({
        title: "Erro no Envio",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente ou entre em contato diretamente pelo email dudu.a.lins@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
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
            
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold mb-6 text-light-gray">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full bg-dark-navy border ${formErrors.name ? 'border-red-500' : 'border-light-gray'} rounded-md p-3 text-sm text-light-gray placeholder:text-muted-blue-gray`}
                      disabled={isSubmitting}
                    />
                    {formErrors.name && <p className="text-red-500 text-xs mt-1">Nome é obrigatório</p>}
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-dark-navy border ${formErrors.email ? 'border-red-500' : 'border-light-gray'} rounded-md p-3 text-sm text-light-gray placeholder:text-muted-blue-gray`}
                      disabled={isSubmitting}
                    />
                    {formErrors.email && <p className="text-red-500 text-xs mt-1">Email válido é obrigatório</p>}
                  </div>
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full bg-dark-navy border ${formErrors.subject ? 'border-red-500' : 'border-light-gray'} rounded-md p-3 text-sm text-light-gray placeholder:text-muted-blue-gray`}
                    disabled={isSubmitting}
                  />
                  {formErrors.subject && <p className="text-red-500 text-xs mt-1">Assunto é obrigatório</p>}
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full bg-dark-navy border ${formErrors.message ? 'border-red-500' : 'border-light-gray'} rounded-md p-3 text-sm text-light-gray placeholder:text-muted-blue-gray resize-vertical`}
                    disabled={isSubmitting}
                  />
                  {formErrors.message && <p className="text-red-500 text-xs mt-1">Mensagem é obrigatória</p>}
                </div>
                
                <div className="text-right">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-dark-navy hover:bg-dark-blue transition-colors duration-200 px-6 py-3 rounded text-light-cyan border border-light-cyan disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
