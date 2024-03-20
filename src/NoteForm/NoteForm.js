import React, { useState, useEffect } from "react";
import { uid } from "uid";
import { Input } from "./Input";
import { Select } from "./Select";
import { FormModal } from "./Modal";
import { Pencil, PlusCircleFill } from "react-bootstrap-icons";
import { useHotkeys } from 'react-hotkeys-hook';

export const NoteForm = ({ submitNote, defaultNote, label }) => {
  const [note, setNote] = useState({});
  const [resetCounter, setResetCounter] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => reset(), []);

  const reset = () => {
    setNote(
      defaultNote
        ? defaultNote
        : {
            id: uid(),
            title: "Default Name",
            desc: "",
            priority: "Low",
            status: "Pending",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          }
    );
    setResetCounter(resetCounter + 1);
  };
  
  const onChangeHandler = (e) => {
    switch (e.target.name) {
      case "title":
        setNote({ ...note, title: e.target.value });
        break;
      case "desc":
        setNote({ ...note, desc: e.target.value });
        break;
      case "priority":
        setNote({ ...note, priority: e.target.value });
        break;
      case "status":
        setNote({ ...note, status: e.target.value });
        break;
      default:
        break;
    }
  };

  const submit = (e) => {
    submitNote({
      ...note,
      updatedAt: new Date().toISOString(),
    });
    reset();
    setShowModal(false);
  };

  return (
    <React.Fragment>
      {label === "Update" ? (
        <Pencil
          size={20}
          onClick={() => {
            setShowModal(true);
            reset();
          }}
          className={isHovered ? "icon-hover" : ""}
          style={{ color: isHovered ? "blue" : "inherit" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      ) : (
        <PlusCircleFill
        size={55}
          onClick={() => setShowModal(true)}
          style={{
            color: isHovered ? "#444" : "#aaa",
            border: "None",
            backgroundColor: "transparent",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
        </PlusCircleFill>
      )}
      <FormModal
        title={label}
        showModal={showModal}
        onClose={() => setShowModal(false)}
        submit={submit}
        reset={reset}
      >
        <form>
          <Input
            label={"Title"}
            fieldName="title"
            onChangeHandler={onChangeHandler}
            defaultValue={note.title}
            resetCounter={resetCounter}
          />
          <Input
            label={"Description"}
            fieldName="desc"
            onChangeHandler={onChangeHandler}
            defaultValue={note.desc}
            resetCounter={resetCounter}
          />
          <Select
            label="Priority"
            fieldName="priority"
            defaultValue={note.priority}
            onChange={onChangeHandler}
            options={["High", "Medium", "Low"]}
            resetCounter={resetCounter}
          />
          <Select
            label="Status"
            fieldName="status"
            defaultValue={note.status}
            onChange={onChangeHandler}
            options={["Pending", "In Progress", "Completed"]}
            resetCounter={resetCounter}
          />
        </form>
      </FormModal>
    </React.Fragment>
  );
};