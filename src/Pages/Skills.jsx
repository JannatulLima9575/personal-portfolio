import React from 'react';

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "C",
  "C++",
  "Python",
  "Django",
  "Git",
  "GitHub",
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 text-green-400">🛠️ My Skills</h2>
        
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 text-center py-4 rounded-lg shadow-md hover:bg-green-600 transition-colors cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;