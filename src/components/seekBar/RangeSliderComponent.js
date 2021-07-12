import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Colors from '../../constants/Colors';
import {VerticalSeparatorComponent} from '../seperator/VerticalSeparatorComponent';
import {FontSize} from '../../constants/Sizes';
import Fonts from '../../constants/Fonts';

const RangeSliderComponent = props => {
  const {
    title,
    minValue,
    maxValue,
    TrackOneValue,
    TrackTwoValue,
    containerStyle,
    onChangeValues,
  } = props;
  const [multiSliderValue, setMultiSliderValue] = useState([
    TrackOneValue,
    TrackTwoValue,
  ]);

  const multiSliderValuesChange = values => {
    onChangeValues(values);
    setMultiSliderValue(values);
  };

  const CustomSliderMarkerLeft = ({currentValue}) => {
    return (
      <View>
        <Text style={[styles.label]}>{numberWithCommas(currentValue)}</Text>
        <VerticalSeparatorComponent style={styles.verticalSeperator} />
        <View style={touchDimensions} />
      </View>
    );
  };

  const CustomSliderMarkerRight = ({currentValue}) => {
    return (
      <View>
        <Text style={[styles.label]}>{numberWithCommas(currentValue)}</Text>
        <VerticalSeparatorComponent style={styles.verticalSeperator} />
        <View style={touchDimensions} />
      </View>
    );
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return (
    <View style={[styles.container, {containerStyle}]}>
      <Text style={styles.title}>{title}</Text>
      <MultiSlider
        containerStyle={styles.multiSliderContent}
        markerStyle={markerStyle}
        pressedMarkerStyle={pressedMarkerStyle}
        selectedStyle={styles.selectedStyle}
        trackStyle={styles.trackStyle}
        touchDimensions={touchDimensions}
        values={[multiSliderValue[0], multiSliderValue[1]]}
        sliderLength={wp(300)}
        onValuesChange={multiSliderValuesChange}
        min={minValue}
        max={maxValue}
        allowOverlap={false}
        minMarkerOverlapDistance={60}
        isMarkersSeparated={true}
        customMarkerLeft={e => {
          return <CustomSliderMarkerLeft currentValue={e.currentValue} />;
        }}
        customMarkerRight={e => {
          return <CustomSliderMarkerRight currentValue={e.currentValue} />;
        }}
      />
    </View>
  );
};

export default RangeSliderComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:hp(22),
   
  },
  multiSliderContent: {
    width: wp(300),
    marginTop:hp(40)
  },
  title: {
    width: '100%',
    color: Colors.softGray,
    fontFamily:Fonts.bold,
    fontSize: FontSize(15),
    alignItems: 'flex-start',
  },
  label: {
    position: 'absolute',
    color: Colors.darkGray,
    fontWeight: '400',
    fontSize: FontSize(15),
    top: hp(-38),
    left: wp(-35),
    width: wp(100),
    textAlign: 'center',
  },
  markerStyle: {
    backgroundColor: Colors.marker,
    shadowOpacity: 0,
    borderWidth: 0,
  },
  trackStyle: {
    backgroundColor: Colors.markerUnSelect,
    height: 1.2,
  },
  selectedStyle: {
    backgroundColor: Colors.marker,
  },
  verticalSeperator: {
    backgroundColor: Colors.marker,
    position: 'absolute',
    width: 1.5,
    height: hp(8),
    marginTop: hp(-12),
    marginLeft: wp(14),
  },
});

const markerStyle = {
  ...Platform.select({
    ios: {
      height: 30,
      width: 30,
      shadowOpacity: 0,
      backgroundColor: Colors.marker,
      borderWidth: 0,
    },
    android: {
      height: 30,
      width: 30,
      borderRadius: 50,
      backgroundColor: Colors.marker,
      borderWidth: 0,
    },
  }),
};

const pressedMarkerStyle = {
  ...Platform.select({
    android: {
      height: 30,
      width: 30,
      borderRadius: 20,
      backgroundColor: Colors.marker,
    },
  }),
};

const touchDimensions = {
  height: wp(30),
  width: wp(30),
  borderRadius: 20,
  backgroundColor: 'rgba(245, 149, 60, 0.7)',
  slipDisplacement: 40,
};
