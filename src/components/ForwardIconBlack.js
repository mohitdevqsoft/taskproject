import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function ForwardIconBlack(props) {
  return (
    <Svg
      width={44}
      height={44}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={0.5} y={0.5} width={43} height={43} rx={21.5} stroke="#D0D5DD" />
      <Path
        d="M16.167 22h11.666m0 0L22 16.167M27.833 22L22 27.833"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ForwardIconBlack
