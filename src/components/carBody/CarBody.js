import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { wp, hp } from '../../constants/Dimensions'
import CarBack from '../../../assets/icons/CarBody/CarBack';
import CarFront from '../../../assets/icons/CarBody/CarFront';
import CarLeft from '../../../assets/icons/CarBody/CarLeft';
import CarRight from '../../../assets/icons/CarBody/CarRight';
import CarRoof from '../../../assets/icons/CarBody/CarRoof';

const CarBody = props => {
  const {
    onPressCarFront,
    carFronColor,
    onPressCarBack,
    carBackColor,
    FrontTyreColorLeft,
    onPressFrontTyreLeft,
    onPressBackTyreLeft,
    BackTyreColorLeft,
    BackDoorColorLeft,
    onPressBackDoorLeft,
    onPressFronDoorLeft,
    FrontDoorColorLeft,
    OnPressBonut,
    onPressTailGate,
    onPressRoofColor,
    RoofColor,
    TailGateColor,
    BonutColor,
    FrontTyreColorRight,
    onPressFrontTyreRight,
    onPressBackTyreRight,
    BackTyreColorRight,
    BackDoorColorRight,
    onPressBackDoorRight,
    onPressFronDoorRight,
    FrontDoorColorRight
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.carFrontView}>
        <CarFront onPress={onPressCarFront} color={carFronColor} />
      </View>
      <View style={styles.carMiddleView}>
        <CarLeft
          FrontTyreColor={FrontTyreColorLeft}
          onPressFrontTyre={onPressFrontTyreLeft}
          onPressBackTyre={onPressBackTyreLeft}
          BackTyreColor={BackTyreColorLeft}
          BackDoorColor={BackDoorColorLeft}
          onPressBackDoor={onPressBackDoorLeft}
          onPressFronDoor={onPressFronDoorLeft}
          FrontDoorColor={FrontDoorColorLeft}
        />
        <CarRoof
          OnPressBonut={OnPressBonut}
          BonutColor={BonutColor}
          onPressTailGate={onPressTailGate}
          TailGateColor={TailGateColor}
          onPressRoofColor={onPressRoofColor}
          RoofColor={RoofColor}
        />
        <CarRight
          FrontTyreColor={FrontTyreColorRight}
          onPressFrontTyre={onPressFrontTyreRight}
          onPressBackTyre={onPressBackTyreRight}
          BackTyreColor={BackTyreColorRight}
          BackDoorColor={BackDoorColorRight}
          onPressBackDoor={onPressBackDoorRight}
          onPressFronDoor={onPressFronDoorRight}
          FrontDoorColor={FrontDoorColorRight}
        />
      </View>
      <View style={styles.carFrontView}>
        <CarBack onPress={onPressCarBack} color={carBackColor} />
      </View>
    </View>
  );
};

export default CarBody;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  carFrontView: {
    width: '100%',
    alignItems: 'center',
  },
  carMiddleView: {
    marginVertical: 10,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});
