import React from 'react';
import {Platform} from 'react-native';
import {wp, hp} from './Dimensions';

const Sizes = {
  width: wp(332),
};

export function FontSize(size) {
  return Platform.OS === 'ios' ? wp(size) : hp(size);
}
