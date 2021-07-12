import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { hp, wp } from "../../../constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import HeaderButton from "../HeaderButton";
import Feather from "react-native-vector-icons/Feather";
import Colors from "../../../constants/Colors";
import { VerticalSeparatorComponent } from '../../seperator/VerticalSeparatorComponent'
import * as Icons from '../../../constants/Icons'
import { selectBackgroundColor } from "../HeaderTheme";
import { FontSize } from "../../../constants/Sizes";

const CoinButton = (props) => {

  const { buttonColor, headerColor } = props;

  const navigation = useNavigation();

  const onHandle = () => {

  };

  return (
    <View style={[{ backgroundColor: selectBackgroundColor(headerColor) }, styles.container]}>
      <Text style={styles.text}>132</Text>

      <Image style={styles.image} source={Icons.marketCoin} />
    </View>
  );
};

export default CoinButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: wp(32),
    width: wp(71),
    marginRight: wp(9),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: hp(7),

  },
  text: {
    fontSize: FontSize(17),
    fontWeight: "800",
    color: Colors.darkGray,
    marginRight: wp(5),
  },

  image: {
    marginRight: wp(5),
  }
});

