import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0a192f] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8 border-b-2 border-[#38bdf8] inline-block">
          Contact Me
        </h2>
        <p className="text-gray-300 mb-12 text-lg">
          Have a question, project idea, or want to collaborate? Drop me a message below 👇
        </p>

        <form
          action="https://formspree.io/f/xblorkza"
          method="POST"
          className="grid grid-cols-1 gap-6 max-w-2xl mx-auto text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-tr from-[#38bdf8] to-[#0ea5e9] text-black py-3 px-6 rounded font-semibold hover:scale-105 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
