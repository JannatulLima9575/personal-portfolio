import React from 'react';
import { useParams } from 'react-router';

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
    title: "🥗 FoodBridge - Local Food Waste Reduction Platform",
    description:
      "A web platform that connects restaurants with people in need to reduce local food waste through real-time donation and pickup.",
    language: "React, HTML5, Tailwind CSS, Node.js, Express, MongoDB, Firebase",
    imageUrl: "https://i.ibb.co.com/cfZZ5j3/image.png",
    liveUrl: "https://foodbridge-d530a.web.app/",
    githubUrl: "https://github.com/JannatulLima9575/FoodBridge-client-side",
    features: [
      "Real-Time Food Donation System",
      "Pickup & Delivery Coordination",
      "Donation Tracking & History",
    ],
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
        <h2 className="text-2xl font-bold">Project not found.</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto bg-[#1f2937] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden transition duration-300 ease-in-out">
        {/* Image */}
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full overflow-hidden max-h-[400px]max-h-[400px] object-contain"
        />

        {/* Content */}
        <div className="p-8 md:p-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-green-400">{project.title}</h2>
          <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Key Features:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Technologies Used:</h3>
            <div className="flex flex-wrap gap-2">
              {project.language.split(',').map((lang, index) => (
                <span
                  key={index}
                  className="bg-green-700 bg-opacity-90 hover:bg-green-800 text-white text-xs font-medium px-3 py-1 rounded-full transition"
                >
                  {lang.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 active:scale-95 transition-transform px-5 py-2 rounded-lg text-white font-semibold text-sm shadow-md"
            >
              🚀 View Live
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 active:scale-95 transition-transform px-5 py-2 rounded-lg text-white font-semibold text-sm shadow-md"
            >
              💻 GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;