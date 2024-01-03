import PropTypes from "prop-types";
// import { MdPerson } from "react-icons/md";
import moment from "moment";
import Markdown from "./Markdown";
import Krishna from "../assets/krishna.png";
import Avatar from "../assets/boy.png";

/**
 * A chat message component that displays a message with a timestamp and an icon.
 *
 * @param {Object} props - The properties for the component.
 */
const Message = (props) => {
  const { id, createdAt, text, ai = false, selected } = props.message;

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
        ${ai ? "chat-start bg-orange-200 md:mr-24" : "chat-end bg-orange-300"}`}
      >
        <div className="chat-bubble">
          <Markdown markdownText={text} />
          {ai && (
            <>
              <br />
              <small>
                Note: The answer may not be factually correct. Please do your
                own research before taking any action.
              </small>
            </>
          )}
          <div className={`${ai ? "text-left" : "text-right"} text-xs`}>
            {moment(createdAt).calendar()}
          </div>
        </div>
      </div>
      {/* )} */}

      <div className="avatar">
        <div className="w-8 border rounded-full border-slate-400">
          {ai ? (
            // <MdComputer className="w-6 h-full m-auto" />
            // <Krishna className="w-6 h-full m-auto" />
            <img
              src={Krishna}
              className="w-6 h-full m-auto"
              alt="Krishna avatar"
            />
          ) : (
            // <MdPerson className="w-6 h-full m-auto" />
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
