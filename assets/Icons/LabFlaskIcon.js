import React from "react";
import Svg, { Path } from 'react-native-svg';

function LabFlaskIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      width={30}
      height={30}
      viewBox="0 0 512 512"
    >
      <Path
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        {...props}
        d="M176 48h160M118 304h276M208 48v93.48a64.09 64.09 0 01-9.88 34.18L73.21 373.49C48.4 412.78 76.63 464 123.08 464h265.84c46.45 0 74.68-51.22 49.87-90.51L313.87 175.66a64.09 64.09 0 01-9.87-34.18V48"
      ></Path>
    </Svg>
  );
}

export default LabFlaskIcon;