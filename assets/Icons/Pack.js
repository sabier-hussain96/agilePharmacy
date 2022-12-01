import React from "react";

import Svg, { Path,Rect } from 'react-native-svg';
function PackIcon(props) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
  >
    <Rect
      width="200"
      height="316"
      x="96"
      y="48"
      fill="none"
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth="32"
      rx="48"
      ry="48"
      {...props}
    ></Rect>
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M176 128h160m-160 80h160m-160 80h80"
    ></Path>
  </Svg>
  );
}

export default PackIcon;
