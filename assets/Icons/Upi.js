import Svg, { Path } from 'react-native-svg';
import React from 'react'

const Upi = (props) => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke={props.color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="feather feather-fast-forward"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M13 19L22 12 13 5 13 19z"></Path>
    <Path d="M2 19L11 12 2 5 2 19z"></Path>
  </Svg>
  )
}

export default Upi