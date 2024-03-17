import React from "react";
import { useState } from "react";
import { Filter } from "react-bootstrap-icons";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

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
  const [value, setValue] = useState([]);
  const handleChange = (val) => setValue(val);
  return (
    <div>
      <Filter size={50} style={{paddingBottom: "20px"}} />

      <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
        {filterOptions.map((option, index) => (
          <div
            key={index}
            style={{ paddingBottom: "20px" }}
          >
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
          </div>
        ))}
      </ToggleButtonGroup>
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
