import React from 'react';
import Colors from '../constants/Colors';
import HeaderTitle from '../components/header/HeaderTitle';
import {
  _renderLeftButtons,
  _renderRightButtons,
} from '../components/header/HeaderEnum';
import BackButton from '../components/header/left/BackButton';
import {HeaderButtonsWrapperLeft} from '../components/header/HeaderButtonsWrapper';

/**
 * Default Options for Top Header Component
 **/

export const HeaderDefaultOptions = (
  title = '',
  color = Colors.white,
  titleColor = Colors.headerTitle,
) => {
  return {
    headerTitle: props => null,
    headerTintColor: color,
    headerTransparent: false,
    headerStyle: {
      backgroundColor: color,
      shadowColor: color,
      elevation: 0,
      shadowRadius: 0,
    },
    headerLeft: props => (
      <HeaderButtonsWrapperLeft>
        <BackButton {...props} headerColor={color} />
        <HeaderTitle {...props} title={title} titleColor={titleColor} />
      </HeaderButtonsWrapperLeft>
    ),
  };
};

/**
 *  Custom Options for Top Header Component
 **/

export const HeaderCustomOptions = (
  title = '',
  color = Colors.white,
  titleColor = Colors.headerTitle,
  leftButtons = [],
  rightButtons = [],
) => {
  return {
    headerTitle: props => (
      <HeaderTitle {...props} title={title} color={titleColor} />
    ),
    headerTintColor: color,
    headerTransparent: false,
    headerStyle: {
      backgroundColor: color,
      shadowColor: color,
      elevation: 0,
      shadowRadius: 0,
    },
    tabBarVisible:false,
    headerLeft: props => _renderLeftButtons(leftButtons, props, color),
    headerRight: props => _renderRightButtons(rightButtons, props, color),
  };
};
