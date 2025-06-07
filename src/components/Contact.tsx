import React, { useState } from 'react';
import { Send, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    submitted: false,
    loading: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, loading: true }));
    
    // Simulate form submission
    setTimeout(() => {
      setFormState(prev => ({ 
        ...prev, 
        submitted: true, 
        loading: false,
        name: '',
        email: '',
        subject: '',
        message: ''
      }));
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, submitted: false }));
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h6 className="text-blue-500 font-semibold mb-3 uppercase tracking-wider">Contact Us</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Have questions about our chapter or interested in joining? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-700/50 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">srmsigkdd@gmail.com</p>
                    <p className="text-gray-400 text-sm mt-1">We'll respond within 24-48 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gray-700/50 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-300">Department of Data Science and Business System</p>
                    <p className="text-gray-300">Tech Park 2, SRM KTR</p>
          
                  </div>
                </div>
                
                
              </div>
              
              <div className="mt-10">
                <h4 className="font-semibold mb-4">Connect With Us</h4>
                <div className="flex gap-4">
                  {[
                   { platform: 'twitter', url: 'https://x.com/srmsigkdd' },
                   { platform: 'instagram', url: 'https://www.instagram.com/srm_acm_sigkdd/' },
                   { platform: 'linkedin', url: 'https://www.linkedin.com/company/srmsigkdd/posts/?feedView=all' },
                   { platform: 'github', url: 'https://github.com/acmsigkdd' }
                   ].map(({ platform, url }) => (
                   <a 
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label={`Follow us on ${platform}`}
                    >
                    <img
                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/${platform}.svg`}
                    alt={platform}
                    className="w-5 h-5 invert opacity-75"
                    />
                    </a>
                    ))}

                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl">
              <h3 className="text-xl font-bold mb-4">Join Our Mailing List</h3>
              <p className="text-gray-300 mb-4">
                Stay updated with our latest events, workshops, and opportunities.
              </p>
              
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow bg-gray-700 text-white border border-gray-600 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            {formState.submitted ? (
              <div className="bg-green-900/30 border border-green-700 text-green-300 rounded-lg p-4 text-center">
                <h4 className="font-bold text-lg mb-2">Thank you!</h4>
                <p>Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
               
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formState.loading}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-white font-medium transition-all ${
                    formState.loading
                      ? 'bg-blue-700 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/20'
                  }`}
                >
                  {formState.loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;