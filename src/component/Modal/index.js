import { Modal, ModalBody } from "reactstrap";
import React from "react";

export default function ModalDialog({ isOpen, children, ...props }) {
  return (
    <div>
      <Modal
        {...props}
        className="modal-info"
        centered
        isOpen={isOpen}
        backdrop={true}
        fade={false}
      >
        <ModalBody>{children}</ModalBody>
      </Modal>
    </div>
  );
}
