import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0a192f] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12 border-b-2 border-[#38bdf8] inline-block">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-[#1e293b] p-6 rounded-lg shadow-md hover:shadow-[#38bdf8] transition duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p className="text-white font-medium text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
