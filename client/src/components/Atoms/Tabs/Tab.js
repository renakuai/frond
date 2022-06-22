import React, { useRef, useEffect } from "react";
import { TabElem } from './Tab.styles';


function Tab(props) {
  const {
    className,
    children,
    id,
    onClick,
    link,
    width
  } = props;

  return (
    <TabElem
      width={width}
      className={className}
      id={id}
      to={link}
      onClick={onClick}
    >
      {children}
    </TabElem>
  );
}

export default Tab;