import React from "react";
import "./TopBar.css";
import { ListTask } from "react-bootstrap-icons";
import { SideBar } from "../SideBar/SideBar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState, useEffect } from "react";

export const TopBar = ({ sorting, setSorting, sortOrder, setSortOrder }) => {
  const [show, setShow] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="topbar">
      {screenWidth > 900 ? (
        <></>
      ) : (
        <ListTask color="Black" size={35} onClick={handleShow} />
      )}
      <Offcanvas show={show} onHide={handleClose} style={{ width: "300px" }}>
        <div className="sidetopbar">
          <Offcanvas.Header closeButton>
            <div
              style={{
                fontSize: "26px",
                paddingLeft: "10px",
                paddingRight: "55px",
              }}
            >
              To Do List
            </div>
          </Offcanvas.Header>
        </div>

        <Offcanvas.Body>
          <SideBar
            sorting={sorting}
            setSorting={setSorting}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
        </Offcanvas.Body>
      </Offcanvas>
      <div style={{ fontSize: "26px", paddingLeft: "30px" }}>To Do List</div>
    </div>
  );
};
