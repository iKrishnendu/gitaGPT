import { useState, useEffect, useContext } from "react";
import {
  MdClose,
  MdMenu,
  MdOutlineCoffee,
  MdOutlineVpnKey,
  MdDelete,
  MdInfo,
} from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import { ChatContext } from "../Context/chatContext";
// import bot from "../assets/logo.svg";
import ToggleTheme from "./ToggleTheme";
// import Modal from "./Modal";
// import Setting from "./Setting";

import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";
import ToggleSound from "./ToggleSound";
import { Link } from "react-router-dom";

/**
 * A sidebar component that displays a list of nav items and a toggle
 * for switching between light and dark modes.
 *
 * @param {Object} props - The properties for the component.
 */
const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [, , clearChat] = useContext(ChatContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  function handleResize() {
    window.innerWidth <= 720 ? setOpen(false) : setOpen(true);
  }

  useEffect(() => {
    handleResize();
  }, []);

  function clear() {
    clearChat();
  }

  const toggleSound = () => {
    console.log("Toggle sound");
    setSoundOn((prevSound) => {
      console.log("Previous sound state:", prevSound);
      return !prevSound;
    });
  };

  return (
    <section
      className={`${
        open ? "w-52" : "w-20"
      } flex flex-col items-center gap-y-4 h-screen pt-4 relative duration-100 shadow-md  bg-emerald-100`}
    >
      <div className="flex items-center justify-between w-full px-2 mx-auto">
        <div
          className={` ${
            !open && "scale-0 hidden"
          } flex flex-row items-center gap-2 mx-auto w-full`}
        >
          {/* <img src={bot} alt="logo" className="w-6 h-6" /> */}
          <Link to="/" className={`font-semibold ${!open && "scale-0 hidden"}`}>
            GitaGPT
          </Link>
        </div>
        <div className="mx-auto " onClick={() => setOpen(!open)}>
          {open ? (
            <MdClose
              className="hover:bg-red-300 border  border-gray-500 rounded-md duration-500"
              size={25}
            />
          ) : (
            <MdMenu size={25} />
          )}
        </div>
      </div>

      <ul className="w-full menu rounded-box">
        <li>
          <span
            className={`border border-black flex items-center gap-2 bg-red-300 hover:bg-red-400 duration-500 p-1 py-2 cursor-pointer ${
              !open && "justify-center "
            }`}
            onClick={clear}
          >
            <MdDelete size={25} />
            <p className={`${!open && "hidden"}`}>Clear Chat</p>
          </span>
        </li>
      </ul>

      <ul className="absolute bottom-0 w-full rounded-box ">
        <li className="mb-2 hover:bg-green-300 rounded-md p-2 duration-300 cursor-pointer">
          <ToggleTheme open={open} />
        </li>

        <li
          onClick={toggleSound}
          className="py-2 p-2 hover:bg-green-300 rounded-md duration-300 cursor-pointer"
        >
          <ToggleSound open={open} soundOn={soundOn} />
        </li>

        <li>
          <Link
            to="/About"
            className={`flex items-center py-2 gap-2 hover:bg-green-300 rounded-md p-2 duration-500 cursor-pointer ${
              !open && "justify-center"
            }`}
          >
            <MdInfo size={25} />
            <p className={`${!open && "hidden"}`}>About</p>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default SideBar;
