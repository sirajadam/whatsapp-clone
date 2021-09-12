import React from "react";
import "./Message.css";

function Message(props) {
  const hours = new Date().getHours();
  const min = new Date().getMinutes();

  return (
    <p className={`chat__message ${props.receiver ? "chat__receiver" : ""}`}>
      <span className="chat__name">{props.name}</span>
      {props.message}
      <span className="chat__timestamp">{`${hours}:${min}`}</span>
    </p>
  );
}

export default Message;
