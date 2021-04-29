import React from "react";
import { Modal, Button } from "react-bootstrap";

const BreakModal = () => {
  return (
    <Modal show={true}>
      <Modal.Header>
        <Modal.Title>Times Up!</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          If you finished the task, click the "Start Break" button. If you need
          more time, keep working on it.
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary">
          Start Break
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BreakModal;
