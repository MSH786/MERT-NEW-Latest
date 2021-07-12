import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function LinkIcon(props) {
  return (
    <Svg
      width={21}
      height={24}
      viewBox="0 0 21 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M14.856 7.665l-1.522-1.52-7.613 7.61a3.23 3.23 0 104.568 4.567l9.135-9.134a5.383 5.383 0 00-7.613-7.611l-9.59 9.59-.022.019a7.505 7.505 0 000 10.616 7.509 7.509 0 0010.617 0l.02-.021.001.001 6.548-6.546-1.523-1.52-6.567 6.563a5.36 5.36 0 01-7.572 0 5.359 5.359 0 01.021-7.59l-.001-.002 9.592-9.59a3.232 3.232 0 014.568 0 3.232 3.232 0 010 4.567l-9.135 9.134a1.076 1.076 0 01-1.523-1.521l7.613-7.613-.002.001z"
        fill="#3A2D13"
        fillOpacity={0.5}
      />
    </Svg>
  );
}

export default LinkIcon;
