import React from "react";
import { MyLink, Path } from './Link.styles.js';
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
    >
      {iconName && <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d={Icons[iconName]} type={type} />
      </svg>}
      {children}
    </MyLink>
  )
}

export default LinkBase;