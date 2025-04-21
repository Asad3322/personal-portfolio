import React from "react";
import profileImg from "../components/assets/Asad.jpg";

const About = () => {
  return (
    <section id="about" className="bg-[#0a192f] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative group">
            <div className="rounded-2xl p-1 bg-gradient-to-tr from-[#38bdf8] to-[#0ea5e9] shadow-lg">
              <img
                src={profileImg}
                alt="Muhammad Asad"
                className="w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover border-4 border-[#0a192f] transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-6 relative inline-block after:block after:w-20 after:h-1 after:bg-[#38bdf8] after:mt-2">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m <span className="text-[#38bdf8] font-medium">Muhammad Asad</span> — a
            dedicated Full Stack Developer specializing in the MERN Stack
            (MongoDB, Express.js, React.js, Node.js). My passion is building
            elegant, performant web apps that offer real-world value.
            <br /><br />
            From creating e-commerce platforms like <span className="text-[#38bdf8]">ShopHub</span>
            to professional service websites like the Barber Shop project, I’m
            always driven by clean design, problem-solving, and learning new technologies.
            <br /><br />
            Let’s build something amazing together. 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default About
