import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { withNamespaces } from "react-i18next";
function CustomModal({ showModal, setShowModal, t }) {
  return (
    <Modal
      size="md"
      show={showModal}
      onHide={() => setShowModal(false)}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header>
        {t("closeButton")}
        <Modal.Title id="example-modal-sizes-title-sm">
          {t("Large Modal")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>...</Modal.Body>
    </Modal>
  );
}
export default withNamespaces()(CustomModal);
