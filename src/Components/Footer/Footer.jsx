// import React from "react";
// import Marquee from "react-fast-marquee";

// const Footer = () => {
//   const skills = [
//     { name: "HTML", src: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
//     { name: "CSS", src: "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000" },
//     { name: "JavaScript", src: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000" },
//     { name: "React", src: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000" },
//     { name: "Tailwind", src: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" },
//     { name: "Git", src: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000" },
//     { name: "Github", src: "https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000" },
//     { name: "Figma", src: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000" },
//     { name: "Firebase", src: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000" },
//     { name: "Python", src: "https://img.icons8.com/?size=100&id=YX03OUiHE3rz&format=png&color=000000" },
//     { name: "C++", src: "https://img.icons8.com/?size=100&id=40669&format=png&color=000000" },
//   ];

//   return (
//     <footer className="bg-black text-white py-10 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* অন্যান্য ফুটার কনটেন্ট */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold mb-4">My Skills</h2>
//           <Marquee pauseOnHover={true} speed={50} gradient={false}>
//             {skills.map((skill, index) => (
//               <div key={index} className="mx-6 text-center">
//                 <img
//                   src={skill.src}
//                   alt={skill.name}
//                   className="h-16 w-16 object-contain mx-auto"
//                 />
//                 <p className="text-white mt-2 text-sm">{skill.name}</p>
//               </div>
//             ))}
//           </Marquee>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
