import React from "react";
import { Modal } from './Modal.styles.js';
import { Icons } from '../Icons/Icons';
import { ModalForm } from './Modal.styles';
import { ButtonBase } from '../Buttons/ButtonBase'



function ModalFormBase(props) {

  const {
    children
  } = props;

  return (
    <ModalForm
      size={size}
      type={type}
      id={id}
    >
      <form method="dialog">
        {formChildren}
      </form>
      <ButtonBase
        value="cancel"
      >Cancel
      </ButtonBase>
      <button value={buttonChildren}>{buttonChildren}</button>
    </ModalForm>
  )
}

export default ModalFormBase;