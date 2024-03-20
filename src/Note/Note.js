import React from "react";
import { NoteCard } from "./NoteCard";

export const Note = ({ notes, updateNote, deleteNote }) => {
  return (
    <div>
      {notes.length === 0 ? (
        <div
          style={{
            fontSize: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <p>Note is currently empty!</p>
        </div>
      ) : (
        <div className="row">
          {notes.map((note, index) => (
            <div key={index} className="col mb-4 d-flex justify-content-center">
              <NoteCard
                note={note}
                updateNote={updateNote}
                deleteNote={deleteNote}
              />
            </div>
          ))}

          <div className={`col-${12 - (notes.length % 4) * 3} mb-4`} />
        </div>
      )}
    </div>
  );
};