import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { hp, wp } from "../../../constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import HeaderButton from "../HeaderButton";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Colors from "../../../constants/Colors";

const ListingButton = (props) => {

  const { buttonColor, headerColor } = props;

  const navigation = useNavigation();

  const onHandle = () => {
    navigation.goBack();
  };

  return (
    <HeaderButton
      IconFontFamily={MaterialIcons}
      iconName={'filter-list'}
      headerColor={headerColor}
      containerStyle={styles.containerStyle}
      onPress={onHandle}
    />
  );
};

export default ListingButton;

const styles = StyleSheet.create({
  containerStyle: {
    height: wp(32),
    width: wp(32),
    marginLeft: wp(9),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: hp(7),
  },
});


