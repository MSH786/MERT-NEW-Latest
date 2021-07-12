import React from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';
import {HeaderCustomOptions} from '../../navigators/NavigationHeaderOptions';
import {useNavigation} from '@react-navigation/native';
//Colors
import Colors from '../../constants/Colors';
//Components
import SearchBarComponent from '../../components/input/SearchBarComponent';
import ChatList from '../../components/chat/ChatList';
//Dimensions
import {hp, wp} from '../../constants/Dimensions';
//Dummy Data
import {ChatListData} from '../../data/data';

const ChatsScreen = () => {
  const navigation = useNavigation();

  navigation.setOptions(
    HeaderCustomOptions(
      'Mesajlar',
      Colors.white,
      Colors.darkGray,
      [],
      ['Trash', 'Plus'],
    ),
  );
  return (
    <View style={styles.container}>
      <View style={styles.SearchBarView}>
        <SearchBarComponent
          placeHolder={'Arama'}
          style={{width: '100%', marginLeft: 0}}
          rightIconHide={true}
        />
      </View>
      <ChatList data={ChatListData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: wp(20),
  },
  SearchBarView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default ChatsScreen;
