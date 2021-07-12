import React from 'react'
import { Image, View } from 'react-native'
import { CommonActions } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import {HeaderCustomOptions} from '../navigators/NavigationHeaderOptions';
import {useNavigation} from '@react-navigation/native';
import Colors from '../constants/Colors';

const WheelScreen = (props) => {
    const navigation = useNavigation();

    navigation.setOptions(
      HeaderCustomOptions(
        '',
        Colors.primary,
        Colors.white,
        ['Back'],
        ['Point'],
      ),
    );

    const dispatch = useDispatch()

    return (
        <View >
            
        </View>
    )
}

export default WheelScreen


