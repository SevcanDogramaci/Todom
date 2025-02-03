import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';

const IconAdd = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#FFF"
    viewBox="0 -960 960 960"
    {...props}>
    <Path d="M440-440H240q-17 0-28.5-11.5T200-480t11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760t28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480t-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200t-28.5-11.5T440-240z" />
  </Svg>
);

export default IconAdd;
