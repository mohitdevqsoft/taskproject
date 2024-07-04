import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function PreviousIcon(props) {
  return (
    <Svg
      width={52}
      height={52}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={0.5} y={0.5} width={51} height={51} rx={25.5} stroke="#D0D5DD" />
      <Path
        d="M31.833 26H20.167m0 0L26 31.833M20.167 26L26 20.167"
        stroke="#101828"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default PreviousIcon
