import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import {HeaderDefaultOptions} from '../../navigators/NavigationHeaderOptions';
//Component
import CarBody from '../../components/carBody/CarBody';
import CarBodyColor from '../../components/carBody/CarBodyColor';
import FilterDropDown from '../../components/dropDownSelector/FilterDropDown';
import CheckBox from '../../components/checkBox/CheckBox';

//DummyData
import {YilData} from '../../data/data';

const InspectionReportScreen = props => {
  const [tramer, setTramer] = useState('');
  const [checkBox, setCheckBox] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [selectedSvg, setSelectedSvg] = useState(0);
  const [colorCarFront, setColorCarFront] = useState('#979287');
  const [colorCarBack, setColorCarBack] = useState('#979287');
  const [colorCarLeftFrontTyre, setColorCarLeftFrontTyre] = useState('#979287');
  const [colorCarLeftBackTyre, setColorCarLeftBackTyre] = useState('#979287');
  const [colorCarLeftBackDoor, setColorCarLeftBackDoor] = useState('#979287');
  const [colorCarLeftFrontDoor, setColorCarLeftFrontDoor] = useState('#979287');
  const [colorCarRightFrontTyre, setColorCarRightFrontTyre] = useState('#979287');
  const [colorCarRightBackTyre, setColorCarRightBackTyre] = useState('#979287');
  const [colorCarRightBackDoor, setColorCarRightBackDoor] = useState('#979287');
  const [colorCarRightFrontDoor, setColorCarRightFrontDoor] = useState('#979287');
  const [BonutColor, setBonutColor] = useState('#979287');
  const [TailGateColor, setTailGateColor] = useState('#979287');
  const [RoofColor, setRoofColor] = useState('#979287');
  const navigation = useNavigation();

  navigation.setOptions(
    HeaderDefaultOptions('Ekspertiz Raporu', Colors.white, Colors.darkGray),
  );
  const onPressColor = color => {
    if (selectedSvg === 1) {
      setColorCarFront(color);
    } else if (selectedSvg === 2) {
      setColorCarLeftFrontTyre(color);
    } else if (selectedSvg === 3) {
      setColorCarLeftBackTyre(color);
    } else if (selectedSvg === 4) {
      setColorCarLeftBackDoor(color);
    } else if (selectedSvg === 5) {
      setColorCarLeftFrontDoor(color);
    } else if (selectedSvg === 6) {
      setBonutColor(color);
    } else if (selectedSvg === 7) {
      setTailGateColor(color);
    } else if (selectedSvg === 8) {
      setRoofColor(color);
    } else if (selectedSvg === 9) {
      setColorCarBack(color);
    } else if (selectedSvg === 10) {
      setColorCarRightFrontTyre(color);
    } else if (selectedSvg === 11) {
      setColorCarRightBackTyre(color);
    } else if (selectedSvg === 12) {
      setColorCarRightBackDoor(color);
    } else if (selectedSvg === 13) {
      setColorCarRightFrontDoor(color);
    }
    setModalShow(false);
  };

  return (
    <>
      <View style={styles.container}>
        <CarBody
          onPressCarFront={() => {
            setSelectedSvg(1);
            setModalShow(true);
          }}
          carFronColor={colorCarFront}
          FrontTyreColorLeft={colorCarLeftFrontTyre}
          onPressFrontTyreLeft={() => {
            setSelectedSvg(2);
            setModalShow(true);
          }}
          BackTyreColorLeft={colorCarLeftBackTyre}
          onPressBackTyreLeft={() => {
            setSelectedSvg(3);
            setModalShow(true);
          }}
          BackDoorColorLeft={colorCarLeftBackDoor}
          onPressBackDoorLeft={() => {
            setSelectedSvg(4);
            setModalShow(true);
          }}
          FrontDoorColorLeft={colorCarLeftFrontDoor}
          onPressFronDoorLeft={() => {
            setSelectedSvg(5);
            setModalShow(true);
          }}
          OnPressBonut={() => {
            setSelectedSvg(6);
            setModalShow(true);
          }}
          BonutColor={BonutColor}
          onPressTailGate={() => {
            setSelectedSvg(7);
            setModalShow(true);
          }}
          TailGateColor={TailGateColor}
          onPressRoofColor={() => {
            setSelectedSvg(8);
            setModalShow(true);
          }}
          RoofColor={RoofColor}
          carBackColor={colorCarBack}
          onPressCarBack={() => {
            setSelectedSvg(9);
            setModalShow(true);
          }}
          FrontTyreColorRight={colorCarRightFrontTyre}
          BackTyreColorRight={colorCarRightBackTyre}
          BackDoorColorRight={colorCarRightBackDoor}
          FrontDoorColorRight={colorCarRightFrontDoor}
          onPressFrontTyreRight={() => {
            setSelectedSvg(10);
            setModalShow(true);
          }}
          onPressBackTyreRight={() => {
            setSelectedSvg(11);
            setModalShow(true);
          }}
          onPressBackDoorRight={() => {
            setSelectedSvg(12);
            setModalShow(true);
          }}
          onPressFronDoorRight={() => {
            setSelectedSvg(13);
            setModalShow(true);
          }}
        />
        <CarBodyColor />
        <FilterDropDown
          title={'Takas'}
          value={tramer}
          Data={YilData}
          onValueChange={itemValue => setTramer(itemValue)}
        />
        <CheckBox
          mainDescription={'Bu aracın tüm parçaları orijinal ve boyasız.'}
          lowerDescription={
            'Bu expertiz raporu kullanıcı tarafından oluşturulmuştur.'
          }
          checkBoxVisivle={checkBox}
          onPressCheckBox={() => {
            setCheckBox(!checkBox);
          }}
        />
      </View>
      <Modal visible={modalShow} transparent>
        <View style={styles.modalMainView}>
          <View style={styles.middleView}>
            <Text style={{textAlign: 'center', marginBottom: 20}}>
              Select Color
            </Text>
            <TouchableOpacity
              onPress={() => {
                onPressColor('#7EC07B');
              }}
              style={styles.itemPressView}>
              <View style={styles.dotColor}></View>
              <Text>Orijinal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onPressColor('#F6B23D');
              }}
              style={styles.itemPressView}>
              <View
                style={[styles.dotColor, {backgroundColor: '#F6B23D'}]}></View>
              <Text>Boyalı</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onPressColor('#7BBFE9');
              }}
              style={styles.itemPressView}>
              <View
                style={[styles.dotColor, {backgroundColor: '#7BBFE9'}]}></View>
              <Text>Lokal Boyalı</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onPressColor('#DC6070');
              }}
              style={styles.itemPressView}>
              <View
                style={[styles.dotColor, {backgroundColor: '#DC6070'}]}></View>
              <Text>Değişmiş</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onPressColor('#8A8D91');
              }}
              style={styles.itemPressView}>
              <View
                style={[styles.dotColor, {backgroundColor: '#8A8D91'}]}></View>
              <Text>Belirtilmemiş</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default InspectionReportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
  modalMainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000040',
  },
  middleView: {
    width: '80%',
    height: hp(400),
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotColor: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: '#7EC07B',
    marginRight: 5,
  },
  itemPressView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  threeDotView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
});
