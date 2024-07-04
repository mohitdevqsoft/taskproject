import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function Cross(props) {
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
        d="M21.333 31.833l-1.166-1.166L24.833 26l-4.666-4.667 1.166-1.166L26 24.833l4.667-4.666 1.166 1.166L27.167 26l4.666 4.667-1.166 1.166L26 27.167l-4.667 4.666z"
        fill="#475467"
      />
    </Svg>
  )
}

export default Cross
