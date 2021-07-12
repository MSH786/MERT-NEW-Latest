import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  TextInputComponent,
} from 'react-native';
import {hp, wp} from '../../../constants/Dimensions';
import Colors from '../../../constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TextInputFloatingTitle from '../../input/TextInputFloatingTitle';
import { FontSize } from '../../../constants/Sizes';

const SearchBar = props => {
  const {style} = props;
  return (
    <View style={[styles.container, {...style}]}>
      <AntDesign
        style={styles.iconFind}
        name={'search1'}
        size={wp(19)}
        color={Colors.headerTitle}
      />
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeHolder}
      />

      <TouchableOpacity onPress={() => {alert('')}} style={styles.iconFilter}>
        <FontAwesome name={'filter'} size={wp(19)} color={Colors.lightGray} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

SearchBar.defaultProps = {
  title: 'text',
  icon: '',
};

const styles = StyleSheet.create({
  container: {
    width: wp(285),
    height: hp(42),
    borderRadius: hp(7),
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(9),

    shadowColor: 'rgba(14, 21, 31, 0.56)',
    shadowOffset: {width:1, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 2.22,
    elevation: 3,
  },
  iconFind: {
    marginLeft: wp(14),
  },
  iconFilter: {
    width: wp(20),
    height: hp(42),
    justifyContent:'center', 
  },
  input: {
    width: wp(210),
    height: hp(20),
    marginLeft: wp(10),
    fontSize: FontSize(14),
    fontWeight: '400',

    color: Colors.headerTitle,
  },
});
