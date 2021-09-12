import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./SidebarChat.css";

function SidebarChat(props) {
  const [seed, setSeed] = useState("a23");

  useEffect(() => {
    setSeed(Math.random());
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
    }
  };

  return !props.addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
