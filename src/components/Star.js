import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"

function Star(props) {
  return (
    <Svg
      width={52}
      height={52}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={26} cy={26} r={26} fill="#253BFF" />
      <G clipPath="url(#clip0_1597_240)">
        <Path
          d="M37.438 25.438h-10.08l7.127-7.128a.563.563 0 10-.795-.795l-7.127 7.127v-10.08a.562.562 0 10-1.125 0v10.08l-7.128-7.127a.563.563 0 10-.795.795l7.127 7.128h-10.08a.562.562 0 100 1.125h10.08l-7.127 7.127a.563.563 0 10.795.795l7.128-7.127v10.08a.562.562 0 101.125 0v-10.08l7.127 7.127a.563.563 0 10.795-.795l-7.127-7.127h10.08a.562.562 0 100-1.125z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1597_240">
          <Path fill="#fff" transform="translate(14 14)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Star
