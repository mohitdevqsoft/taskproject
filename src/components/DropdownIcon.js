import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DropdownIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8 18 9.4l-6 6z"
        fill="#475467"
      />
    </Svg>
  )
}

export default DropdownIcon
