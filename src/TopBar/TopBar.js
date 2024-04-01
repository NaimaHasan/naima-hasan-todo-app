import React from "react";
import "./TopBar.css";
import { ListTask } from "react-bootstrap-icons";
import { SideBar } from "../SideBar/SideBar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState, useEffect } from "react";
import { NoteForm } from "../NoteForm/NoteForm";

export const TopBar = ({
  sorting,
  setSorting,
  sortOrder,
  setSortOrder,
  addNote,
}) => {
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
        <ListTask onClick={handleShow} className="list-task-icon" />
      )}
      <Offcanvas
        show={show}
        onHide={handleClose}
        style={{ width: "250px" }}
        backdrop={false}
      >
        <div className="sidetopbar">
          <Offcanvas.Header closeButton>
            <div className="offcanvas-to-do-heading">To Do List</div>
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
      <div className="to-do-heading">To Do List</div>
      <div className="add-note-container">
        <NoteForm submitNote={addNote} label={"Add"} />
      </div>
    </div>
  );
};
