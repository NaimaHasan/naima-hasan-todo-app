import React from "react";
import { useState } from "react";
import { Filter } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

export const FilterBar = () => {
  const filterOptions = [
    "High Priority",
    "Medium Priority",
    "Low Priority",
    "Pending",
    "In Progress",
    "Completed",
    "Default",
  ];
  const [value, setValue] = useState("Default");

  const handleChange = (val) => {
    setValue(val);
  };
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
              backgroundColor: option == value ? "#bbb" : "#ddd",
              color: "#000",
              border: "none",
              padding: "10px 20px",
            }}
            onClick={() => setValue(option)}
          >
            {option}
          </Button>
        </div>
      ))}
      <div
        style={{
          position: "absolute",
          right: "160px",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px"
        }}
      >
        + Add Item
      </div>
    </div>
  );
};

//  <div style={{ display: "flex", alignItems: "center" }}>
// {filterOptions.map((option, index) => (
//   <div key={index} style={{paddingRight: "30px", paddingBottom: "30px"}}>
//     <Button style={{ borderRadius: "20px" }}>
//       {option}
//     </Button>
//   </div>
// ))}
// </div>

{
  /* <ToggleButtonGroup
  type="checkbox"
  value={value}
  onChange={handleChange}
  style={{ paddingBottom: "20px" }}
>
  {filterOptions.map((option, index) => (
    <ToggleButton
      id={index}
      value={option}
      style={{
        margin: "20px",
        borderRadius: "20px",
        backgroundColor: "#ecf0f7",
        color: "#000000",
        border: "none",
      }}
    >
      {option}
    </ToggleButton>
  ))}
</ToggleButtonGroup>; */
}
