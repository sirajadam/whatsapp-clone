import { Avatar, IconButton } from "@material-ui/core";
import { InsertEmoticon, SearchOutlined } from "@material-ui/icons";
import { AttachFile, MicOutlined } from "@material-ui/icons";
import { MoreVert } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import Message from "./Message";
import "./Chat.css";

function Chat() {
  const [seed, setSeed] = useState("a23");
  const [input, setInput] = useState("");

  useEffect(() => {
    setSeed(Math.random());
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input);
  };

  const messageTextHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at 2014-12-17</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <Message
          receiver={true}
          name="Mr. Question"
          message="Hey! Have you implemented a back-end yet ?"
        />
        <Message
          receiver={false}
          name="Mr. Answer"
          message="No, not yet. I plan to do this using Go"
        />
        <Message
          receiver={true}
          name="Mr. Answer"
          message="Hmm... That's interesting. Do you mind if I ask why ?"
        />
        <Message
          receiver={false}
          name="Mr. Answer"
          message="No, not at all. I want to build applications that scale and Go seemed like the perfect choice for that"
        />
        <Message
          receiver={true}
          name="Mr. Answer"
          message="Good luck with that!"
        />
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            type="text"
            onChange={messageTextHandler}
            value={input}
            placeholder="Type a message..."
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <MicOutlined />
      </div>
    </div>
  );
}

export default Chat;
