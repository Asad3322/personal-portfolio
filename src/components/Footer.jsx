import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-center text-gray-400 py-6 border-t border-gray-700 mt-10">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Muhammad Asad. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
