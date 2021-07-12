import React from "react";
import { StyleSheet, Text } from "react-native";
import { hp, wp } from "../../../constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import HeaderButton from "../HeaderButton";
import Feather from "react-native-vector-icons/Feather";
import Colors from "../../../constants/Colors";
import TouchableComponent from "../../custom/TouchableComponent";
import { FontSize } from "../../../constants/Sizes";

const DoneButton = (props) => {

  const { buttonColor, headerColor } = props;

  const navigation = useNavigation();

  const onHandle = () => {

  };

  return (
    <TouchableComponent style={styles.container} onPress={onHandle}>
      <Text style={styles.text}>Bitti</Text>
    </TouchableComponent>
  );
};

export default DoneButton;

const styles = StyleSheet.create({
  container: {
    marginLeft: wp(0),
    marginRight: wp(9),
    justifyContent:'center'
  },
  text: {
    fontSize: FontSize(15),
    fontWeight: "400",
    color: Colors.primary
  }
});


