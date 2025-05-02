import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import { eventsData } from '../data/events';

const Events = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  
  const filteredEvents = eventsData.filter(event => {
    const eventDate = new Date(event.date);
    const currentDate = new Date();
    return activeTab === 'upcoming' 
      ? eventDate >= currentDate 
      : eventDate < currentDate;
  });

  return (
    <section id="events" className="py-20 px-4 relative bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h6 className="text-blue-500 font-semibold mb-3 uppercase tracking-wider">Events</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Data Science <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Events</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We organize workshops, seminars, hackathons, and social gatherings to help you learn, connect, and grow in the field of data science.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-gray-800 rounded-lg">
            {['upcoming', 'past'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setActiveTab(tab as 'upcoming' | 'past')}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Events
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:shadow-xl hover:shadow-blue-900/10 transition-all hover:-translate-y-1"
              >
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ 
                    backgroundImage: `url(${event.image})` 
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {event.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar size={14} className="mr-1" />
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock size={14} className="mr-1" />
                      {event.time}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{event.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <MapPin size={14} className="mr-1" />
                    {event.location}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-400">
                      <Users size={14} className="mr-1" />
                      {event.attendees} attendees
                    </div>
                    
                    <button className="text-blue-500 group-hover:text-blue-400 flex items-center gap-1 text-sm font-medium transition-colors">
                      Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-gray-800/50 rounded-xl border border-gray-700">
              <p className="text-gray-400">No {activeTab} events at the moment.</p>
              {activeTab === 'upcoming' && (
                <p className="text-gray-500 mt-2">Check back soon for new events!</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;