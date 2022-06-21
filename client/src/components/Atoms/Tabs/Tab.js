import React, { useRef, useEffect } from "react";
import { TabElem } from './Tab.styles';


function Tab(props) {
  const {
    className,
    children,
    key,
    id,
    onClick,
    link,
    width
  } = props;

  return (
    <TabElem
      width={width}
      className={className}
      key={key}
      id={id}
      to={link}
      onClick={onClick}
    >
      {children}
    </TabElem>
  );
}

export default Tab;