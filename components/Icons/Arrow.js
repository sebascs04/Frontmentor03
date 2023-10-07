import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={10} height={7} {...props}>
    <Path fill="none" stroke="#F47B56" strokeWidth={2} d="m1 .799 4 4 4-4" />
  </Svg>
)
export default ArrowIcon
