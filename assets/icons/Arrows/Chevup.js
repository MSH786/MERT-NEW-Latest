import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Chevup(props) {
  return (
    <Svg
      width={14}
      height={9}
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M13.495 8.025a.845.845 0 000-1.2L7.67 1.097a.69.69 0 00-.489-.199.7.7 0 00-.488.2L.87 6.825a.841.841 0 000 1.205.875.875 0 001.226 0l5.083-5.007 5.09 5.007a.882.882 0 001.226-.006z"
        fill="#3A2D13"
      />
    </Svg>
  );
}

export default Chevup;
