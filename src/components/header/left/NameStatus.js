import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { hp, wp } from "../../../constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import HeaderButton from "../HeaderButton";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Colors from "../../../constants/Colors";
import { FontSize } from "../../../constants/Sizes";

const NameStatus = (props) => {

  const { buttonColor, headerColor } = props;

  const navigation = useNavigation();

  const onHandle = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.title}>Büşra Acar</Text>
      <Text style={styles.subTitle}>Çevrimiçi</Text>
    </View>
  );
};

export default NameStatus;

const styles = StyleSheet.create({
  containerStyle: {
    height: wp(32),
    width: wp(120),
    marginLeft: wp(9),
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: hp(7),
  },
  title: {
    fontSize: FontSize(17),
    fontWeight: '800',
    color: Colors.darkGray,
  },
  subTitle: {
    fontSize: FontSize(13),
    fontWeight: '400',
    color: Colors.darkGray,
    marginTop:hp(-5)
  }
});


