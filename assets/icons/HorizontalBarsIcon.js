import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HorizontalBarsIcon(props) {
  return (
    <Svg
      width={19}
      height={11}
      viewBox="0 0 19 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M0 10.214a.786.786 0 01.786-.785H5.5A.786.786 0 015.5 11H.786A.786.786 0 010 10.214zM0 5.5a.786.786 0 01.786-.786h11a.786.786 0 010 1.572h-11A.786.786 0 010 5.5zM0 .786A.786.786 0 01.786 0H18.07a.786.786 0 110 1.571H.786A.786.786 0 010 .786z"
        fill="#fff"
      />
    </Svg>
  );
}

export default HorizontalBarsIcon;
