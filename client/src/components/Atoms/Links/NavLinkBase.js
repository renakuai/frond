import React from "react";
import { MyNavLink } from './Link.styles.js';


function NavLinkBase(props) {
  const {
    id,
    size,
    icon, //boolean
    children,
    link,
    onClick,
    className,
    width
  } = props;

  return (
    <MyNavLink
      id={id}
      size={size}
      icon={icon}
      to={link}
      className={className}
      onClick={onClick}
      width={width}
    >
      {children}
    </MyNavLink>
  )
}

export default NavLinkBase;