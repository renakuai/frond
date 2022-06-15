import React from "react";
import { Modal } from './Modal.styles.js';
import { Icons } from '../Icons/Icons'



function ModalBase(props) {
  const {
    size,
    type,
  } = props;

  return (
    <Modal
      size={size}
      type={type}
      id={id}
    >
    </Modal>
  )
}

export default ModalBase;