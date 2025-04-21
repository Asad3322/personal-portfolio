import React from 'react';
import { Link } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-4xl text-center">
        {/* 👋 Waving Emoji */}
        <h2 className="text-xl md:text-2xl text-[#38bdf8] mb-2 font-medium">
          <span className="inline-block text-2xl md:text-4xl animate-wave origin-[70%_70%]">👋</span>{" "}
          Hi, my name is
        </h2>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Muhammad Asad</h1>

        {/* Typing Animation */}
        <TypeAnimation
          sequence={[
            "I'm a Full Stack Developer",
            2000,
            "I'm a MERN Stack Expert",
            2000,
            "I'm a React.js Specialist",
            2000,
          ]}
          wrapper="h3"
          speed={50}
          className="text-2xl md:text-3xl text-gray-300 mb-6"
          repeat={Infinity}
        />

        {/* Call to Action Button */}
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-tr from-[#38bdf8] to-[#0ea5e9] text-black font-semibold rounded-full shadow-lg hover:scale-105 hover:from-[#0ea5e9] hover:to-[#38bdf8] transition-all duration-300 cursor-pointer"
        >
          View Projects <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Home;
