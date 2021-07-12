import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ChevRightBlack(props) {
  return (
    <Svg
      width={8}
      height={14}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M.385 13.725a.845.845 0 001.2 0l5.729-5.824a.69.69 0 00.199-.488.7.7 0 00-.2-.488L1.585 1.1a.841.841 0 00-1.205 0 .875.875 0 000 1.225L5.386 7.41.379 12.5a.882.882 0 00.006 1.226z"
        fill="#000"
      />
    </Svg>
  );
}

export default ChevRightBlack;
