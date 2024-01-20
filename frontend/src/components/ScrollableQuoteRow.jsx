import React, { useState } from "react";

const ScrollableQuoteRow = ({ setFormValue }) => {
  const sentences = [
    "Meaning of Dharma?",
    "How to find inner peace?",
    "What is the meaning of life?",
    "How to handle breakups?",
    "How can I be a better person?",
    "How can I be a better friend?",
  ];

  const handleParagraphClick = (sentence) => {
    // Set the form value when a paragraph is clicked
    setFormValue(sentence);
  };

  return (
    <div className="flex gap-2 overflow-x-auto max-w-full pt-2 scrollbar-none ">
      {sentences.map((sentence, index) => (
        <p
          key={index}
          className="whitespace-nowrap pr-4 rounded-full bg-purple-200 p-2 cursor-pointer dark:bg-gray-600 dark:hover:bg-gray-700"
          onClick={() => handleParagraphClick(sentence)}
        >
          {sentence}
        </p>
      ))}
    </div>
  );
};

export default ScrollableQuoteRow;
