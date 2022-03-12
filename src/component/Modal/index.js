import { Modal, ModalBody } from "reactstrap";
import React, { memo } from "react";

const ModalDialog = memo(({ isOpen, children, ...props }) => {
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
});

export default ModalDialog;
