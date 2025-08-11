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
              Hello! I'm <strong>Jannatul Lima</strong>, a passionate{" "}
              <strong>Frontend Developer</strong> and Computer Science student.
              My programming journey began with curiosity about how websites
              work, and over time, it has turned into a deep passion for
              creating interactive, responsive, and visually appealing web
              applications.
            </p>
            <p>
              I specialize in <strong>React</strong> and{" "}
              <strong>Tailwind CSS</strong>, and I'm currently exploring the{" "}
              <strong>MERN Stack</strong> to expand my expertise into full-stack
              development. I enjoy building real-world projects, solving
              problems creatively, and writing clean, efficient code.
            </p>
            <p>
              The type of work I truly enjoy is crafting user-friendly designs,
              working on collaborative projects, and continuously learning new
              technologies to stay ahead in the tech industry.
            </p>
            <p>
              Outside of programming, I enjoy photography, painting, and
              exploring new places. These hobbies keep me creative, refreshed,
              and inspired in my development work.
            </p>
            <p>
              As a person, I’m curious, dedicated, and love taking on
              challenges. I believe in continuous learning and always strive to
              grow both personally and professionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;