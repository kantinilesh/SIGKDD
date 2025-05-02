import React from 'react';
import { teamMembers } from '../data/team';
import { Github, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h6 className="text-blue-500 font-semibold mb-3 uppercase tracking-wider">Our Team</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Leadership Team</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our chapter is led by a passionate team of students and faculty advisors dedicated to promoting data science and knowledge discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:shadow-xl hover:shadow-blue-900/10 transition-all hover:-translate-y-1 group"
            >
              <div className="relative">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full aspect-square object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-blue-500 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                
                <div className="flex gap-3">
                  {member.github && (
                    <a 
                      href={member.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github size={16} />
                    </a>
                  )}
                  
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                  
                  <a 
                    href={`mailto:${member.email}`}
                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">
            Interested in joining our leadership team? We're always looking for passionate individuals to help grow our chapter.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all"
          >
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;