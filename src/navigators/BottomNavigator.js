import React from 'react';
import {View, Image} from 'react-native';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import Colors from '../constants/Colors';
import {hp, wp} from '../constants/Dimensions';
import {FontSize} from '../constants/Sizes';
import {
  StackSell,
  StackChat,
  StackBeBuyer,
  StackHome,
  StackProfile,
} from './StackNavigator';

const Tabs = AnimatedTabBarNavigator();

const BottomNavigator = () => {
  return (
    <Tabs.Navigator
      initialRouteName={'Home'}
      tabBarOptions={tabBarOption()}
      appearance={appearance()}>
      <Tabs.Screen
        name="Home"
        options={({route}) => ({
          tabBarVisible: showBottomNavigation(route),
          tabBarLabel: 'Vitrin',
          activeTabBackground: Colors.primary,
          tabBarIcon: ({color, size}) =>
            color === Colors.black ? (
              <Image
                source={require('../../assets/images/bottomNavigation/iconBottomNCarBlack.png')}
              />
            ) : (
              <Image
                source={require('../../assets/images/bottomNavigation/iconBottomNCar.png')}
              />
            ),
        })}
        component={StackHome}
      />

      <Tabs.Screen
        name="BeBuyer"
        options={({route}) => ({
          tabBarVisible: showBottomNavigation(route),
          tabBarLabel: 'Alıcı Ol',
          tabBarIcon: ({color, size}) =>
            color === Colors.black ? (
              <Image
                source={require('../../assets/images/bottomNavigation/iconBottomNCarFindBlack.png')}
              />
            ) : (
              <Image
                source={require('../../assets/images/bottomNavigation/iconBottomNCarFind.png')}
              />
            ),
        })}
        component={StackBeBuyer}
      />

      <Tabs.Screen
        name="Sales"
        options={({route}) => ({
          tabBarVisible: showBottomNavigation(route),
          tabBarLabel: 'Sat',
          tabBarIcon: ({color, size}) =>
            color === Colors.black ? (
              <Image
                source={require('../../assets/images/bottomNavigation/iconBottomNPhotoBlack.png')}
              />
            ) : (
              <Image
                source={require('../../assets/images/bottomNavigation/iconBottomNPhoto.png')}
              />
            ),
        })}
        component={StackSell}
      />

      <Tabs.Screen
        name="Messages"
        options={({route}) => ({
          tabBarVisible: showBottomNavigation(route),
          tabBarLabel: 'Mesaj',
          tabBarIcon: ({color, size}) =>
            color === Colors.black ? (
              <Image
                source={require('../../assets/images/bottomNavigation/iconBottomNMessageBlack.png')}
              />
            ) : (
              <Image
                source={require('../../assets/images/bottomNavigation/iconBottomNMessage.png')}
              />
            ),
        })}
        component={StackChat}
      />

      <Tabs.Screen
        name="Profile"
        options={({route}) => ({
          tabBarVisible: showBottomNavigation(route),
          tabBarLabel: 'Profil',
          tabBarIcon: ({color, size}) =>
            color === Colors.black ? (
              <Image
                source={require('../../assets/images/bottomNavigation/iconBottomNProfile.png')}
              />
            ) : (
              <Image
                source={require('../../assets/images/bottomNavigation/iconBottomNProfile.png')}
              />
            ),
        })}
        component={StackProfile}
      />
    </Tabs.Navigator>
  );
};

export default BottomNavigator;

const tabBarOption = () => {
  return {
    activeTintColor: Colors.white,
    inactiveTintColor: Colors.black,
    activeBackgroundColor: Colors.primary,
    style: {
      fontSize: FontSize(14),
    },
    tabStyle: {
      borderRadius: hp(1),
    },
  };
};

const appearance = () => {
  return {
    dotCornerRadius: hp(9),
    topPadding: hp(10),
    shadow: true,
  };
};

 function showBottomNavigation(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'Home';

  switch (routeName) {
    case 'NotificationsScreen':
      return false;
    case 'MyFindBuyerDetailsScreen':
      return false;
    case 'FindBuyerDetailsScreen':
      return false;
    case 'StudioIntroScreen':
      return false;
    case 'StudioTakePhotoScreen':
      return false;
    case 'BlockedUsersScreen':
      return false;
    case 'ContractScreen':
      return false;
    case 'ChatDetailScreen':
      return false;
    case 'OtherUserProfileScreen':
      return false;
    case 'LocationScreen':
      return false;
    case 'FilterSearchScreen':
      return false;
    case 'FiltrationScreen':
      return false;
    case 'FindBuyerScreen':
      return false;
    case 'BeBuyerFiltrationScreen':
      return false;
    case 'BeBuyerListingScreen':
      return false;
    case 'EditBeBuyerScreen':
      return false;
    case 'FindBuyerDetailScreen':
      return false;
    case 'InspectionReportScreen':
      return false;
    case 'EditFindBuyerScreen':
      return false;
    case 'PrivacyScreen':
      return false;
    case 'ChangePersonalInfoScreen':
      return false;
    case 'ChangePersonalInfoCodeScreen':
      return false;
    case 'ChangePersonalInfoSelectInputNumber':
      return false;
    case 'ChangePersonalInfoEditEmail':
      return false;
    case 'PrivacyPolicyScreen':
      return false;
    case 'NotificationSettingsScreen':
      return false;
    case 'PersonalInfoScreen':
      return false;
    
    default:
      return true;
  }
}
