import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';
import SearchBarComponent from '../../input/SearchBarComponent';
import {wp, hp} from '../../../constants/Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChatBar = ({navigateToMapView}) => {
  return (
    <View style={styles.SearchBarView}>
      <View style={styles.location}>
        <Ionicons
          style={styles.iconFind}
          name={'md-location-sharp'}
          size={wp(22)}
          color={Colors.white}
          onPress={navigateToMapView}
        />
      </View>
      <SearchBarComponent
        placeHolder={'Bir mesaj yazın'}
        style={{width: '60%', marginLeft: 0}}
        emoji={true}
        microphone={true}
      />
      <View style={styles.location}>
        <Ionicons
          style={styles.iconFind}
          name={'md-send'}
          size={wp(22)}
          color={Colors.white}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SearchBarView: {
    width: '100%',
    alignItems: 'center',
    height: hp(90),
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  location: {
    width: '12%',
    height: hp(50),
    backgroundColor: Colors.iconBackground,
    borderRadius: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatBar;
