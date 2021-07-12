import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import FilterIcon from '../../../assets/icons/FilterIcon';
import RingIcon from '../../../assets/icons/RingIcon';
import SearchIcon from '../../../assets/icons/SearchIcon';
import { FontSize } from '../../constants/Sizes';

const FilterSearchBarComponent = ({
  value,
  onChangeText,
  placeholder,
  containerStyles,
  ...props
}) => {
  return (
    <View style={[styles.container, {...containerStyles}]}>
      <View style={styles.searchBarIconsContainer}>
        <View style={styles.searchIconContainer}>
          <SearchIcon />
        </View>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor="black"
          placeholder={placeholder ? placeholder : 'Marka veya model arayin'}
          style={styles.input}
          {...props}
        />
      </View>
    </View>
  );
};

export default FilterSearchBarComponent;

const styles = StyleSheet.create({
  container: {
    width: wp(333),
    borderColor: '#DEDBD9',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: hp(15),
    height: hp(60),
  },
  input: {
    width: wp(333),
    height: hp(50),
    fontSize: FontSize(15),
    backgroundColor: 'white',
    borderRadius: wp(9),
    shadowColor: 'white',
    shadowOffset: {
      width: wp(0),
      height: hp(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingLeft: wp(50),
  },
  searchBarIconsContainer: {
    flexDirection: 'row',
    borderRadius: wp(7),
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: wp(5),
  },
  searchIconContainer: {
    position: 'absolute',
    zIndex: 9999,
    left: wp(10),
    top: hp(12),
    elevation: 2,
  },
});
