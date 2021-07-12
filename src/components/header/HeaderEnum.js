import React from 'react';
import {
  HeaderButtonsWrapperLeft,
  HeaderButtonsWrapperRight,
} from './HeaderButtonsWrapper';

/**
 * All Header Buttons Import
 **/

import BackButton from './left/BackButton';
import EditButton from './right/EditButton';
import TrashButton from './right/TrashButton';
import CloseButton from './left/CloseButton';
import ProfileButtonRight from './right/ProfileButtonRight';
import ProfileButtonLeft from './left/ProfileButtonLeft';
import LogoButton from './right/LogoButton';
import CallButton from './right/CallButton';
import ChatButton from './right/ChatButton';
import ShareButton from './right/ShareButton';
import NextButton from './right/NextButton';
import SaveButton from './right/SaveButton';
import CoinAddButton from './right/CoinAddButton';
import QuestionButton from './right/QuestionButton';
import ComplateButton from './right/ComplateButton';
import PointButton from './right/PointButton';
import DoneButton from './right/DoneButton';
import ClearButton from './right/ClearButton';
import CoinButton from './right/CoinButton';
import MoreButton from './right/MoreButton';
import PlusButton from './right/PlusButton';
import BePopular from './left/BePopular';
import FilterButton from './left/FilterButton';
import ListingButton from './left/ListingButton';
import NameStatus from './left/NameStatus';
import EditButtonOutLine from './right/EditButtonOutLine';
import SearchBar from './left/SearchBar';
import NotificationButtonSmall from './right/NotificationButtonSmall';
import NotificationButtonBig from './left/NotificationButtonBig';
import SettingsButton from './right/SettingsButton';

export function _renderRightButtons(rightButtons, props, color) {
  return (
    <HeaderButtonsWrapperRight>
      {rightButtons.map(item => {
        const ItemButton = RightButtonEnum[item];
        return <ItemButton {...props} headerColor={color} />;
      })}
    </HeaderButtonsWrapperRight>
  );
}

export function _renderLeftButtons(leftButtons, props, color) {
  return (
    <HeaderButtonsWrapperLeft>
      {leftButtons.map(item => {
        const ItemButton = LeftButtonEnum[item];
        return <ItemButton {...props} headerColor={color} />;
      })}
    </HeaderButtonsWrapperLeft>
  );
}

const LeftButtonEnum = {
  Back: BackButton,
  Close: CloseButton,
  NotificationBig: NotificationButtonBig,
  BePopular: BePopular,
  Filter: FilterButton,
  Listing: ListingButton,
  NameStatus: NameStatus,
  ProfileLeft: ProfileButtonLeft,
  NotificationSmall: NotificationButtonSmall,
  SearchBar: SearchBar,
};

const RightButtonEnum = {
  ProfileRight: ProfileButtonRight,
  Edit: EditButton,
  EditOutLine: EditButtonOutLine,
  Logo: LogoButton,
  Trash: TrashButton,
  Call: CallButton,
  NotificationSmall: NotificationButtonSmall,
  Plus: PlusButton,
  Chat: ChatButton,
  Share: ShareButton,
  Next: NextButton,
  Save: SaveButton,
  Question: QuestionButton,
  CoinAdd: CoinAddButton,
  Coin: CoinButton,
  Complate: ComplateButton,
  Point: PointButton,
  Done: DoneButton,
  Clear: ClearButton,
  More: MoreButton,
  Settings: SettingsButton,
};
