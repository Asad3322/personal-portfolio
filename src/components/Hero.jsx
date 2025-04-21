import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { FaArrowRight } from "react-icons/fa";
import profileImg from "../components/assets/Asad.jpg"; // ✅ Your image path

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0a192f] pt-24 flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div className="text-center md:text-left">
          <p className="text-[#38bdf8] text-xl md:text-2xl mb-2 font-medium">
            <span className="inline-block text-2xl md:text-4xl animate-wave origin-[70%_70%]">👋</span>{" "}
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Muhammad Asad
          </h1>

          <TypeAnimation
            sequence={[
              "I'm a Full Stack Developer",
              2000,
              "I'm a MERN Stack Developer",
              2000,
              "I'm a React.js Specialist",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-2xl md:text-3xl text-gray-300 mb-6"
            repeat={Infinity}
          />

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#38bdf8] text-black font-semibold rounded hover:bg-[#0ea5e9] transition duration-300 cursor-pointer"
          >
            View Projects <FaArrowRight />
          </Link>
        </div>

        {/* Right: Beautiful Image */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="rounded-full bg-gradient-to-tr from-[#38bdf8] to-[#0ea5e9] p-1">
              <img
                src={profileImg}
                alt="Muhammad Asad"
                className="w-72 h-72 rounded-full object-cover border-4 border-[#0a192f] shadow-xl group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
