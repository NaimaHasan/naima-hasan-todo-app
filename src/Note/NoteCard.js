import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { NoteForm } from "../NoteForm/NoteForm";
import { Button } from "react-bootstrap";

export const NoteCard = ({ note, updateNote, deleteNote }) => {
  const priorityColors = {
    Medium: "#FFA825",
    Low: "#A8F070",
    High: "#F07070",
  };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ paddingBottom: "30px" }}>
      <Card
        style={{
          width: "19rem",
          height: "19rem",
          position: "relative",
          paddingLeft: "10px",
          backgroundColor: "#ecf0f7",
        }}
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
          <NoteForm
            submitNote={updateNote}
            defaultNote={note}
            label={"Update"}
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
            <div style={{paddingBottom: "15px"}}>
            <Button
              style={{
                borderRadius: "25px",
                backgroundColor: "#fff",
                color: "#000",
                border: "none",
                padding: "5px 10px",
                fontSize: "12px",
              }}
            >
              Status: {note.status}
            </Button>
            </div>
            
            <h6>Description</h6>
            <div
              style={{
                maxHeight: "120px",
                overflowY: "auto",
                scrollbarWidth: "thin",
                scrollbarColor: "lightgrey transparent",
                paddingTop: "10px",
              }}
            >
              {note.desc}
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 10,
              }}
            >
              <div style={{fontSize:"12px"}}>
                Last Updated:{" "}
                {new Date(note.updatedAt).toLocaleString("en-US", {
                  month: "short",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </div>{" "}
              <div style={{fontSize:"12px"}}>
                Creation Date:{" "}
                {new Date(note.createdAt).toLocaleString("en-US", {
                  month: "short",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </div>
            </div>
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
