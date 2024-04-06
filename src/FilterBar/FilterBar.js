import React from "react";
import { Button } from "react-bootstrap";
import "./FilterBar.css";

export const FilterBar = ({ filter, setFilter }) => {
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
      <div style={{ flex: "1" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {filterOptions.map((option, index) => (
            <div
              key={index}
              style={{
                paddingRight: "25px",
                paddingBottom: "10px",
                flex: "0 0 auto",
              }}
            >
              <div
                className="filter-button"
                style={{
                  backgroundColor: option === filter ? "#ccc" : "#ecf0f7",
                }}
                onClick={() => {
                  setFilter(option);
                }}
              >
                {option}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
