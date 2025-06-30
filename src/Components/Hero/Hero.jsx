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
  ];

  return (
    <div className="w-11/12 mx-auto">
      {/* Hero Section */}
      <section className="bg-black text-white py-14 md:py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
              Jannatul Lima
            </h1>
            <p className="text-gray-400 mb-5 leading-relaxed text-base sm:text-lg md:text-xl">
              I specialize in crafting responsive and user-friendly web
              interfaces using <br className="hidden sm:block" />
              React and Tailwind CSS. Let's collaborate to bring your ideas to
              life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded shadow-lg shadow-green-500/40 transition text-sm sm:text-base"
              >
                <span>Contact Me</span>
                <img src={callIcon} alt="Contact Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
              </NavLink>

              <a
                href="/Lima.pdf"
                download
                className="inline-flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded shadow-lg shadow-green-500/40 transition text-sm sm:text-base"
              >
                <span>Download CV</span>
                <img src={downloadIcon} alt="Download Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt="Hero Illustration"
              className="w-60 sm:w-72 md:w-96 lg:w-[500px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Skills Marquee */}
      <section className="bg-black text-white py-8 md:py-10">
        <div className="w-full mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">My Skills</h2>
          <Marquee pauseOnHover={true} speed={50} gradient={false}>
            {skills.map((skill, index) => (
              <div key={index} className="mx-4 sm:mx-6 text-center">
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="h-12 w-12 sm:h-16 sm:w-16 object-contain mx-auto"
                />
                <p className="text-white mt-1 sm:mt-2 text-xs sm:text-sm">{skill.name}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default Hero;