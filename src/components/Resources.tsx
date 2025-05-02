import React, { useState } from 'react';
import { resources } from '../data/resources';
import { BookOpen, Code, ExternalLink, Tag } from 'lucide-react';

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...new Set(resources.map(resource => resource.category))];
  
  const filteredResources = activeCategory === 'All' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  return (
    <section id="resources" className="py-20 px-4 relative bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h6 className="text-blue-500 font-semibold mb-3 uppercase tracking-wider">Resources</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Data Science <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Learning Resources</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Browse our curated collection of resources to enhance your data science and machine learning knowledge.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:shadow-xl hover:shadow-blue-900/10 transition-all hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-gray-700 rounded-lg">
                    {resource.category === 'Courses' && <BookOpen size={20} className="text-blue-500" />}
                    {resource.category === 'Tools' && <Code size={20} className="text-purple-500" />}
                    {resource.category === 'Tutorials' && <Tag size={20} className="text-teal-500" />}
                  </div>
                  <div className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded-md">
                    {resource.level}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  {resource.description}
                </p>
                
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-blue-500 text-xs font-medium">
                    {resource.category}
                  </span>
                  
                  <span className="text-gray-400 flex items-center gap-1 text-sm group-hover:text-blue-400 transition-colors">
                    View Resource <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 shadow-lg">
          <h3 className="text-xl font-bold mb-4">Request a Resource</h3>
          <p className="text-gray-300 mb-6">
            Can't find what you're looking for? Let us know, and we'll consider adding it to our collection.
          </p>
          
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition-colors"
          >
            Submit Request
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resources;