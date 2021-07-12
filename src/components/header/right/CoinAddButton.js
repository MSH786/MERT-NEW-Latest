import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { hp, wp } from "../../../constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import HeaderButton from "../HeaderButton";
import Feather from "react-native-vector-icons/Feather";
import Colors from "../../../constants/Colors";
import { VerticalSeparatorComponent } from '../../seperator/VerticalSeparatorComponent'
import * as Icons from '../../../constants/Icons'
import { selectBackgroundColor, selectIconColor } from "../HeaderTheme";
import { FontSize } from "../../../constants/Sizes";

const CoinAddButton = (props) => {

  const { buttonColor, headerColor } = props;

  const navigation = useNavigation();

  const onHandle = () => {

  };

  return (
    <View style={[{ backgroundColor: selectBackgroundColor(headerColor) }, styles.container]}>
      <Text style={styles.text}>132</Text>

      <Image style={styles.image} source={Icons.studioCoin} />

      <VerticalSeparatorComponent style={styles.seperator} />

      <TouchableOpacity style={styles.icon}>
        <Feather name={'plus'} size={wp(18)} color={selectIconColor(headerColor)} />
      </TouchableOpacity>
    </View>
  );
};

export default CoinAddButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: wp(32),
    width: wp(105),
    marginRight: wp(9),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: hp(7),

  },
  seperator: {
    height: wp(32),
    marginRight: wp(19),
    backgroundColor: Colors.white90,
  },
  text: {
    fontSize: FontSize(21),
    fontWeight: "800",
    color: Colors.white,
    marginRight: wp(3),
  },
  icon: {
    position: 'absolute',
    right: 0,
    height: wp(28),
    width: wp(28),

    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    marginRight: wp(5),
  }
});


