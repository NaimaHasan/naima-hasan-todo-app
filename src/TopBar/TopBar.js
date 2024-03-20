import React from "react";
import "./TopBar.css";
import { ListTask } from "react-bootstrap-icons";
import { SideBar } from "../SideBar/SideBar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState, useEffect } from "react";
import { NoteForm } from "../NoteForm/NoteForm";
import Form from "react-bootstrap/Form";

export const TopBar = ({
  sorting,
  setSorting,
  sortOrder,
  setSortOrder,
  addNote,
}) => {
  const [show, setShow] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isHoveredList, setIsHoveredList] = useState(false);

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
        <ListTask
          size={35}
          onClick={handleShow}
          className={isHoveredList ? "icon-hover" : ""}
          onMouseEnter={() => setIsHoveredList(true)}
          onMouseLeave={() => setIsHoveredList(false)}
          style={{ color: isHoveredList ? "#777" : "inherit" }}
        />
      )}
      <Offcanvas
        show={show}
        onHide={handleClose}
        style={{ width: "300px" }}
        backdrop={false}
      >
        <div className="sidetopbar">
          <Offcanvas.Header closeButton>
            <div
              style={{
                fontSize: "26px",
                paddingLeft: "5px",
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
      <div style={{ fontSize: "22px", paddingLeft: "30px" }}>To Do List</div>
      <div
        style={{
          marginLeft: "auto",
          flex: "0 0 auto",
          paddingRight: "10px",
        }}
      >
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Search" />
          </Form.Group>
        </Form>
      </div>
      <div
        style={{
          marginLeft: "auto",
          fontSize: "20px",
          flex: "0 0 auto",
          paddingRight: "10px",
        }}
      >
        <NoteForm submitNote={addNote} label={"Add"} />
      </div>
    </div>
  );
};
