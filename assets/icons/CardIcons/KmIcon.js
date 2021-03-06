import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function KmIcon(props) {
  return (
    <Svg
      width={16}
      height={11}
      viewBox="0 0 16 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M.14 8.926L3.802.543a.798.798 0 01.726-.49h2.556L7.02.662a.21.21 0 00.209.231h.764A.21.21 0 008.2.661L8.137.054h2.556c.313 0 .597.19.727.489l3.662 8.383c.242.555-.144 1.188-.727 1.188H9.2l-.27-2.56a.42.42 0 00-.417-.375H6.709a.42.42 0 00-.416.376l-.27 2.559H.866c-.582 0-.97-.633-.726-1.188zm8.194-7.008a.21.21 0 00-.209-.188h-1.03a.21.21 0 00-.208.188l-.12 1.142a.314.314 0 00.312.347h1.062a.314.314 0 00.313-.347l-.12-1.142zM6.887 6.341h1.448a.42.42 0 00.417-.463L8.619 4.62a.42.42 0 00-.417-.375H7.02a.42.42 0 00-.416.375L6.47 5.878a.42.42 0 00.417.463z"
        fill="#9D9686"
      />
    </Svg>
  );
}

export default KmIcon;
