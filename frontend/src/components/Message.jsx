import PropTypes from "prop-types";
import moment from "moment";
import Markdown from "./Markdown";
import Krishna from "../assets/krishna.png";
import Avatar from "../assets/boy.png";
import { useState } from "react";
import { FaRegClipboard } from "react-icons/fa";
import { GrCheckmark } from "react-icons/gr";

/**
 * A chat message component that displays a message with a timestamp and an icon.
 *
 * @param {Object} props - The properties for the component.
 */
const Message = (props) => {
  const { id, createdAt, text, ai = false, selected } = props.message;
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds
  };

  return (
    <div
      key={id}
      className={`flex items-end my-2 gap-2 ${
        ai ? "flex-row-reverse justify-end mr-4" : "flex-row justify-end ml-4"
      }`}
    >
      <div
        className={` 
       overflow-hidden rounded-md p-2 
        ${
          ai
            ? "chat-start bg-orange-200 md:mr-24 dark:bg-gray-600"
            : "chat-end bg-orange-300 dark:bg-gray-700"
        }`}
      >
        <div className="chat-bubble">
          <Markdown markdownText={text} />
          {ai && (
            <>
              <br />
              <small className="flex">
                Note: The answer may not be factually correct. Please do your
                own research before taking any action.
                {isCopied && (
                  <span className="text-black-500 ml-1 items-center flex gap-1">
                    <GrCheckmark />
                    Copied!
                  </span>
                )}
                {!isCopied && (
                  <span
                    className="text-black-500 cursor-pointer ml-1 flex items-center gap-1"
                    onClick={handleCopyClick}
                  >
                    <FaRegClipboard />
                    Copy
                  </span>
                )}
              </small>
            </>
          )}
          <div className={`${ai ? "text-left" : "text-right"} text-xs`}>
            {moment(createdAt).calendar()}
          </div>
        </div>
      </div>

      <div className="avatar">
        <div className="w-8 border rounded-full border-slate-400">
          {ai ? (
            <img
              src={Krishna}
              className="w-6 h-full m-auto"
              alt="Krishna avatar"
            />
          ) : (
            <img src={Avatar} className="w-6 h-full m-auto" alt="User avatar" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    createdAt: PropTypes.number.isRequired,
    text: PropTypes.string,
    ai: PropTypes.bool,
    selected: PropTypes.string,
  }).isRequired,
};
