
import React from 'react'
import Svg, { Rect ,Path} from 'react-native-svg'

const CardPayment = (props) => {
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
    className="feather feather-credit-card"
    viewBox="0 0 24 24"
    {...props}
  >
    <Rect width="22" height="16" x="1" y="4" rx="2" ry="2"></Rect>
    <Path d="M1 10L23 10"></Path>
  </Svg>
  )
}

export default CardPayment