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
              Developer specializing in crafting responsive and user-friendly
              web interfaces using <strong>React</strong> and{" "}
              <strong>Tailwind CSS</strong>.
            </p>
            <p>
              My journey into web development began with a curiosity for how
              websites function, which soon evolved into a deep-seated passion
              for building seamless user experiences.
            </p>
            <p>
              Beyond coding, I have a keen eye for design and enjoy
              collaborating with designers to bring mockups to life.
            </p>
            <p>
              I'm currently open to exciting opportunities where I can
              contribute, learn, and grow. Let's connect and create something
              amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
