import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { hp, wp } from "../../constants/Dimensions";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import { FontSize } from "../../constants/Sizes";

const CountDownKmComponent = (props) => {
  const [value, setValue] = React.useState(parseInt(props.value));

  const onChange = (value) => {
    if (value >= 1000 && value <= 900000) {
      setValue(value);
      if (props.onPress)
        props.onPress(value);
    }
  };

  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.clickViewLeft} onPress={() => onChange(value + 1000)}>
        <Text style={[styles.clickText]}>+</Text>
      </TouchableOpacity>

      <Text style={styles.text}>{value.toLocaleString()} {props.unit}</Text>

      <TouchableOpacity style={styles.clickViewRight} onPress={() => onChange(value - 1000)}>
        <Text style={styles.clickText}>-</Text>
      </TouchableOpacity>

    </View>
  );
};

export default CountDownKmComponent;

const styles = StyleSheet.create({
  container: {
    height: hp(44),
    width: wp(330),
    backgroundColor: Colors.lightGray,
    borderRadius: hp(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  text: {
    fontSize: FontSize(17),
    fontFamily: Fonts.bold,
    fontWeight: "400",
    color: Colors.headerTitle,
    marginBottom: hp(5),
  },
  clickViewLeft: {
    height: hp(44),
    width: wp(50),
    backgroundColor: Colors.primary,
    borderTopLeftRadius: hp(6),
    borderBottomLeftRadius: hp(6),
    justifyContent: "center",
    alignItems: "center",
  },
  clickViewRight: {
    height: hp(44),
    width: wp(50),
    backgroundColor: Colors.primary,
    borderTopRightRadius: hp(6),
    borderBottomRightRadius: hp(6),
    justifyContent: "center",
    alignItems: "center",
  },
  clickText: {
    fontSize: FontSize(26),
    fontFamily: Fonts.bold,
    fontWeight: "600",
    color: Colors.white,
  },
});
