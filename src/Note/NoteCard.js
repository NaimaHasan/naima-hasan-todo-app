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
  const [isHoveredDelete, setIsHoveredDelete] = useState(false);
  const [isHoveredStatus, setIsHoveredStatus] = useState(false);

  return (
    <div style={{ paddingBottom: "30px" }}>
      <Card
        style={{
          width: "19rem",
          height: "20rem",
          position: "relative",
          paddingLeft: "20px",
          paddingTop: "10px",
          backgroundColor: "#f0f7f7",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "20px",
            top: "20px",
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
            <div style={{ paddingBottom: "15px", paddingTop: "5px" }}>
              <Button
                variant="light"
                className={isHoveredStatus ? "icon-hover" : ""}
                onMouseEnter={() => setIsHoveredStatus(true)}
                onMouseLeave={() => setIsHoveredStatus(false)}
                style={{
                  borderRadius: "25px",
                  backgroundColor: isHoveredStatus ? "#bbb" : "#ddd",
                  border: "none",
                  padding: "5px 10px",
                  fontSize: "12px",
                }}
                onClick={() => {
                  let newStatus;
                  switch (note.status) {
                    case "Pending":
                      newStatus = "In Progress";
                      break;
                    case "In Progress":
                      newStatus = "Completed";
                      break;
                    case "Completed":
                      newStatus = "Pending";
                      break;
                    default:
                      newStatus = "Pending";
                  }
                  updateNote({
                    ...note,
                    status: newStatus,
                    updatedAt: new Date().toISOString(),
                  });
                }}
              >
                Status: {note.status}
              </Button>
            </div>

            <h6>Description</h6>
            <div
              style={{
                maxHeight: "110px",
                overflowY: "auto",
                scrollbarWidth: "thin",
                scrollbarColor: "lightgrey transparent",
                paddingTop: "5px",
              }}
            >
              {note.desc}
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 20,
              }}
            >
              <div style={{ fontSize: "12px" }}>
                Last Updated:{" "}
                {new Date(note.updatedAt).toLocaleString("en-US", {
                  month: "short",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </div>{" "}
              <div style={{ fontSize: "12px" }}>
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
              right: "20px",
              bottom: "20px",
              width: "20px",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Trash
              size={20}
              onClick={() => deleteNote(note.id)}
              className={isHoveredDelete ? "icon-hover" : ""}
              style={{ color: isHoveredDelete ? "red" : "inherit" }}
              onMouseEnter={() => setIsHoveredDelete(true)}
              onMouseLeave={() => setIsHoveredDelete(false)}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
