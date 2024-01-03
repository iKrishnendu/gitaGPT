import React from "react";
// import Message from "../components/Message";
import ChatView from "../components/ChatView";
import SideBar from "../components/SideBar";

const Chat = () => {
  return (
    <div className="flex transition duration-500 ease-in-out">
      <SideBar />
      <ChatView />
    </div>
  );
};

export default Chat;
