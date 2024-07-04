import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SignUpIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.5.5h3.333A1.666 1.666 0 0115.5 2.167v11.666a1.666 1.666 0 01-1.667 1.667H10.5m-4.167-3.333L10.5 8m0 0L6.333 3.833M10.5 8H.5"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SignUpIcon
