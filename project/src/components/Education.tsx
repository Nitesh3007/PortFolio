import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowLeft } from 'lucide-react';

function Education() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>
      
      <div className="flex items-center mb-6">
        <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
        <h2 className="text-2xl font-bold">Education</h2>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold">National Institute of Technology, Raipur</h3>
        <p className="text-gray-600">Bachelor of Technology | CGPA: 8.20/10</p>
        <p className="text-gray-500">2021-2025 | Raipur, Chhattisgarh</p>
      </div>
    </div>
  );
}

export default Education;