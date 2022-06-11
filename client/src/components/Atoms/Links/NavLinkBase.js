import React from "react";
import { MyNavLink, Path } from './Link.styles.js';


function NavLinkBase(props) {
  const {
    id,
    size,
    icon, //boolean
    children,
    link,
    onClick
  } = props;

  return (
    <MyNavLink
      id={id}
      size={size}
      icon={icon}
      to={link}
      onClick={onClick}
    >
      {children}
    </MyNavLink>
  )
}

export default NavLinkBase;