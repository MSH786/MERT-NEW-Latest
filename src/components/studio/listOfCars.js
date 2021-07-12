import React from 'react';
import {StyleSheet, FlatList, View, Image, Text} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';

const ListOfCars = props => {
  const {data} = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={(item, index) => {
          return (
            <View style={{width: '50%', padding: 15}}>
              <Image
                resizeMode="stretch"
                style={styles.carImage}
                source={item.item.img}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default ListOfCars;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carImage: {
    width: '100%',
    height: hp(110),
    borderRadius: 20,
  },
});
