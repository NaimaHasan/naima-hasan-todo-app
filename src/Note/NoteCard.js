import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Trash, Pencil } from "react-bootstrap-icons";

export const NoteCard = ({ note, updateNote, deleteNote }) => {
  const priorityColors = {
    "Medium": "#FFA825",
    "Low": "#A8F070",
    "High": "#F07070"
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div style={{paddingBottom: "30px"}}>
      <Card
        style={{ width: "19rem", position: "relative", paddingLeft: "10px", backgroundColor: "#ecf0f7"}}
      >
        <div
          style={{
            position: "absolute",
            right: "15px",
            top: "15px",
            width: "20px",
            height: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Pencil
            color="Black"
            size={20}
            onClick={() => updateNote(note.id)}
            className={isHovered ? "icon-hover" : ""}
            style={{ color: isHovered ? "blue" : "inherit" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: "8px",
            top: 0,
            bottom: 0,
            width: "6px",
            backgroundColor: priorityColors[note.priority],
          }}
        ></div>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>

          <Card.Text>
            <div style={{ paddingTop: "2px", paddingBottom: "10px" }}>
              Status: {note.status} <br />
            </div>
            {note.desc} <br />
            <small>Last Updated: {new Date(note.updatedAt).toLocaleString('en-US', { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true })}</small> <br />
            <small>Creation Date: {new Date(note.createdAt).toLocaleString('en-US', { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true })}</small>
          </Card.Text>
          <div
            style={{
              position: "absolute",
              right: "15px",
              bottom: "15px",
              width: "20px",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Trash
              color="red"
              size={20}
              onClick={() => deleteNote(note.id)}
              className={isHovered ? "icon-hover" : ""}
              style={{ color: isHovered ? "blue" : "inherit" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
