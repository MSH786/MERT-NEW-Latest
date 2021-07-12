import React from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FontSize} from '../../constants/Sizes';
import {Shadow} from 'react-native-shadow-2';

const SearchBarComponent = props => {
  const {style, rightIconHide, emoji, microphone} = props;
  return (
    <View style={[styles.container, {...style}]}>
      {emoji ? (
        <Entypo
          style={styles.iconFind}
          name={'emoji-happy'}
          size={wp(19)}
          color={Colors.darkGray}
        />
      ) : (
        <AntDesign
          style={styles.iconFind}
          name={'search1'}
          size={wp(19)}
          color={Colors.headerTitle}
        />
      )}

      <TextInput
        style={styles.title}
        onChangeText={props.onChangeText}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeHolder}
      />

      <TouchableOpacity style={styles.iconFilter}>
        {rightIconHide ? null : microphone ? (
          <MaterialCommunityIcons
            name={'microphone'}
            size={wp(19)}
            color={Colors.darkGray}
          />
        ) : (
          <FontAwesome name={'filter'} size={wp(19)} color={Colors.lightGray} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default SearchBarComponent;

SearchBarComponent.defaultProps = {
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
    marginLeft: wp(-60),

    shadowColor: 'rgba(14, 21, 31, 0.56)',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 2.22,
    elevation: 3,
  },
  iconFind: {
    marginLeft: wp(14),
  },
  iconFilter: {
    position: 'absolute',
    right: wp(14),
  },
  title: {
    marginLeft: wp(10),
    fontSize: FontSize(14),
    fontWeight: '400',
    color: Colors.headerTitle,
  },
});
