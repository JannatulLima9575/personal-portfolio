import React from "react";
import { useNavigate } from "react-router";

const projects = [
  {
    id: 1,
    title: "🍽️ Grilli - Restaurant Website",
    description:
      "A fully responsive and modern restaurant website designed for Grilli. This project showcases a dynamic and elegant layout suitable for any restaurant business.",
    language: "HTML5, CSS, Vanilla JavaScript",
    imageUrl: "https://i.ibb.co/VpwNLsPk/image.png",
    liveUrl:
      "https://grilli-master-responsive-website.netlify.app/?email_address=",
    githubUrl:
      "https://github.com/JannatulLima9575/Grilli-Master-responsive-website?tab=readme-ov-file",
    features: [
      "Responsive Design (Mobile, Tablet, Desktop",
      "Smooth Scroll & Animation on Scroll",
      "SEO-friendly & Modern UI",
    ],
  },
  {
    id: 2,
    title: "💼 HireSpark - Freelance Task Marketplace",
    description:
      "HireSpark is a modern job posting and hiring platform that connects employers with potential candidates efficiently. It provides a smooth user experience for posting jobs, ensuring a seamless hiring process.",
    language: "React, HTML5, Tailwind CSS, Node.js, Express, MongoDB, Firebase",
    imageUrl: "https://i.ibb.co/tTmWBZWz/image.png",
    liveUrl: "https://hirespark-server-app.web.app/",
    githubUrl: "https://github.com/JannatulLima9575/HireSpark",
    features: [
      "Responsive and clean UI",
      "Employer can post job listings",
      "Candidates can explore jobs easily",
    ],
  },
  {
    id: 3,
    title: "📘 UpStudy – A Knowledge Sharing Platform",
    description:
      "EduVerse is a knowledge-sharing platform built for students to share articles, ideas, and insights on various topics. Inspired by platforms like Dev.to, it allows users to write, edit, and engage in discussions through comments.",
    language: "React, HTML5, Tailwind CSS, Node.js, Express, MongoDB, Firebase",
    imageUrl: "https://i.ibb.co/nMGGRFY8/image.png",
    liveUrl: "https://eduverse-a8eed.web.app/",
    githubUrl: "https://github.com/JannatulLima9575/UpStudy",
    features: [
      "Responsive educational website layout for all devices.",
      "Displays course listings with detailed information pages.",
      "Smooth navigation using React Router for multiple pages.",
    ],
  },
  {
    id: 4,
    title: "CAREER-CODE: A JOB PORTAL SYSTEM",
    description:
      "A comprehensive job portal platform designed to enable seamless interaction between job seekers and employers. The system provides full CRUD operations for managing job postings, user authentication, and streamlined job application processes.",
    language: "React, HTML5, Tailwind CSS, Node.js, Express, MongoDB",
    imageUrl: "https://i.ibb.co/WNmPFz6H/image.png",
    liveUrl: "https://jobnest-app.web.app/",
    githubUrl:
      "https://github.com/JannatulLima9575/JobNest-A-JOB-PORTAL-SYSTEM",
    features: [
      "Fully responsive across mobile, tablet, and desktop.",
      "Apply for jobs with detailed forms and manage your applications.",
      "Secure session management with JWT tokens.",
    ],
  },
];

const Project = () => {
  const navigate = useNavigate();

  const goToDetails = (id) => {
    navigate(`/projectdetails/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-10">
      {projects.map(
        ({
          id,
          title,
          description,
          language,
          imageUrl,
          liveUrl,
          githubUrl,
          features,
        }) => (
          <div
            key={id}
            className="bg-gray-800 gap-5 rounded-lg shadow-lg overflow-hidden flex flex-col md:p-4 md:flex-row"
          >
            {/* Left: Image */}
            <div className="md:w-1/2 flex-shrink-0 flex justify-center items-center bg-gray-900 p-4 rounded-md">
              <img
                src={imageUrl}
                alt={title}
                className="max-h-60 md:max-h-full object-contain"
              />
            </div>

            {/* Right: Content */}
            <div className="md:w-1/2 p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">
                  {title}
                </h3>
                <p className="text-gray-300 mb-4">{description}</p>

                {/* 🔹 Main Features */}
                {features && (
                  <ul className="list-disc list-inside text-gray-400 text-sm mb-4">
                    {features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* 🔸 Skills */}
              <div className="flex flex-wrap gap-2 mt-3 mb-3">
                {language.split(",").map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 hover:bg-gray-600 rounded-xl text-white text-xs font-medium px-3 py-1"
                  >
                    {skill.trim()}
                  </span>
                ))}
              </div>

              {/* 🔘 Buttons */}
              <div className="flex space-x-3">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-green-600 px-3 py-1 rounded text-white font-semibold text-sm md:text-xl"
                >
                  Live
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:hover:bg-green-600 px-3 py-1 rounded text-white font-semibold text-sm md:text-xl"
                >
                  GitHub
                </a>
                <button
                  onClick={() => goToDetails(id)}
                  className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white font-semibold text-sm md:text-xl"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Project;
