import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowLeft } from 'lucide-react';

function Skills() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>

      <div className="flex items-center mb-6">
        <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
        <h2 className="text-2xl font-bold">Technical Skills</h2>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Programming Languages</h3>
            <p className="text-gray-700">C++, Java, Python, SQL</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Web Technologies</h3>
            <p className="text-gray-700">HTML, CSS, Javascript, React.js, Angular, Springboot, Node.js, Express.js, Django, NextJS</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Databases</h3>
            <p className="text-gray-700">PostgreSQL, MySQL, MongoDB</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">ML Framework and Libraries</h3>
            <p className="text-gray-700">Numpy, Pandas, Matplotlib, Seaborn</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;