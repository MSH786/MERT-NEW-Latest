import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PhoneWhiteIcon(props) {
  return (
    <Svg
      width={13}
      height={16}
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M3.24.085a2 2 0 012.327.946l.075.15.66 1.47a2.497 2.497 0 01-.441 2.718l-.132.132-1.044.973c-.188.178-.047.867.634 2.045.61 1.06 1.11 1.555 1.354 1.582h.043l.053-.01 2.05-.627a1.5 1.5 0 011.564.441l.092.115 1.356 1.88a2 2 0 01-.124 2.497l-.122.126-.543.514a3.5 3.5 0 01-3.715.705c-1.935-.78-3.693-2.562-5.29-5.328-1.6-2.773-2.265-5.19-1.968-7.26A3.5 3.5 0 012.33.365l.193-.064.716-.216z"
        fill="#fff"
      />
    </Svg>
  );
}

export default PhoneWhiteIcon;
