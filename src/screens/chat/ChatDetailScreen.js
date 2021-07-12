import React from 'react';
import {Text, View, StyleSheet, StatusBar, ImageBackground} from 'react-native';
import {HeaderCustomOptions} from '../../navigators/NavigationHeaderOptions';
import {useNavigation} from '@react-navigation/native';
//Colors
import Colors from '../../constants/Colors';
//Images
import {chatDetailBackground} from '../../constants/Images';
//Components
import ChatBar from '../../components/chat/chatDetail/ChatBar';
import ChatBarHeader from '../../components/chat/chatDetail/ChatBarHeader';
import Chat from '../../components/chat/chatDetail/Chat';
//navigator
import navigator from '../../utils/navigator';
//Dimesions
import {wp, hp} from '../../constants/Dimensions';
//DummyData
import {completeChat} from '../../data/data';

const ChatDetailScreen = () => {
  const navigation = useNavigation();

  navigation.setOptions(
    HeaderCustomOptions(
      '',
      Colors.white,
      Colors.white,
      ['Back', 'ProfileLeft', 'NameStatus'],
      ['Call', 'More'],
    ),
  );

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.container}>
        <ImageBackground
          resizeMode="stretch"
          style={styles.backgroundImage}
          source={chatDetailBackground}>
          <View style={styles.headerView}>
            <ChatBarHeader
              navigateToCarDetails={() => {
                navigator(navigation, 'FindBuyerDetailsScreen');
              }}
            />
          </View>
          <Chat data={completeChat} />
          <View style={styles.chatBarView}>
            <ChatBar
              navigateToMapView={() => {
                navigator(navigation, 'LocationScreen');
              }}
            />
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  chatBarView: {
    position: 'absolute',
    bottom: 0,
  },
  headerView: {
    marginTop: hp(1),
  },
});

export default ChatDetailScreen;
