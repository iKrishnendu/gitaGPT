import React from "react";

const Error = () => {
  const quotes = [
    "Oops! Something went wrong.",
    "Looks like there's an issue.",
    "Error 404: Page not found.",
    "Don't worry, our developers are on it.",
    "We're sorry, but something went awry.",
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-4xl font-bold text-red-500 mb-4">
        {getRandomQuote()}
      </div>
      <img
        src="https://i.pinimg.com/originals/bd/df/d6/bddfd6e4434f42662b009295c9bab86e.gif" // Replace with your own GIF URL
        alt="Error Illustration"
        className="max-w-sm w-full my-8 rounded-full"
      />
      <p className="text-lg text-gray-700">
        It seems there's an issue. Please try again later.
      </p>
    </div>
  );
};

export default Error;
