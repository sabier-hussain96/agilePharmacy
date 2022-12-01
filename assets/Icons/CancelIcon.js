import React from 'react';
import Svg, { Path } from 'react-native-svg';
export const CancelIcon = (props) => {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="feather feather-x"
        viewBox="0 0 24 24"
        {...props}
      >
        <Path d="M18 6L6 18"></Path>
        <Path d="M6 6L18 18"></Path>
      </Svg>
    );
  }
  