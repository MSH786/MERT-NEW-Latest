import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {
  HeaderCustomOptions,
  HeaderDefaultOptions,
} from '../../navigators/NavigationHeaderOptions';
import {wp, hp} from '../../constants/Dimensions';
import MapView from 'react-native-maps';
import AntDesign from 'react-native-vector-icons/AntDesign';

//Compoenets

import navigator from '../../utils/navigator';

import PickingImages from '../../components/imagePicker/PickingImages';
import CarDetails from '../../components/carDetail/CarDetails';
import CarDescription from '../../components/carDetail/CarDescription';
import CarPriceBottomBar from '../../components/carDetail/CarPriceBottomBar';
import CarBody from '../../components/carBody/CarBody';
import CarBodyColor from '../../components/carBody/CarBodyColor';
import ValuationDropDown from '../../components/dropDownSelector/ValuationDropDown';
import BottomLoan from '../../components/bottomSheet/BottomLoan';
import BottomSheetPopup from '../../components/popup/BottomSheetPopup';

//DummyData
import {carDetail, dataCities, BankDetailData} from '../../data/data';
import Colors from '../../constants/Colors';
import {FontSize} from '../../constants/Sizes';

const MyBuyerDetailScreen = () => {
  const [like, setLike] = useState(false);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [carDetail, setCarDetail] = useState(false);
  const [colorCarFront, setColorCarFront] = useState('#7EC07B');
  const [colorCarBack, setColorCarBack] = useState('#7EC07B');
  const [colorCarLeftFrontTyre, setColorCarLeftFrontTyre] = useState('#7EC07B');
  const [colorCarLeftBackTyre, setColorCarLeftBackTyre] = useState('#7EC07B');
  const [colorCarLeftBackDoor, setColorCarLeftBackDoor] = useState('#7EC07B');
  const [colorCarLeftFrontDoor, setColorCarLeftFrontDoor] = useState('#7EC07B');
  const [colorCarRightFrontTyre, setColorCarRightFrontTyre] =
    useState('#F6B23D');
  const [colorCarRightBackTyre, setColorCarRightBackTyre] = useState('#7EC07B');
  const [colorCarRightBackDoor, setColorCarRightBackDoor] = useState('#7EC07B');
  const [colorCarRightFrontDoor, setColorCarRightFrontDoor] =
    useState('#7EC07B');
  const [BonutColor, setBonutColor] = useState('#7EC07B');
  const [TailGateColor, setTailGateColor] = useState('#DC6070');
  const [RoofColor, setRoofColor] = useState('#7EC07B');
  const [pickerValue, setPickerValue] = useState('Konum');
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const navigation = useNavigation();

  navigation.setOptions(
    HeaderCustomOptions(
      'Yasar Otomotiv',
      Colors.white,
      Colors.white,
      ['Back'],
      ['Edit', 'Logo'],
    ),
  );

  const data = [
    {
      title: 'Otomobil',
      imgPath: '../../../assets/images/dummyCarImages/car.jpg',
      selected: false,
      show: false,
    },
    {
      title: 'Arazi, SUV, PickUp',
      imgPath: '../../../assets/images/dummyCarImages/car.jpg',
      selected: false,
      show: false,
    },
    {
      title: 'MotoSilet',
      imgPath: '../../../assets/images/dummyCarImages/car.jpg',
      selected: false,
      show: false,
    },
    {
      title: 'Minivan & Panelvan',
      imgPath: '../../../assets/images/dummyCarImages/car.jpg',
      selected: false,
      show: false,
    },
    {
      title: 'Kamyon & Kamyonet',
      imgPath: '../../../assets/images/dummyCarImages/car.jpg',
      selected: false,
      show: false,
    },
    {
      title: 'Car',
      imgPath: '../../../assets/images/dummyCarImages/car.jpg',
      selected: false,
      show: false,
    },
  ];
  const onRegionChange = region => {
    setRegion(region);
  };
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <PickingImages
            ImagesData={data}
            onPressHeart={() => {
              setLike(!like);
            }}
            isLiked={like}
          />
          <CarDetails
            brandLogo={require('../../../assets/images/bmwLogo.png')}
            title={'Öğretmenden Hatasız BMW '}
            subText={'Zümrütevler Mah., Maltepe, İstanbul'}
            dateText={'03.04.2021'}
            descriptionText={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis libero sit elit, tortor at enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis libero sit elit, tortor at enim Elementum imperdiet nunc egestas adipiscing volutpat urna viverra convallis interdum. Bibre te vıluptat elit amet'
            }
          />
          <CarDescription title={'#12815'} data={carDetail} />
        </View>
      </ScrollView>
      <BottomSheetPopup
        isOpen={showBottomSheet}
        onClosedBottom={() => {
          setShowBottomSheet(false);
        }}
        modalHeight={550}
        children={
          <BottomLoan
            onPressBack={() => {
              setShowBottomSheet(false);
            }}
            data={BankDetailData}
          />
        }
      />
      <CarPriceBottomBar
        onPressBottomTab={() => {
          setShowBottomSheet(true);
        }}
        title={'Fiyat'}
        price={'327.000TL'}
        navigateToBuyersScreen={() => {
          navigator(navigation, 'BuyersScreen');
        }}
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 90,
    backgroundColor: Colors.white,
  },
  images: {
    width: '100%',
    height: '100%',
  },
  descText: {
    fontWeight: 'bold',
    fontSize: FontSize(17),
    color: Colors.darkGray,
    marginTop: hp(10),
  },
  descTextFade: {
    fontSize: FontSize(14),
    color: `${Colors.darkGray}50`,
    marginVertical: hp(10),
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: `${Colors.darkGray}13`,
  },
  picker: {
    marginTop: hp(5),
    width: '100%',
    height: hp(60),
  },
  locationText: {
    fontSize: FontSize(15),
    color: Colors.darkGray,
    marginTop: hp(10),
  },
});

export default MyBuyerDetailScreen;
