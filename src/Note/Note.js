import React from "react";
import { NoteCard } from "./NoteCard";

export const Note = ({ notes, updateNote, deleteNote }) => {
  return (
    <div>
      <div className="row">
        {notes.map((note, index) => (
          <div key={index} className="col-md-3 mb-4">
            <NoteCard note = {note} updateNote = {updateNote} deleteNote = {deleteNote} />
          </div> 
        ))}
      </div>
    </div>
  );
};
