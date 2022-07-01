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
    decoration,
    svgBox
  } = props;

  return (
    <MyLink
      width={width}
      size={size}
      underline={underline}
      type={type}
      iconName={iconName}
      to={link}
      decoration={decoration}
      svgBox={svgBox}
    ><Container>
        {iconName && <svg width="16" height="17" viewBox={svgBox} fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d={Icons[iconName]} type={type} />
        </svg>}
        {children}
      </Container>
    </MyLink>
  )
}

export default LinkBase;