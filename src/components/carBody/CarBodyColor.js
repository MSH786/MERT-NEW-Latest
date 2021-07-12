import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { wp, hp } from '../../constants/Dimensions'

const CarBody = props => {
  const {} = props;
  return (
    <View style={styles.container}>
      <View style={styles.threeDotView}>
        <TouchableOpacity style={styles.itemPressView}>
          <View style={styles.dotColor}></View>
          <Text>Orijinal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemPressView}>
          <View style={[styles.dotColor,{backgroundColor:"#F6B23D"}]}></View>
          <Text>Boyalı</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemPressView}>
          <View style={[styles.dotColor,{backgroundColor:"#7BBFE9"}]}></View>
          <Text>Lokal Boyalı</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.threeDotView}>
      <TouchableOpacity style={styles.itemPressView}>
          <View style={[styles.dotColor,{backgroundColor:"#DC6070"}]}></View>
          <Text>Değişmiş</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemPressView}>
          <View style={[styles.dotColor,{backgroundColor:"#8A8D91"}]}></View>
          <Text>Belirtilmemiş</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CarBody;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  dotColor: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: '#7EC07B',
    marginRight:5
  },
  itemPressView:{
      flexDirection:"row",
      alignItems:"center"
  },
  threeDotView:{
      flexDirection:"row",
      justifyContent:"space-evenly",
      marginBottom:20
  }
});
