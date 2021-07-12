import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

import {useTheme} from '@react-navigation/native';
import {translate} from '../utils/translationHelpers';
import BottomSheetPopup from '../components/popup/BottomSheetPopup';
import FloatingButtonComponent from '../components/button/FloatingButtonComponent';
import Colors from '../constants/Colors';
import RangeSliderComponent from '../components/seekBar/RangeSliderComponent';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/actions/auth';


const TestScreen = props => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const testState = useSelector(state => state.auth.loginLoading);

  console.log(testState, 'H')

  return (
    <>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.bg,
          marginTop: 40,
          width: 200,
          height: 200,
        }}>
        <Text>{translate('hello_world')}</Text>
      </TouchableOpacity>
      <Button title='HEYYO' onPress={() => dispatch(login('Hello from login screen.'))} />
      <RangeSliderComponent
        minValue={10000}
        maxValue={100000}
        TrackOneValue={19000}
        TrackTwoValue={97000}
        onChangeValues={([TrackOneValue, TrackTwoValue]) => {}}
      />
    </>
  );
};
const styles = StyleSheet.create({});

export default TestScreen;
