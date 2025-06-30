import React from 'react';
import { useNavigate } from 'react-router';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'This is the description of project one.',
    language: 'React, Tailwind CSS',
    imageUrl: 'https://via.placeholder.com/150',
    liveUrl: 'https://liveprojectone.com',
    githubUrl: 'https://github.com/username/project-one',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This is the description of project two.',
    language: 'Node.js, Express',
    imageUrl: 'https://via.placeholder.com/150',
    liveUrl: 'https://liveprojecttwo.com',
    githubUrl: 'https://github.com/username/project-two',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'This is the description of project three.',
    language: 'MongoDB, React',
    imageUrl: 'https://via.placeholder.com/150',
    liveUrl: 'https://liveprojectthree.com',
    githubUrl: 'https://github.com/username/project-three',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'This is the description of project four.',
    language: 'Python, Django',
    imageUrl: 'https://via.placeholder.com/150',
    liveUrl: 'https://liveprojectfour.com',
    githubUrl: 'https://github.com/username/project-four',
  },
];

const Project = () => {
  const navigate = useNavigate();

  const goToDetails = (id) => {
    navigate(`/project/${id}`); // Redirect to project detail page with id param
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-8">
  {projects.map(({ id, title, description, language, imageUrl, liveUrl, githubUrl }) => (
    <div key={id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
      {/* Left: Image */}
      <div className="md:w-1/2 flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-48 md:h-full"
        />
      </div>

      {/* Right: Content */}
      <div className="md:w-1/2 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2">{title}</h3>
          <p className="text-gray-300 mb-2">{description}</p>
          <p className="text-green-500 font-medium mb-4">{language}</p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white font-semibold text-sm"
          >
            Live
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-white font-semibold text-sm"
          >
            GitHub
          </a>
          <button
            onClick={() => goToDetails(id)}
            className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white font-semibold text-sm"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

  );
};

export default Project;