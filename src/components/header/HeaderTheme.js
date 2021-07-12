import Colors from '../../constants/Colors';

export function selectBackgroundColor(headerColor) {
  switch (headerColor) {
    case Colors.white:
      return Colors.headerButton;
    case Colors.primary:
      return Colors.white30;
    case Colors.lightGray:
      return Colors.white;
    case Colors.background:
      return Colors.lightGray;
    default:
      return Colors.lightGray;
  }
}

export function selectIconColor(headerColor) {
  switch (headerColor) {
    case Colors.white:
      return Colors.white;
    case Colors.primary:
      return Colors.white;
    case Colors.lightGray:
      return Colors.darkGray;
    default:
      return Colors.lightGray;
  }
}
