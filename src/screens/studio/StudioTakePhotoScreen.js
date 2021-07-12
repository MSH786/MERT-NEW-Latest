import React, {useState, useRef} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RNCamera} from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';
import ImagePicker, {openPicker} from 'react-native-image-crop-picker';

//HeaderNavigators
import {HeaderCustomOptions} from '../../navigators/NavigationHeaderOptions';

//navigator
import navigator from '../../utils/navigator';

//Components
import TakePhoto from '../../components/studio/TakePhoto';
import ImageSlider from '../../components/studio/ImageSlider';

//AppColors
import Colors from '../../constants/Colors';
const StudioTakePhotoScreen = () => {
  const navigation = useNavigation();

  const cameraRef = useRef(null); //Refrence for camera
  const [lastPicture, setLastPicture] = useState(); //for last picture clicked uri
  const [multipleImages, setMultipleImages] = useState([]); //for multiple images from gallery
  const [showCamera, setShowCamera] = useState(true); //for showing galler or camera

  navigation.setOptions(
    HeaderCustomOptions('', Colors.white, Colors.white, ['Back']),
  );
  const checkAndroidPermission = async () => {
    try {
      const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      await PermissionsAndroid.request(permission);
      Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
  };

  //This Func will take picture through camera and will push it to pictres State
  const takePicture = async () => {
    if (cameraRef) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current
        .takePictureAsync(options)
        .then(data => {
          savePicture(data); //To save Picture in phone gallery
        });
    }
  };
  const savePicture = async data => {
    if (Platform.OS === 'android') {
      await checkAndroidPermission(); //To ask for permission to save picture in phone gallery
    }
    CameraRoll.save(data.uri, 'photo')
      .then(onfulfilled => {
        setLastPicture(data.uri);
      })
      .catch(error => {
        console.log('error', `${error.message}`);
      });
  };
  const openGallery = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then(images => {
      setMultipleImages(images);
      setShowCamera(false);
      console.log('yes');
    });
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.container}>
        {showCamera ? (
          <RNCamera
            ref={cameraRef}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          />
        ) : (
          <ImageSlider
            data={multipleImages}
            onPressCross={() => {
              setShowCamera(true);
            }}
          />
        )}
        <TakePhoto
          onPressTakePhoto={takePicture}
          lastImage={lastPicture}
          onPressGallery={openGallery}
          onPressNext={() => {
            setShowCamera(false);
            navigator(navigation, 'StudioScreen');
          }}
        />
      </View>
    </>
  );
};

export default StudioTakePhotoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
