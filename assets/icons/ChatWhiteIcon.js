import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ChatWhiteIcon(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M16 8a8.003 8.003 0 01-11.849 7.014l-2.301.658A1.23 1.23 0 01.328 14.15l.658-2.3A8 8 0 1116 8z"
        fill="#fff"
      />
    </Svg>
  );
}

export default ChatWhiteIcon;
