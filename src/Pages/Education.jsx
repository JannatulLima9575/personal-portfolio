import React from 'react';

const educationData = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Sylhet International University (SIU)",
    year: "2025 - Present",
    description:
      "Currently pursuing my undergraduate degree focused on web development, data structures, and specially Machine Learning.",
  },
  {
    degree: "Computer Science & Engineering",
    institution: "Sylhet Polytechnic Institute",
    year: "2020 - 2024",
    description:
      "Completed Diploma in Computer Science & Engineering with a focus on software development and programming languages.",
  },
];

const achievements = [
  {
    title: "Completed MERN Stack Development Course",
    institution: "Programming Hero",
    year: "December to July 2024 - 2025",
    description:
      "Successfully completed MERN stack course from Programming Hero covering MongoDB, Express, React, Node, Auth, Deployment.",
    certificateUrl: "https://your-mern-certificate-link.com",
  },
  {
    title: "Completed Python Programming Course",
    institution: "The Institute of Information and Communication Technology (IICT), SUST",
    year: "November to December - 2024",
    description:
      "Completed Python course from SUST focusing on programming fundamentals, OOP, and data handling.",
    certificateUrl: "https://drive.google.com/file/d/1JrHtKfCzjTTJmHcpQqGnqEuHcMLljy4U/view?usp=drive_link", 
  },
];

const Education = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-16 px-4 md:px-8 lg:px-20 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Education Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          🎓 My Education
        </h2>

        <div className="space-y-8 mb-20">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {edu.institution} | {edu.year}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-12">
          🏆 Achievements
        </h2>

        <div className="space-y-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-black hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.institution} | {item.year}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {item.description}
              </p>

              {/* View Certificate Button */}
              {item.certificateUrl && (
                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800 transition"
                >
                  🎓 View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;