// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import LightTheme from '../constants/themeConstants/lightTheme';
import DarkTheme from '../constants/themeConstants/darkTheme';
import {
  HeaderCustomOptions,
  HeaderDefaultOptions,
} from './NavigationHeaderOptions';
import Colors from '../constants/Colors';

//screens
import ProfileScreen from '../screens/profile/ProfileScreen';
import NotificationsScreen from '../screens/notification/NotificationsScreen';
import TestScreen from '../screens/TestScreen';
import FindBuyerScreen from '../screens/findBuyer/FindBuyerScreen';
import FiltrationScreen from '../screens/filter/FiltrationScreen';
import FilterSearchScreen from '../screens/filter/FilterSearchScreen';
import HomeScreen from '../screens/HomeScreen';
import FilteredListingScreen from '../screens/filter/FilteredListingScreen';
import BottomNavigator from './BottomNavigator';
import CarValuationScreen from '../screens/carValuation/CarValuationScreen';
import CarValutationResultScreen from '../screens/carValuation/CarValutationResultScreen';
import MyFindBuyerDetailsScreen from '../screens/findBuyer/MyFindBuyerDetailsScreen';
import LocationScreen from '../screens/findBuyer/LocationScreen';
import BuyersScreen from '../screens/findBuyer/BuyersScreen';
import InspectionReportScreen from '../screens/findBuyer/InspectionReportScreen';
import FindBuyerDetailsScreen from '../screens/findBuyer/FindBuyerDetailsScreen';
import StudioIntroScreen from '../screens/studio/StudioIntroScreen';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegistrationScreen from '../screens/auth/RegistrationScreen';
import MailPhoneConfirmationScreen from '../screens/auth/MailPhoneConfirmationScreen';
import SelectedBrandsScreen from '../screens/filter/SelectedBrandsScreen';
import ChatDetailScreen from '../screens/chat/ChatDetailScreen';
import WheelScreen from '../screens/WheelScreen';
import ChatsScreen from '../screens/chat/ChatsScreen';
import OtherUserProfileScreen from '../screens/profile/OtherUserProfileScreen';
import BePopularScreen from '../screens/BePopularScreen';
import EditFindBuyerScreen from '../screens/findBuyer/EditFindBuyerScreen';
import PremiumScreen from '../screens/premium/PremiumScreen';
import SettingsScreen from '../screens/profile/settings/SettingsScreen';
import NotificationSettingsScreen from '../screens/profile/settings/NotificationSettingsScreen';
import PersonalInfoScreen from '../screens/profile/settings/personalInfo/PersonalInfoScreen';
import BlockedUsersScreen from '../screens/profile/settings/BlockedUsersScreen';
import PrivacyScreen from '../screens/profile/settings/PrivacyScreen';
import ContractScreen from '../screens/profile/settings/ContactScreen';
import ChangePersonalInfoCodeScreen from '../screens/profile/settings/personalInfo/ChangePersonalInfoCodeScreen';
import ChangePersonalInfoEditEmail from '../screens/profile/settings/personalInfo/ChangePersonalInfoEditEmail';
import ChangePersonalInfoSelectInputNumber from '../screens/profile/settings/personalInfo/ChangePersonalInfoSelectInputNumber';
import ChangePersonalInfoScreen from '../screens/profile/settings/personalInfo/ChangePersonalInfoScreen';
import HomeMainScreen from '../screens/main/HomeMainScreen';
import Modals from '../screens/Modals';
import PrivacyPolicyScreen from '../screens/profile/settings/PrivacyPolicyScreen';
// import FindBuyerMainScreen from '../screens/main/CarValuationMainScreen';
import SellMainScreen from '../screens/main/SellMainScreen';
import ChatMainScreen from '../screens/main/ChatMainScreen';
import ProfileMainScreen from '../screens/main/ProfileMainScreen';
import StudioScreen from '../screens/studio/StudioScreen';
import StudioTakePhotoScreen from '../screens/studio/StudioTakePhotoScreen';
import BeBuyerFiltrationScreen from '../screens/beBuyer/BeBuyerFiltrationScreen';
import BeBuyerListingScreen from '../screens/beBuyer/BeBuyerListingScreen';
import EditBeBuyerScreen from '../screens/beBuyer/EditBeBuyerScreen';
import BeBuyerMainScreen from '../screens/main/BeBuyerMainScreen';
import RegistrationFormMailScreen from '../screens/auth/RegistrationFormMailScreen';
import RegistrationFormPhoneScreen from '../screens/auth/RegistrationFormPhoneScreen';
import AuthMainScreen from '../screens/main/AuthMainScreen';
import RegistrationFormCorporatePhoneScreen from '../screens/auth/RegistrationFormCorporatePhoneScreen';
import RegistrationFormCorporateMailScreen from '../screens/auth/RegistrationFormCorporateMailScreen';
import ContactScreen from '../screens/profile/settings/ContactScreen';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const SellStack = createStackNavigator();
const CarValuationStack = createStackNavigator();
const ChatStack = createStackNavigator();
const ProfileStack = createStackNavigator();

function StackNavigator() {
  const {theme, loading} = useSelector(state => state);
  //console.log({ theme });
  //console.log({ loading });

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : LightTheme}>
      <RootStack.Navigator
        initialRouteName={'BottomNavigation'}
        screenOptions={{headerShown: false}}>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="AuthStack" component={StackAuth} />
        <RootStack.Screen name="BottomNavigation" component={BottomNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export function StackAuth() {
  return (
    <AuthStack.Navigator
      screenOptions={HeaderCustomOptions('', Colors.white, Colors.white, [
        'Back',
      ])}>
      <AuthStack.Screen name="AuthMainScreen" component={AuthMainScreen} />
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
      />
      <AuthStack.Screen
        name="RegistrationFormMailScreen"
        component={RegistrationFormMailScreen}
      />
      <AuthStack.Screen
        name="RegistrationFormPhoneScreen"
        component={RegistrationFormPhoneScreen}
      />

      <AuthStack.Screen
        name="RegistrationFormCorporateMailScreen"
        component={RegistrationFormCorporateMailScreen}
      />
      <AuthStack.Screen
        name="RegistrationFormCorporatePhoneScreen"
        component={RegistrationFormCorporatePhoneScreen}
      />
      <AuthStack.Screen
        name="MailPhoneConfirmationScreen"
        component={MailPhoneConfirmationScreen}
      />
    </AuthStack.Navigator>
  );
}

/*/
<AuthStack.Screen
  name="RegistrationFormScreen"
  component={RegistrationFormScreen}
/>;
*/

export function StackHome() {
  return (
    <HomeStack.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={HeaderDefaultOptions('All Home Screens')}>
      {/* PUT OTHER SCREENS BELOW HOME. */}

      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
      <HomeStack.Screen
        name="FilterSearchScreen"
        component={FilterSearchScreen}
      />

      <HomeStack.Screen name="FiltrationScreen" component={FiltrationScreen} />
      <HomeStack.Screen
        name="FilteredListingScreen"
        component={FilteredListingScreen}
      />
      <HomeStack.Screen name="FindBuyerScreen" component={FindBuyerScreen} />
      <HomeStack.Screen
        name="FindBuyerDetailsScreen"
        component={FindBuyerDetailsScreen}
      />
      <HomeStack.Screen
        name="StudioIntroScreen"
        component={StudioIntroScreen}
      />
      <HomeStack.Screen
        component={MyFindBuyerDetailsScreen}
        name="MyFindBuyerDetailsScreen"
      />
      <HomeStack.Screen name="StudioScreen" component={StudioScreen} />
      <HomeStack.Screen
        name="StudioTakePhotoScreen"
        component={StudioTakePhotoScreen}
      />
      <HomeStack.Screen
        name="SelectedBrandsScreen"
        component={SelectedBrandsScreen}
      />
      <HomeStack.Screen
        name="BeBuyerFiltrationScreen"
        component={BeBuyerFiltrationScreen}
      />
      <HomeStack.Screen
        name="BeBuyerListingScreen"
        component={BeBuyerListingScreen}
      />
      <HomeStack.Screen
        name="EditBeBuyerScreen"
        component={EditBeBuyerScreen}
      />
       <HomeStack.Screen
        name="BePopularScreen"
        component={BePopularScreen}
      />
      <HomeStack.Screen name="ChatDetailScreen" component={ChatDetailScreen} />
      <HomeStack.Screen name="LocationScreen" component={LocationScreen} />
      <HomeStack.Screen name="WheelScreen" component={WheelScreen} />
    </HomeStack.Navigator>
  );
}

export function StackSell() {
  return (
    <SellStack.Navigator
      initialRouteName='FindBuyerScreen'
      screenOptions={HeaderDefaultOptions('All Find Buyer Screens')}>

      <SellStack.Screen name="FindBuyerScreen" component={FindBuyerScreen} />
      <SellStack.Screen
        name="MyFindBuyerDetailsScreen"
        component={MyFindBuyerDetailsScreen}
      />
      <SellStack.Screen
        name="InspectionReportScreen"
        component={InspectionReportScreen}
      />
      <SellStack.Screen
        name="CarValuationScreen"
        component={CarValuationScreen}
      />
      <SellStack.Screen
        name="EditFindBuyerScreen"
        component={EditFindBuyerScreen}
      />
      <HomeStack.Screen
        name="FindBuyerDetailsScreen"
        component={FindBuyerDetailsScreen}
      />

      <SellStack.Screen
        name="CarValutationResultScreen"
        component={CarValutationResultScreen}
      />
      <SellStack.Screen
        name="StudioIntroScreen"
        component={StudioIntroScreen}
      />
       <SellStack.Screen
        name="BePopularScreen"
        component={BePopularScreen}
      />
      <SellStack.Screen
        name="StudioTakePhotoScreen"
        component={StudioTakePhotoScreen}
      />
      <SellStack.Screen name="StudioScreen" component={StudioScreen} />
      <SellStack.Screen name="BuyersScreen" component={BuyersScreen} />
      <SellStack.Screen name="ChatDetailScreen" component={ChatDetailScreen} />
      <SellStack.Screen
        component={OtherUserProfileScreen}
        name="OtherUserProfileScreen"
      />
    </SellStack.Navigator>
  );
}

export function StackBeBuyer() {
  return (
    <CarValuationStack.Navigator
      screenOptions={HeaderDefaultOptions('All Car Valuation Screens')}
      initialRouteName={'BeBuyerFiltrationScreen'}>
      <CarValuationStack.Screen
        name="BeBuyerFiltrationScreen"
        component={BeBuyerFiltrationScreen}
      />

      <CarValuationStack.Screen
        name="BeBuyerListingScreen"
        component={BeBuyerListingScreen}
      />
      <CarValuationStack.Screen
        name="OtherUserProfileScreen"
        component={OtherUserProfileScreen}
      />

      <CarValuationStack.Screen
        name="EditBeBuyerScreen"
        component={EditBeBuyerScreen}
      />
      <SellStack.Screen
        name="FindBuyerDetailsScreen"
        component={FindBuyerDetailsScreen}
      />
      <SellStack.Screen
        name="InspectionReportScreen"
        component={InspectionReportScreen}
      />
    </CarValuationStack.Navigator>
  );
}

export function StackChat() {
  return (
    <ChatStack.Navigator
      screenOptions={HeaderDefaultOptions('All Chat Screens')}
      initialRouteName={'ChatsScreen'}>
      <ChatStack.Screen name="ChatsScreen" component={ChatsScreen} />
      <ChatStack.Screen name="ChatDetailScreen" component={ChatDetailScreen} />
      <ChatStack.Screen
        name="FindBuyerDetailsScreen"
        component={FindBuyerDetailsScreen}
      />
      <ChatStack.Screen
        name="OtherUserProfileScreen"
        component={OtherUserProfileScreen}
      />
      <ChatStack.Screen name="LocationScreen" component={LocationScreen} />
    </ChatStack.Navigator>
  );
}

export function StackProfile() {
  return (
    <ProfileStack.Navigator
      screenOptions={HeaderDefaultOptions('All Profile Screens')}>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen name="BuyersScreen" component={BuyersScreen} />
      <ProfileStack.Screen
        name="ChatDetailScreen"
        component={ChatDetailScreen}
      />
      <ProfileStack.Screen name="BePopularScreen" component={BePopularScreen} />
      <ProfileStack.Screen name="FindBuyerScreen" component={FindBuyerScreen} />
      <ProfileStack.Screen
        name="EditFindBuyerScreen"
        component={EditFindBuyerScreen}
      />
      <ProfileStack.Screen name="PremiumScreen" component={PremiumScreen} />
      <ProfileStack.Screen name="SettingsScreen" component={SettingsScreen} />
      <ProfileStack.Screen
        name="NotificationSettingsScreen"
        component={NotificationSettingsScreen}
      />
      <ProfileStack.Screen
        name="PersonalInfoScreen"
        component={PersonalInfoScreen}
      />
      <ProfileStack.Screen
        name="BlockedUsersScreen" 
        component={BlockedUsersScreen}
      />
       <ProfileStack.Screen
        name="BePopularScreen"
        component={BePopularScreen}
      />
      <ProfileStack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
      <ProfileStack.Screen name="PrivacyScreen" component={PrivacyScreen} />
      <ProfileStack.Screen name="ContractScreen" component={ContractScreen} />
      <ProfileStack.Screen
        name="ChangePersonalInfoScreen"
        component={ChangePersonalInfoScreen}
      />
      <ProfileStack.Screen
        name="ChangePersonalInfoCodeScreen"
        component={ChangePersonalInfoCodeScreen}
      />
      <ProfileStack.Screen
        name="ChangePersonalInfoSelectInputNumber"
        component={ChangePersonalInfoSelectInputNumber}
      />
      <ProfileStack.Screen
        name="ChangePersonalInfoEditEmail"
        component={ChangePersonalInfoEditEmail}
      />
      <ProfileStack.Screen
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
      />
      <ProfileStack.Screen name="ContactScreen" component={ContactScreen} />
      <ProfileStack.Screen name="Modals" component={Modals} />
    </ProfileStack.Navigator>
  );
}

export default StackNavigator;
