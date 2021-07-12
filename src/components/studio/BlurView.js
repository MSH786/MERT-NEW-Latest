import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import { FontSize } from '../../constants/Sizes';

const BlurView = props => {
  const {} = props;
  return (
    <ImageBackground
      style={styles.blurView}
      imageStyle={{borderRadius: 20}}
      source={require('../../../assets/images/studio/blurView.png')}>
      <View style={styles.container}>
        <Text
          style={styles.titleText}>
          Fotoğraflarınızı Stüdyo çekimine dönüştürün.
        </Text>
        <Image
          style={styles.pixelCar}
          source={require('../../../assets/images/studio/pixelCar.png')}
        />
      </View>
    </ImageBackground>
  );
};

export default BlurView;

const styles = StyleSheet.create({
  blurView: {
    width: '100%',
    height: hp(170),
    marginTop: 20,
    alignSelf: 'center',
  },
  pixelCar: {
    width: '105%',
    height: hp(120),
    resizeMode: 'stretch',
    position: 'absolute',
    bottom: -hp(40),
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  titleText:{
    width: '50%',
    fontSize: FontSize(18),
    textAlign: 'center',
    color:Colors.white80,
    marginTop:hp(20)
  }
});
