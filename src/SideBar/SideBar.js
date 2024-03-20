import React from "react";
import "./SideBar.css";
import { Form } from "react-bootstrap";

export const SideBar = ({ sorting, setSorting, sortOrder, setSortOrder }) => {
  const priorities = ["High", "Medium", "Low"];

  const priorityColors = {
    Medium: "#FFA825",
    Low: "#A8F070",
    High: "#F07070",
  };

  const sortingOptions = ["Priority", "Creation Date", "Update Date", "Name"];

  const sortingOrder = ["Ascending", "Descending"];

  return (
    <div className="sidebar">
      <div className="heading" style={{ paddingTop: "60px" }}>
        {" "}
        Priority{" "}
      </div>
      {priorities.map((option, index) => (
        <div className="priority-box">
          <div
            className="box"
            style={{ backgroundColor: priorityColors[option] }}
          ></div>
          <span className="text">{option}</span>
        </div>
      ))}

      <div className="horizontalBar" />
      <div className="heading">Sort By</div>
      <div style={{ paddingLeft: "70px", fontSize: "18px" }}>
        {sortingOptions.map((option, index) => (
          <Form.Check
            type="radio"
            id={"flexRadioDefault_" + index}
            label={option}
            style={{ marginBottom: "10px"}}
            checked={sorting === option}
            color="black"
            onClick={() => {
              setSorting(option);
            }}
          />
        ))}
      </div>

      <div className="horizontalBar" />
      <div className="heading">Order</div>
      <div style={{ paddingLeft: "70px", fontSize: "18px" }}>
        {sortingOrder.map((option, index) => (
          <Form.Check
            type="radio"
            id={"flexRadioDefault2_" + index}
            label={option}
            style={{ marginBottom: "10px" }}
            checked={sortOrder === option}
            onClick={() => {
              setSortOrder(option);
            }}
          />
        ))}
      </div>
    </div>
  );
};
