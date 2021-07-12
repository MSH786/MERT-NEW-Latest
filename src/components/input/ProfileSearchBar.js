import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Shadow from '../../constants/Shadow';
import Colors from '../../constants/Colors';
import {wp, hp} from '../../constants/Dimensions';
import MetarialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FontSize} from '../../constants/Sizes';

const ProfileSearchBar = props => {
  const {value, onChangeText, placeHolder, style} = props;
  return (
    <View style={styles.container}>
      <View style={styles.filterIconContainer}>
        <MetarialCommunityIcons
          size={wp(25)}
          name={'filter-variant'}
          color={Colors.softGray}
        />
      </View>

      <View style={styles.searchIconContainer}>
        <AntDesign size={wp(21)} name={'search1'} />
      </View>

      <TextInput
        style={styles.inputText}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeHolder}
        placeholderTextColor={Colors.darkGray}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Shadow,
    width: wp(332),
    height: hp(42),
    borderRadius: wp(7),
    borderColor: Colors.darkGray,
    flexDirection: 'row',
    alignContent: 'center',
    borderWidth: wp(0.1),
    backgroundColor: Colors.white,
  },
  filterIconContainer: {
    width: wp(41),
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: 'rgba(58, 45, 19, 0.10)',
    borderRightWidth: wp(0.5),
  },
  searchIconContainer: {
    width: wp(41),
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    fontWeight: 'normal',
    fontWeight: '400',
    lineHeight: hp(20.49),
    fontSize: FontSize(15),
    width: wp(217),
  },
});

export default ProfileSearchBar;
