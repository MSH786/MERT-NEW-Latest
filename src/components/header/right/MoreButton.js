import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { hp, wp } from "../../../constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import HeaderButton from "../HeaderButton";
import Feather from "react-native-vector-icons/Feather";
import Colors from "../../../constants/Colors";
import TouchableComponent from "../../custom/TouchableComponent";

const MoreButton = (props) => {

  const { buttonColor, headerColor } = props;

  const navigation = useNavigation();

  const onHandle = () => {

  };

  return (
    <TouchableOpacity style={[styles.container,]} onPress={onHandle}>
      <Feather size={wp(21)} color={Colors.lightGray} name={'more-vertical'} />
    </TouchableOpacity>
  );
};

export default MoreButton;

const styles = StyleSheet.create({
  container: {
    marginLeft: wp(0),
    marginRight: wp(9),
    height: wp(32),
    width: wp(20),
    justifyContent:'center',
    alignItems:'center',
  }
});


