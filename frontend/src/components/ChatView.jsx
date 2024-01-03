import React, { useState, useRef, useEffect, useContext } from "react";
import { MdSend } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Rolling from "../assets/Rolling.gif";
import { replaceProfanities } from "no-profanity";
import Thinking from "./Thinking";
import Modal from "./Modal";
import axios from "axios";
import Message from "./Message";
import { ChatContext } from "../Context/chatContext";
import ScrollableQuoteRow from "./ScrollableQuoteRow";

const template = [
  {
    title: "Know Life Purpose",
    prompt: "What is life's purpose?",
  },
  {
    title: "Ask Any Verse",
    prompt: "Please explain Chapter 12 Verse 13.",
  },
  {
    title: "Any Question Related to Bhagavad Gita",
    prompt: "What is Karma Yoga?",
  },
  {
    title: "Know More About Gita",
    prompt: "What is gita? Give one sloke from gita.",
  },
];

const ChatView = () => {
  const messagesEndRef = useRef();
  const inputRef = useRef();
  const [formValue, setFormValue] = useState("");
  const [thinking, setThinking] = useState(false);
  const [messages, addMessage] = useContext(ChatContext);
  const [modalOpen, setModalOpen] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const updateMessage = (newValue, ai = false) => {
    const id = Date.now() + Math.floor(Math.random() * 1000000);
    const newMsg = {
      id: id,
      createdAt: Date.now(),
      text: newValue,
      ai: ai,
    };
    addMessage(newMsg);
  };

  const callChatAPI = async (formValue) => {
    try {
      console.log("api called", formValue);
      const response = await axios.post("http://localhost:5000/api", {
        formValue,
      });
      return response.data;
    } catch (error) {
      console.error("Error sending data:", error);
      //     // Handle error as needed
      return null;
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const cleanPrompt = replaceProfanities(formValue);
    setThinking(true);
    setFormValue("");
    updateMessage(cleanPrompt, false);

    const response = await callChatAPI(formValue);
    console.log(response);
    if (response) {
      updateMessage(response, true);
    }

    setThinking(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage(e);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, thinking]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <main className="relative flex flex-col h-screen p-1 overflow-hidden ">
      <div className="flex items-center justify-center h-1/5">
        <h1 className="text-4xl font-bold">GitaGPT</h1>
      </div>

      <section className="flex flex-col flex-grow w-full overflow-y-scroll sm:px-5 md:px-32">
        {messages && messages.length ? (
          messages.map((message, index) => (
            <Message key={index} message={{ ...message }} />
          ))
        ) : (
          <div className="flex my-2">
            <div className="w-screen overflow-hidden">
              <ul className="grid grid-cols-2 gap-2 mx-10">
                {template.map((item, index) => (
                  <li
                    onClick={() => setFormValue(item.prompt)}
                    key={index}
                    className="p-6 border rounded-lg border-slate-300 bg-orange-50 hover:border-slate-500"
                  >
                    <p className="text-base font-semibold">{item.title}</p>
                    <p className="text-sm">{item.prompt}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {thinking && <Thinking />}

        <span ref={messagesEndRef}></span>
      </section>
      <div className="flex flex-col px-5 mb-2 md:px-32 select-none">
        <ScrollableQuoteRow setFormValue={setFormValue} />
        <form
          className="flex flex-col mb-2 md:px-32 join sm:flex-row "
          onSubmit={sendMessage}
        >
          <div className="flex items-stretch justify-between w-full gap-2 ">
            <span className="join-item pt-2">
              <FaMicrophone size={30} />
            </span>
            <textarea
              ref={inputRef}
              className="w-full grow input-bordered join-item rounded-md border border-slate-300 bg-orange-50 hover:border-slate-500 "
              value={formValue}
              onKeyDown={handleKeyDown}
              onChange={(e) => setFormValue(e.target.value)}
            />
            <button
              type="submit"
              className="join-item btn"
              disabled={!formValue}
            >
              {!thinking && <MdSend size={30} />}
              {thinking && (
                // <img src={Rolling} alt="" className="w-8 h-8" />
                <AiOutlineLoading3Quarters />
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ChatView;
