import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import { SearchOutlined } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://i.gyazo.com/7c7d85201407066d8b5b06890d3d54f6.png" />
        <div className="sidebar__header__right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__search__container">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat={true} />
        <SidebarChat addNewChat={false} />
        <SidebarChat addNewChat={false} />
        <SidebarChat addNewChat={false} />
      </div>
    </div>
  );
}

export default Sidebar;
