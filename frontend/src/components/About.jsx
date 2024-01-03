import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to GitaGPT!</h1>
      <p className="text-lg mb-8">
        Explore the wisdom of the Bhagavad Gita with GitaGPT.
      </p>
      <Link
        to="/chat"
        className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        Start Chat
      </Link>
    </div>
  );
};

export default About;
