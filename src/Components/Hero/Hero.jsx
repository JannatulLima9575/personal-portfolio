import React from "react";
import Marquee from "react-fast-marquee";
import heroImage from "../../assets/hero.jpg";
import { NavLink } from "react-router";
import downloadIcon from "../../assets/download.png";
import callIcon from "../../assets/call.png";

const Hero = () => {
  const skills = [
    {
      name: "HTML",
      src: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    },
    {
      name: "CSS",
      src: "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000",
    },
    {
      name: "JavaScript",
      src: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000",
    },
    {
      name: "React",
      src: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
    },
    {
      name: "Tailwind",
      src: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
    },
    {
      name: "Git",
      src: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
    },
    {
      name: "Github",
      src: "https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000",
    },
    {
      name: "Figma",
      src: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
    },
    {
      name: "Firebase",
      src: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000",
    },
    {
      name: "Python",
      src: "https://img.icons8.com/?size=100&id=YX03OUiHE3rz&format=png&color=000000",
    },
    {
      name: "C++",
      src: "https://img.icons8.com/?size=100&id=40669&format=png&color=000000",
    },
    {
      name: "HTML",
      src: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    },
    {
      name: "CSS",
      src: "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000",
    },
    {
      name: "JavaScript",
      src: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000",
    },
    {
      name: "React",
      src: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
    },
    {
      name: "Tailwind",
      src: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
    },
    {
      name: "Git",
      src: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
    },
    {
      name: "Github",
      src: "https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000",
    },
    {
      name: "Figma",
      src: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
    },
    {
      name: "Firebase",
      src: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000",
    },
    {
      name: "Python",
      src: "https://img.icons8.com/?size=100&id=YX03OUiHE3rz&format=png&color=000000",
    },
    {
      name: "C++",
      src: "https://img.icons8.com/?size=100&id=40669&format=png&color=000000",
    },
  ];

  return (
    <div className="w-11/12 mx-auto">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 md:pb-4">
              Jannatul Lima
            </h1>
            <p className="text-gray-400 mb-6 leading-relaxed md:text-xl">
              I specialize in crafting responsive and user-friendly web
              interfaces using <br />
              React and Tailwind CSS. Let's collaborate to bring your ideas to
              life.
            </p>
            <div className="flex gap-4">
              <NavLink
                to="/contact"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded shadow-lg shadow-green-500/40 transition"
              >
                <span>Contact Me</span>
                <img src={callIcon} alt="Contact Icon" className="w-5 h-5" />
              </NavLink>

              <NavLink
                to="/contact"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded shadow-lg shadow-green-500/40 transition"
              >
                <span>Download CV</span>
                <img
                  src={downloadIcon}
                  alt="Download Icon"
                  className="w-6 h-6"
                />
              </NavLink>
            </div>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt="Hero Illustration"
              className="w-[300px] md:w-[400px] lg:w-[500px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Skills Marquee */}
      <section className="bg-black text-white py-10">
        <div className="w-full mx-auto">
          <h2 className="text-2xl font-semibold mb-5 text-center">My Skills</h2>
          <Marquee pauseOnHover={true} speed={50} gradient={false}>
            {skills.map((skill, index) => (
              <div key={index} className="mx-6 text-center">
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="h-16 w-16 object-contain mx-auto"
                />
                <p className="text-white mt-2 text-sm">{skill.name}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default Hero;
