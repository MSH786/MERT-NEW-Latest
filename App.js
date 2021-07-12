import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import createStore from './src/redux/store';

import {StatusBar, LogBox, Platform, UIManager, View, Text} from 'react-native';
import 'react-native-gesture-handler';

import USERS from './src/data/users';
import ILANS from './src/data/ilans';
import CARS from './src/data/cars';
import CHATS from './src/data/chats';
import MESSAGES from './src/data/messages';
import thunk from 'redux-thunk';
import StackNavigator from './src/navigators/StackNavigator';
import * as RNLocalize from 'react-native-localize';
import {setI18nConfig, translate} from './src/utils/translationHelpers';
import KeyboardManager from 'react-native-keyboard-manager';

import HomePage from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/profile/ProfileScreen';

// console.log(JSON.stringify(USERS, null, 2));
// console.log(JSON.stringify(ILANS, null, 2));
// console.log(JSON.stringify(CARS, null, 2));
// console.log(JSON.stringify(CHATS, null, 2));
// console.log(JSON.stringify(MESSAGES, null, 2));

LogBox.ignoreAllLogs();

if (Platform.OS === 'ios') {
  KeyboardManager.setEnable(true);
  KeyboardManager.setEnableDebugging(false);
  KeyboardManager.setKeyboardDistanceFromTextField(10);
  KeyboardManager.setEnableAutoToolbar(true);
  KeyboardManager.setToolbarDoneBarButtonItemText('Bitti');
  KeyboardManager.setToolbarPreviousNextButtonEnable(false);
  KeyboardManager.setShouldShowToolbarPlaceholder(false);
  KeyboardManager.setOverrideKeyboardAppearance(false);
  KeyboardManager.setShouldResignOnTouchOutside(true);
  KeyboardManager.resignFirstResponder();
}

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    setI18nConfig(); // set initial config
  }

  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };

  render() {
    const {store, persistor} = createStore();

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <StatusBar barStyle="dark-content" translucent />
          <StackNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
