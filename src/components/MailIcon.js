import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MailIcon(props) {
  return (
    <Svg
      width={20}
      height={18}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.333 3c0-.917-.75-1.667-1.666-1.667H2.333C1.417 1.333.667 2.083.667 3m16.666 0v10c0 .917-.75 1.667-1.666 1.667H2.333c-.916 0-1.666-.75-1.666-1.667V3m16.666 0L9 8.833.667 3"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default MailIcon
