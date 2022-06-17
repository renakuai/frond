import React from "react";
import { Button, Container, Path } from './Button.styles.js';
import { Icons } from '../Icons/Icons'

function ButtonBase(props) {
  const {
    size,
    btnType,
    children,
    id,
    width,
    iconName,
    type,
    onClick
  } = props;


  return (
    <Button
      size={size}
      btnType={btnType}
      width={width}
      id={id}
      type={type}
      onClick={onClick}
    >
      <Container>
        {iconName && <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d={Icons[iconName]} btnType={btnType} />
        </svg>}
        {children}
      </Container>
    </Button>
  )
}

export default ButtonBase;