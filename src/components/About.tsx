import React from 'react';
import { BarChart4, GraduationCap, Trophy, Globe2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h6 className="text-blue-500 font-semibold mb-3 uppercase tracking-wider">About Us</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Advancing the Science of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Knowledge Discovery</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our ACM SIGKDD student chapter is dedicated to promoting research, education, and application of data mining and knowledge discovery principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div className="order-1 md:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl opacity-50"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 overflow-hidden shadow-xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Chapter Highlights</h3>
                <p className="text-gray-400">What makes our student chapter unique</p>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Founded in 2024 with a focus on interdisciplinary data science",
                  "Regular workshops, seminars, and hands-on sessions",
                  "Connections with leading companies in the tech industry",
                  "Opportunities to participate in online hackerrank challenges",
                  "Mentorship programs with experienced data scientists",
                  "Access to exclusive resources and learning materials"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <p className="text-sm text-gray-300 italic">
                  "Our chapter provides a platform for students to explore the fascinating world of data science, build meaningful connections, and develop skills that will shape the future of technology."
                </p>
                <p className="text-sm text-blue-400 mt-2">— ADITYA VERMA, Founder</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
