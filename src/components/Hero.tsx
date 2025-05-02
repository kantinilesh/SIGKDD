import React, { useRef, useEffect } from 'react';
import { Database, LineChart, Users, PenTool } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Animation timeline
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
    });

    // Animate elements sequentially
    tl.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    )
    .fromTo(
      headingRef.current?.querySelector('div:first-child'),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      '-=0.3'
    )
    .fromTo(
      headingRef.current?.querySelector('h1 span:first-child'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      '-=0.2'
    )
    .fromTo(
      headingRef.current?.querySelector('h1 span:last-child'),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 },
      '-=0.3'
    )
    .fromTo(
      headingRef.current?.querySelector('p'),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      '-=0.4'
    )
    .fromTo(
      buttonsRef.current?.querySelectorAll('button'),
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5, 
        stagger: 0.1 
      },
      '-=0.3'
    );

    // Animate features with ScrollTrigger
    if (featuresRef.current) {
      const features = featuresRef.current.querySelectorAll('div');
      
      features.forEach((feature, index) => {
        gsap.fromTo(
          feature,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: featuresRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none',
            }
          }
        );
      });
    }

    // Gradient animation
    const gradient = heroRef.current?.querySelector('div:first-child');
    if (gradient) {
      gsap.to(gradient, {
        rotation: '+=360',
        duration: 60,
        repeat: -1,
        ease: 'none',
      });
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 flex flex-col items-center justify-center min-h-screen relative overflow-hidden"
    >
      {/* Gradient circle behind the hero text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-600/30 to-purple-600/10 blur-3xl" />
      
      <div ref={headingRef} className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-gray-700">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm text-gray-300">Knowledge Discovery in Data</span>
        </div>        
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          <span className="block">Discover with</span>
          <span className="block"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">ACM SIGKDD STUDENT CHAPTER</span></span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Join our student chapter of ACM SIGKDD and become part of a community passionate about knowledge discovery, data science, and machine learning.
        </p>
        
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all"
          >
            Join Our Chapter
          </button>
          <button 
            onClick={() => scrollToSection('events')}
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg border border-gray-700 transition-all"
          >
            View Upcoming Events
          </button>
        </div>
      </div>
      
      {/* Feature cards */}
      <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-20 relative z-10 px-4">
        {[
          { 
            icon: <Database className="h-6 w-6 text-blue-500" />, 
            title: "Data Science Resources", 
            description: "Access curated resources and learning materials for all skill levels." 
          },
          { 
            icon: <LineChart className="h-6 w-6 text-purple-500" />, 
            title: "Research Opportunities", 
            description: "Connect with faculty and discover research opportunities in data mining." 
          },
          { 
            icon: <Users className="h-6 w-6 text-teal-500" />, 
            title: "Community Network", 
            description: "Join a vibrant community of like-minded data enthusiasts." 
          },
          { 
            icon: <PenTool className="h-6 w-6 text-orange-500" />, 
            title: "Hands-on Workshops", 
            description: "Participate in workshops and hackathons to build practical skills." 
          }
        ].map((feature, index) => (
          <div 
            key={index} 
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl hover:shadow-xl hover:shadow-blue-900/10 transition-all hover:-translate-y-1"
          >
            <div className="mb-4 p-2 rounded-lg bg-gray-700/50 inline-block">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;