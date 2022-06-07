import React from "react";
import { MyLink, Path } from './Link.styles.js';
import { Link } from "react-router-dom"


function LinkBase(props) {
  const {
    size,
    type,
    icon, //boolean
    children,
    link
  } = props;

  return (
    <Link to={link}>
      <MyLink
        size={size}
        type={type}
        icon={icon}
        link={link}>
        {icon && <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M2.6665 7.75C2.25229 7.75 1.9165 8.08578 1.9165 8.5C1.9165 8.91421 2.25229 9.25 2.6665 9.25V7.75ZM13.3332 9.25C13.7474 9.25 14.0832 8.91421 14.0832 8.5C14.0832 8.08578 13.7474 7.75 13.3332 7.75V9.25ZM8.74984 3.16666C8.74984 2.75245 8.41405 2.41666 7.99984 2.41666C7.58562 2.41666 7.24984 2.75245 7.24984 3.16666H8.74984ZM7.24984 13.8333C7.24984 14.2475 7.58562 14.5833 7.99984 14.5833C8.41405 14.5833 8.74984 14.2475 8.74984 13.8333H7.24984ZM2.6665 9.25H13.3332V7.75H2.6665V9.25ZM7.24984 3.16666V13.8333H8.74984V3.16666H7.24984Z" type={type} />
        </svg>}
        {children}
      </MyLink>
    </Link>
  )
}

export default LinkBase;