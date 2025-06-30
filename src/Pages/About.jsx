import React from "react";
import profileImage from "../assets/Profile.jpeg";

const About = () => {
  return (
    <section className="bg-[#111] min-h-screen overflow-y-hidden flex items-center justify-center px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-gray-800 p-8 md:p-12 rounded-2xl shadow-lg">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profileImage}
            alt="Profile"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-md border-4 border-green-500"
          />
        </div>

        {/* Text Content */}
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400">
            ✨ About Me
          </h2>

          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>
              Hello! I'm <strong>Jannatul Lima</strong>, a passionate Frontend
              Developer specializing in building responsive and user-friendly
              web applications using <strong>React</strong> and{" "}
              <strong>Tailwind CSS</strong>.
            </p>
            <p>
              Currently, I'm exploring the <strong>MERN Stack</strong> to
              enhance my skills in full-stack web development and build more
              dynamic, database-driven applications.
            </p>
            <p>
              I love turning ideas into real-world projects and always strive to
              write clean, efficient, and maintainable code.
            </p>
            <p>
              I'm open to exciting opportunities where I can contribute, learn,
              and grow as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;