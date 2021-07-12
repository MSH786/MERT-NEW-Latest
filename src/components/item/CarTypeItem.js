import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import {wp, hp} from '../../constants/Dimensions';
import {FontSize} from '../../constants/Sizes';

function CarTypeItem(props) {
  const {item, select, onPress} = props;
  const Icon = item.image;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>onPress(item)}>
        <View
          style={[
            styles.iconView,
            {borderWidth: item.id === select.id ? hp(4) : 0},
          ]}>
          {item.id === select.id ? (
            <item.image color={Colors.primary} />
          ) : (
            <item.image color={Colors.white} />
          )}
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
}

export default CarTypeItem;

const styles = StyleSheet.create({
  container: {
    width: wp(74),
    height: hp(115),
    marginLeft: wp(9),
  },
  iconView: {
    width: wp(74),
    height: wp(73),
    borderRadius: hp(11),
    borderWidth: hp(4),
    borderColor: Colors.primary,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(7),
  },
  title: {
    textAlign: 'center',
    fontSize: FontSize(12),
    fontWeight: '400',
    color: Colors.darkGray,
  },
});
