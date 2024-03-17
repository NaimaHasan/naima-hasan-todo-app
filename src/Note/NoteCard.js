import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Trash, Pencil } from "react-bootstrap-icons";

export const NoteCard = ({note, updateNote, deleteNote}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <Card
        style={{ width: "18rem", position: "relative", paddingLeft: "10px" }}
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
            backgroundColor: "#F07070",
          }}
        ></div>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          
          <Card.Text>
            <div>
            Status: {note.status} <br />
            </div>
            
            {note.desc} <br />
            Last Updated: {note.updatedAt} <br />
            Creation Date: {note.createdAt}
          </Card.Text>
          <Trash
            color="red"
            size={20}
            onClick={() => deleteNote(note.id)}
            className={isHovered ? "icon-hover" : ""}
            style={{ color: isHovered ? "blue" : "inherit" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </Card.Body>
      </Card>
    </div>
  );
};
