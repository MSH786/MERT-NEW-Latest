import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function AddIcon(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12 23V12M12 12V1M12 12H23M12 12H1"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
    </Svg>
  );
}

export default AddIcon;
