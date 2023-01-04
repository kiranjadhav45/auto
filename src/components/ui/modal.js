import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function CustomModal({ showModal, setShowModal }) {
  return (
    <Modal
      size="md"
      show={showModal}
      onHide={() => setShowModal(false)}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">Large Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>...</Modal.Body>
    </Modal>
  );
}

export default CustomModal;
