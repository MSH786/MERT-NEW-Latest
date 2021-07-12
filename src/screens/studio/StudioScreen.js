import React, {useState, useRef} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  PermissionsAndroid,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//HeaderNavigators
import {HeaderCustomOptions} from '../../navigators/NavigationHeaderOptions';
//Components
import TakePhoto from '../../components/studio/TakePhoto';
import ImageSlider from '../../components/studio/ImageSlider';
//AppColors
import Colors from '../../constants/Colors';
//DummyData
import {CarsList} from '../../data/data';
//Dimensions
import { wp,hp } from '../../constants/Dimensions';
const StudioScreen = () => {
  const navigation = useNavigation();

  navigation.setOptions(
    HeaderCustomOptions('', Colors.white, Colors.white, ['Back'],['Next']),
  );
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.container}>
        <ImageSlider
          data={CarsList}
          dotStyle={{backgroundColor: Colors.primary}}
          renderHorizontal={true}
        />
        <View style={{paddingHorizontal:wp(10)}}>
        <View style={styles.dottedView}>
          <Text style={styles.titleText}>
          Logo Ekleyin
          </Text>
        </View>
        </View>
      </View>
    </>
  );
};

export default StudioScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.white
  },
  dottedView:{
  width:'100%',
  height:hp(110),
  marginBottom:hp(50),
  marginTop:hp(10),
  borderWidth:wp(1),
  borderColor:Colors.gray,
  borderStyle:"dashed",
  borderRadius:hp(10),
  justifyContent:"center",
  alignItems:"center"
  },
  titleText:{
    color:`${Colors.darkGray}50`
  }
});
