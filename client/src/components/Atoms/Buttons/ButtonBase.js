import React from "react";
import { Button, Container, Path } from './Button.styles.js';
import { Icons } from '../Icons/Icons'

function ButtonBase(props) {
  const {
    size,
    type,
    children,
    id,
    width,
    iconName
  } = props;


  return (
    <Button
      size={size}
      type={type}
      width={width}
      id={id}
    >
      <Container>
        {iconName && <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d={Icons[iconName]} type={type} />
        </svg>}
        {children}
      </Container>
    </Button>
  )
}

export default ButtonBase;