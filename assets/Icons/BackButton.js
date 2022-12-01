import React from "react";
import { Svg,Path } from "react-native-svg";


function BackIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-arrow-left"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M19 12L5 12"></Path>
      <Path d="M12 19L5 12 12 5"></Path>
    </Svg>
  );
}

export default BackIcon;