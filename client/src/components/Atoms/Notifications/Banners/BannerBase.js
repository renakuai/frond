import React, { useState } from "react";
import { Banner, Div, Svg } from './Banner.styles'
import { Colors } from '../../Colors/Colors.js';


function BannerBase(props) {
  const {
    type,
    children,
    close,
    width
  } = props;

  const [closed, setClosed] = useState('');

  let pathColor;
  switch (type) {
    case ('success'):
      pathColor = Colors.green[40];
      break;
    case ('error'):
      pathColor = Colors.red[40];
      break;
    case ('informational'):
      pathColor = Colors.blue[40];
      break;
    case ('warning'):
      pathColor = Colors.orange[40]
      break;
  }

  //function handleClose() {
  //setClosed(true);
  //}

  return (
    <div>
      {!closed && <Banner
        type={type}
        width={width}
        close={close}
      >
        <Div>
          {children}
          {close && <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          //onClick={() => handleClose()}
          >
            <path d="M16.5303 8.53033C16.8232 8.23744 16.8232 7.76256 16.5303 7.46967C16.2374 7.17678 15.7626 7.17678 15.4697 7.46967L16.5303 8.53033ZM7.46967 15.4697C7.17678 15.7626 7.17678 16.2374 7.46967 16.5303C7.76256 16.8232 8.23744 16.8232 8.53033 16.5303L7.46967 15.4697ZM8.53034 7.46967C8.23745 7.17678 7.76257 7.17678 7.46968 7.46967C7.17678 7.76256 7.17678 8.23744 7.46968 8.53033L8.53034 7.46967ZM15.4697 16.5303C15.7626 16.8232 16.2374 16.8232 16.5303 16.5303C16.8232 16.2374 16.8232 15.7626 16.5303 15.4697L15.4697 16.5303ZM15.4697 7.46967L7.46967 15.4697L8.53033 16.5303L16.5303 8.53033L15.4697 7.46967ZM7.46968 8.53033L15.4697 16.5303L16.5303 15.4697L8.53034 7.46967L7.46968 8.53033Z"
              fill={pathColor} />
          </Svg>}
        </Div>
      </Banner>}</div >
  )
}

export default BannerBase;