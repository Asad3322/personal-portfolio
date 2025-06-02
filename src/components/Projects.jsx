import React from 'react';

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
    title: "Real-Time Chat App",
    description:
      "A real-time chat application using the MERN Stack, Socket.io, and Zustand. Includes authentication, live messaging, and online status tracking.",
    github: "https://github.com/Asad3322/Chat-app",
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
    <section id="projects" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          My <span className="text-[#00BFFF]">Projects</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6"
            >
              <h3 className="text-xl font-semibold text-[#00BFFF] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] font-medium hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
