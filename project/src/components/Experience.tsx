import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowLeft } from 'lucide-react';

function Experience() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>

      <div className="flex items-center mb-6">
        <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
        <h2 className="text-2xl font-bold">Experience</h2>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
            <p className="text-gray-600">HomeLane.com</p>
          </div>
          <p className="text-gray-500">Jun 2024 – Aug 2024</p>
        </div>
        <ul className="mt-4 list-disc list-inside text-gray-700">
          <li>Spearheaded the development of a cross-platform page using Ionic Framework for SiteWise App</li>
          <li>Resolved data integrity issue within the OrderWise website</li>
          <li>Collaborated with cross-functional teams to close around 3+ QA-reported issues</li>
          <li>Optimized MySQL database queries, reducing page load times by 15%</li>
        </ul>
        <div className="mt-4">
          <p className="text-gray-600 font-medium">Technologies: Ionic, ReactJS, MySQL, Typescript, Git, Jira</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;