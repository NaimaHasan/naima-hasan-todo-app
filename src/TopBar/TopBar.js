import React from "react";
import "./TopBar.css";
import { ListTask } from "react-bootstrap-icons";

export const TopBar = () => {
  return (
    <div className="topbar">
      <ListTask color="Black" size={35} />
      <div style={{fontSize:"26px", paddingLeft:"30px"}}>To Do List</div>
    </div>
  );
};
