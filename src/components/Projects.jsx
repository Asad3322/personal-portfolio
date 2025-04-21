import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "ShopHub – Ecommerce Website",
    description:
      "A full-featured ecommerce web app built with the MERN Stack including admin dashboard, product management, cart, deals, and new arrivals.",
    github: "https://github.com/Asad3322/ShopHub",
  },
  {
    title: "Barber Shop Website",
    description:
      "A modern responsive website for a barber shop built with Node.js, Express, HTML, CSS, Bootstrap, and React. Includes service booking and image gallery.",
    github: "https://github.com/Asad3322/barber-shop-website",
  },
  {
    title: "Personal Portfolio",
    description:
      "My personal portfolio website built using React and Tailwind CSS. Smooth scroll, modern design, responsive sections including skills, projects, and contact.",
    github: "https://github.com/Asad3322/personal-portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0a192f] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12 border-b-2 border-[#38bdf8] inline-block">
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-[#38bdf8] transition duration-300 text-left"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#38bdf8] font-medium hover:underline"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
