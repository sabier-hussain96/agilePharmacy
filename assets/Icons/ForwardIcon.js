import { Svg, Path } from 'react-native-svg'
import React from 'react'

const ForwardIcon = (props) => {
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
    className="feather feather-chevron-right"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M9 18L15 12 9 6"></Path>
  </Svg>
  )
}

export default ForwardIcon