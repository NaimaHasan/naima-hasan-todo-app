import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const FormModal = ({
  title,
  onClose,
  showModal,
  submit,
  reset,
  children,
}) => {
  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title} Note</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: "20px" }}>{children}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={reset}
          style={{
            padding: "6px 18px",
            marginRight: "15px",
            borderRadius: "15px",
            backgroundColor: "#D9E5F6",
            color: "black",
            borderColor: "transparent",
          }}
        >
          Clear
        </Button>
        <Button
          variant="primary"
          onClick={submit}
          style={{
            padding: "6px 18px",
            borderRadius: "15px",
            backgroundColor: "#D9E5F6",
            color: "black",
            borderColor: "transparent",
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
