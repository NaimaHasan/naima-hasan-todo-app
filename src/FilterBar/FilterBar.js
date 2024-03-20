import React from "react";
import { Filter } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import { NoteForm } from "../NoteForm/NoteForm";

export const FilterBar = ({ addNote, filter, setFilter }) => {
  const filterOptions = [
    "High Priority",
    "Medium Priority",
    "Low Priority",
    "Pending",
    "In Progress",
    "Completed",
    "Default",
  ];

  return (
    <div
      style={{ display: "flex", alignItems: "center", paddingBottom: "30px" }}
    >
      <Filter size={60} style={{ paddingRight: "30px" }} />
      {filterOptions.map((option, index) => (
        <div key={index} style={{ paddingRight: "30px" }}>
          <Button
            style={{
              borderRadius: "25px",
              backgroundColor: option === filter ? "#bbb" : "#ddd",
              color: "#000",
              border: "none",
              padding: "10px 20px",
            }}
            onClick={() => {
              setFilter(option);
            }}
          >
            {option}
          </Button>
        </div>
      ))}
      <div
        style={{
          position: "absolute",
          right: "140px",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
        }}
      >
        <NoteForm submitNote={addNote} label={"Add"} />
      </div>
    </div>
  );
};