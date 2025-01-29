import React from 'react';
import { Link } from 'react-router-dom';
import { User, ArrowLeft, Code2, Heart, Coffee } from 'lucide-react';

function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/" className="inline-flex items-center text-blue-300 hover:text-blue-400 mb-8">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>

      <div className="flex items-center mb-8">
        <User className="w-6 h-6 mr-2 text-blue-400" />
        <h2 className="text-3xl font-bold text-blue-200">About Me</h2>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-blue-700/30">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img 
              src="https://avatars.githubusercontent.com/u/96944622" 
              alt="Nitesh Patel"
              className="w-full rounded-xl shadow-lg"
            />
            <div className="mt-6 space-y-4">
              <div className="flex items-center text-blue-300">
                <Code2 className="w-5 h-5 mr-2" />
                <span>150+ GitHub Contributions</span>
              </div>
              <div className="flex items-center text-blue-300">
                <Heart className="w-5 h-5 mr-2" />
                <span>Passionate about Web Development</span>
              </div>
              <div className="flex items-center text-blue-300">
                <Coffee className="w-5 h-5 mr-2" />
                <span>Problem Solver</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-blue-200 text-lg leading-relaxed mb-6">
              I'm a passionate Software Engineer and Web Developer currently pursuing my Bachelor's in Technology. 
              With a strong foundation in full-stack development and a keen interest in solving complex problems, 
              I strive to create impactful solutions that make a difference.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-3">What I Do</h3>
                <ul className="list-disc list-inside text-blue-200 space-y-2">
                  <li>Full Stack Web Development</li>
                  <li>Problem Solving & Algorithm Design</li>
                  <li>UI/UX Development</li>
                  <li>Database Design & Optimization</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Current Focus</h3>
                <p className="text-blue-200">
                  Currently focusing on expanding my knowledge in modern web technologies and contributing to open-source projects.
                  Always eager to learn new technologies and tackle challenging problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;