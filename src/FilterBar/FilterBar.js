import React from "react";
import { Button } from "react-bootstrap";

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
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
          {filterOptions.map((option, index) => (
            <div key={index} style={{ paddingRight: "25px", paddingBottom: "10px", flex: "0 0 auto" }}>
              <Button
                style={{
                  fontSize: "16px",
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
        </div>
      </div>
    </div>
  );
};
