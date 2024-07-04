import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function LeftIcon(props) {
  return (
    <Svg
      width={52}
      height={52}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={52} height={52} rx={26} fill="#F9FAFB" />
      <Path
        d="M31.833 26H20.167m0 0L26 31.833M20.167 26L26 20.167"
        stroke="#475467"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default LeftIcon
