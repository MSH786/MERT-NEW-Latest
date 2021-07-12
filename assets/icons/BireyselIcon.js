import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BireyselIcon(props) {
  return (
    <Svg
      width={19}
      height={46}
      viewBox="0 0 19 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12.667 45.917H6.333a3.167 3.167 0 01-3.166-3.167V31.667A3.167 3.167 0 010 28.5V19a4.75 4.75 0 014.75-4.75h9.5A4.75 4.75 0 0119 19v9.5a3.167 3.167 0 01-3.167 3.167V42.75a3.167 3.167 0 01-3.166 3.167zm-7.917-28.5A1.487 1.487 0 003.167 19v9.5h3.166v14.25h6.334V28.5h3.166V19a1.487 1.487 0 00-1.583-1.583h-9.5zM9.5 12.667A6.334 6.334 0 119.5 0a6.334 6.334 0 010 12.667zm0-9.5a3.167 3.167 0 100 6.333 3.167 3.167 0 000-6.333z"
        fill="#3A2D13"
      />
    </Svg>
  );
}

export default BireyselIcon;
