import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CrossBlackIcon(props) {
  return (
    <Svg
      width={11}
      height={11}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M.597 10.335l4.807-4.779m0 0L10.21.778M5.404 5.556l4.807 4.779M5.404 5.556L.597.778"
        stroke="#3A2D13"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default CrossBlackIcon;
