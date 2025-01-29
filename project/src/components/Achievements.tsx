import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, ArrowLeft } from 'lucide-react';

function Achievements() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>

      <div className="flex items-center mb-6">
        <Trophy className="w-6 h-6 mr-2 text-blue-600" />
        <h2 className="text-2xl font-bold">Achievements</h2>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
            <p className="ml-4 text-gray-700">Led team to semi-finals, ranked Top 175 out of 27000+ participating teams in Coca-Cola Disrupt Season-3</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
            <p className="ml-4 text-gray-700">Secured Top 125 Rank among 15000+ participating teams in ZS Campus Beats</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
            <p className="ml-4 text-gray-700">Cracked Hero Campus Challenge Season 09 and Unstop's Creative Hackathon</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Achievements;