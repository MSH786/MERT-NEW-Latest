import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { wp, hp } from '../../constants/Dimensions'
import { FontSize } from '../../constants/Sizes';
import Colors from '../../constants/Colors';

const CarDescription = props => {
  const {title, data} = props;
  const _renderItem = (item, index) => {
    return (
      <View key={index} style={styles.itemView}>
        <Image style={styles.itemImage} source={item.item.image_path} />
        <Text style={styles.itemText}>{item.item.name}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <FlatList
        data={data}
        renderItem={_renderItem}
        contentContainerStyle={{width: '100%'}}
        style={{width: '100%', marginTop: 5}}
        numColumns={3}
      />
    </View>
  );
};

export default CarDescription;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: `${Colors.darkGray}13`,
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 20,
  },
  titleText: {
    fontSize: FontSize(14),
    color: Colors.darkGray,
  },
  itemView: {
    width: '33%',
    flexDirection: 'row',
    margin: 5,
  },
  itemImage: {
    width: wp(22),
    height: hp(20),
    resizeMode: 'contain',
    marginRight: 5,
  },
  itemText:{
    color:Colors.darkGray,
    fontSize:FontSize(14)
  }
});
