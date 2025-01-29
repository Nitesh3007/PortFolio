import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, ArrowLeft, Github } from 'lucide-react';

function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>

      <div className="flex items-center mb-6">
        <Code2 className="w-6 h-6 mr-2 text-blue-600" />
        <h2 className="text-2xl font-bold">Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold">A.E.I.O.U.</h3>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Github className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-700 mb-4">An Emotion Invigilator Only for You - A mental wellness application focused on stress and anxiety management through gamified experiences.</p>
          <p className="text-gray-600">ReactJS, MongoDB, Express.js, NodeJS</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold">HerCycle</h3>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Github className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-700 mb-4">A comprehensive women's health platform featuring period tracking and prediction capabilities.</p>
          <p className="text-gray-600">Tailwind, MongoDB, Express.js, ReactJS, NodeJS</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;