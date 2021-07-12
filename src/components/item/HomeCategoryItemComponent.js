import React from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import {wp, hp} from '../../constants/Dimensions';
import {FontSize} from '../../constants/Sizes';

const HomeCategoryItemComponent = ({
  item,
  select,
  onPress,
  onCategoryChange,
}) => {
  console.log(item, select);

  return (
    <TouchableOpacity
      onPress={() => {
        onPress(item);
        onCategoryChange(item);
      }}
      style={styles.container}>
      <Image style={styles.image} source={item.image} />

      {item.id === select.id ? (
        <Text style={styles.title}>{item.title}</Text>
      ) : (
        <Text style={styles.title} />
      )}
    </TouchableOpacity>
  );
};

export default HomeCategoryItemComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(60),
  },
  title: {
    fontSize: FontSize(12),
    fontWeight: '400',
    color: Colors.primary,
    marginTop: hp(3),
  },
  image: {
    resizeMode: 'contain',
    width: wp(35),
  },
});
