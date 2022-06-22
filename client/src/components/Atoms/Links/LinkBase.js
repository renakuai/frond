import React from "react";
import { MyLink, Path, Container } from './Link.styles.js';
import { Icons } from '../Icons/Icons'



function LinkBase(props) {
  const {
    size,
    type,
    iconName, //boolean
    children,
    link,
    underline,
    width,
  } = props;

  return (
    <MyLink
      width={width}
      size={size}
      underline={underline}
      type={type}
      iconName={iconName}
      to={link}
    ><Container>
        {iconName && <svg width="16" height="16" viewBox="3.5 3.5 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d={Icons[iconName]} type={type} />
        </svg>}
        {children}
      </Container>
    </MyLink>
  )
}

export default LinkBase;