import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Briefcase, Code2, BookOpen, Trophy, User } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  const sections = [
    { title: "About", icon: User, path: "/about", emoji: "👋" },
    { title: "Education", icon: GraduationCap, path: "/education", emoji: "🎓" },
    { title: "Experience", icon: Briefcase, path: "/experience", emoji: "💼" },
    { title: "Projects", icon: Code2, path: "/projects", emoji: "💻" },
    { title: "Skills", icon: BookOpen, path: "/skills", emoji: "🚀" },
    { title: "Achievements", icon: Trophy, path: "/achievements", emoji: "🏆" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
      <header className="pt-20 pb-12 px-4">
        <div className="container mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-blue-400 shadow-xl">
            <img 
              src="https://avatars.githubusercontent.com/u/96944622" 
              alt="Nitesh Patel"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-blue-400 text-transparent bg-clip-text">
            Nitesh Patel
          </h1>
          <p className="text-xl text-blue-200 mb-6">Software Engineer & Web Developer</p>
          <div className="flex justify-center space-x-4 mb-8">
            <a 
              href="https://github.com/Nitesh3007" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-blue-400 transition-colors"
            >
              <span className="text-lg">🌟 150+ Contributions</span>
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <button
              key={section.title}
              onClick={() => navigate(section.path)}
              className="group relative overflow-hidden"
            >
              <div className="bg-gradient-to-br from-gray-800 to-blue-900 p-8 rounded-xl shadow-lg 
                             transform transition-all duration-300 group-hover:scale-[1.02] 
                             border border-blue-700/30 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-6">
                  <section.icon className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-5xl ml-4 transform group-hover:scale-110 transition-transform duration-300">
                    {section.emoji}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-blue-200 group-hover:text-blue-400 transition-colors duration-300">
                  {section.title}
                </h2>
                <div className="absolute inset-0 border-2 border-blue-400/20 rounded-xl opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;