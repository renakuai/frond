import React from "react";
import { Modal } from './Modal.styles.js';
import { Icons } from '../Icons/Icons';
import { H5Base } from '../Font/FontBase'
import { HeaderDiv, Svg, Overlay } from './Modal.styles';

function ModalBase(props) {
  const {
    id,
    type,
    children,
    title,
    setOpen
  } = props;

  function handleClose(e) {
    e.stopPropagation();
    setOpen(false)
  }

  return (
    <Overlay>
      <Modal
        type={type}
        id={id}
        setOpen={setOpen}
      >
        <HeaderDiv>
          <H5Base>{title}</H5Base>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={(e) => handleClose(e)}>
            <path d={Icons.close} fill="#5D6361" />
          </Svg>
        </HeaderDiv>
        {children}
      </Modal>
    </Overlay>
  )
}

export default ModalBase;