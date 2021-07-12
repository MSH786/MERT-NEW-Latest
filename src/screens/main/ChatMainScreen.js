import React from 'react';
import {ScrollView,StyleSheet, Text,TouchableOpacity,} from 'react-native';


const ChatMainScreen = props => {
  
  const changeScreen = screen => {
    props.navigation.navigate(screen);
  };

  return (
    <>
      <ScrollView>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('ChatsScreen')}>
          <Text>ChatsScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('ChatDetailScreen')}>
          <Text>ChatDetailScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('FindBuyerDetailsScreen')}>
          <Text>FindBuyerDetailsScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('OtherUserProfileScreen')}>
          <Text>OtherUserProfileScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('LocationScreen')}>
          <Text>LocationScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screen}
          onPress={() => changeScreen('NewFindBuyerDetailScreen')}>
          <Text>NewFindBuyerDetailScreen</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
});

export default ChatMainScreen;
