import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Chevdown(props) {
  return (
    <Svg
      width={14}
      height={9}
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M.25 1.155a.845.845 0 000 1.199l5.823 5.729a.69.69 0 00.489.199.7.7 0 00.488-.2l5.824-5.728a.841.841 0 000-1.206.875.875 0 00-1.226 0L6.565 6.155l-5.09-5.007a.882.882 0 00-1.226.007z"
        fill="#3A2D13"
      />
    </Svg>
  );
}

export default Chevdown;
