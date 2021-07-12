import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function EditIcon(props) {
  return (
    <Svg
      width="22"
      height="22"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      >
      <Path
        d="M11.2728 2.98294L13.0171 4.72637M13.3531 10.8823V13.3529C13.3531 13.7898 13.1795 14.2087 12.8707 14.5176C12.5618 14.8265 12.1428 15 11.706 15H2.64708C2.21024 15 1.7913 14.8265 1.48242 14.5176C1.17353 14.2087 1 13.7898 1 13.3529V4.29401C1 3.85718 1.17353 3.43824 1.48242 3.12935C1.7913 2.82046 2.21024 2.64693 2.64708 2.64693H5.11769M12.3945 1.44704L7.67807 6.16344C7.43437 6.40679 7.26817 6.71684 7.20042 7.05451L6.76476 9.23524L8.94549 8.79876C9.28314 8.73123 9.59279 8.5657 9.83656 8.32193L14.553 3.60553C14.6947 3.4638 14.8071 3.29555 14.8838 3.11037C14.9605 2.92519 15 2.72672 15 2.52628C15 2.32585 14.9605 2.12738 14.8838 1.9422C14.8071 1.75702 14.6947 1.58877 14.553 1.44704C14.4112 1.30531 14.243 1.19288 14.0578 1.11618C13.8726 1.03948 13.6741 1 13.4737 1C13.2733 1 13.0748 1.03948 12.8896 1.11618C12.7045 1.19288 12.5362 1.30531 12.3945 1.44704Z"
        stroke="#FFFFFF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default EditIcon;
