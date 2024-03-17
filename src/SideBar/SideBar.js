import React from "react";
import "./SideBar.css";
import { Form } from "react-bootstrap";

export const SideBar = () => {
  const priorityColors = {
    Medium: "#FFA825",
    Low: "#A8F070",
    High: "#F07070",
  };
  return (
    <div className="sidebar">
      <div className="heading"> Priority </div>
      <div className="priority-box">
        <div
          className="box"
          style={{ backgroundColor: priorityColors["High"] }}
        ></div>
        <span className="text">High</span>
      </div>

      <div className="priority-box">
        <div
          className="box"
          style={{ backgroundColor: priorityColors["Medium"] }}
        ></div>
        <span className="text">Medium</span>
      </div>

      <div className="priority-box">
        <div
          className="box"
          style={{ backgroundColor: priorityColors["Low"] }}
        ></div>
        <span className="text">Low</span>
      </div>

      <div className="horizontalBar" />
      <div className="heading">Sort By</div>
      <div style={{ paddingLeft: "50px", fontSize: "18px" }}>
        <Form.Check
          type="radio"
          id="flexRadioDefault1"
          label="Priority"
          style={{ marginBottom: "10px" }}
        />
        <Form.Check
          type="radio"
          id="flexRadioDefault2"
          label="Creation Date"
          style={{ marginBottom: "10px" }}
        />
        <Form.Check
          type="radio"
          id="flexRadioDefault2"
          label="Update Date"
          checked
          style={{ marginBottom: "10px" }}
        />
        <Form.Check type="radio" id="flexRadioDefault2" label="Name" />
      </div>

      <div className="horizontalBar" />
      <div className="heading">Order</div>
      <div style={{ paddingLeft: "50px", fontSize: "18px" }}>
        <Form.Check
          type="radio"
          id="flexRadioDefault1"
          label="Ascending"
          checked
          style={{ marginBottom: "10px" }}
        />
        <Form.Check type="radio" id="flexRadioDefault2" label="Descending" />
      </div>
    </div>
  );
};
