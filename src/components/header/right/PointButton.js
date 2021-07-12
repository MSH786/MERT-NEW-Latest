import React from "react";
import { StyleSheet, TouchableOpacity, View,Text } from "react-native";
import { hp, wp } from "../../../constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import HeaderButton from "../HeaderButton";
import Feather from "react-native-vector-icons/Feather";
import Colors from "../../../constants/Colors";
import { selectBackgroundColor } from "../HeaderTheme";
import { FontSize } from "../../../constants/Sizes";

const PointButton = (props) => {

  const { buttonColor, headerColor } = props;

  const navigation = useNavigation();

  const onHandle = () => {

  };

  return (
    <View style={[{ backgroundColor: selectBackgroundColor(headerColor) }, styles.container]}>
      <Text style={styles.text}>200 Puan</Text>
    </View>
  );
};

export default PointButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: wp(32),
    width: wp(106),
    marginRight: wp(9),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: hp(7),
  },
  text: {
    fontSize: FontSize(17),
    fontWeight: "600",
    color: Colors.white,
    marginRight: wp(5),
  },
});


