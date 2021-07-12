import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { hp, wp } from "../../constants/Dimensions";
import { dataCities } from "../../data/data";
import ValuationDropDown from "../dropDownSelector/ValuationDropDown";

const CarValuationItem = ({ item }) => {
  return (
    <View style={styles.container}>
    
      

        <ValuationDropDown
          style={styles.picker}
          title={item.title}
          value={item.value}
          data={dataCities}
          placeHolder={item.title}
          data={item.data}
          onValueChange={() => {
          }} />

    </View>
  );
};

export default CarValuationItem;

const styles = StyleSheet.create({
  container: {
    height: hp(55),
    width: wp(301),
    marginLeft: wp(14),
    marginRight: wp(14),
    marginTop: hp(5),
  },
  content: {
    justifyContent: "center",
  },
  picker: {
    height: hp(25),
    width: wp(300),
  },
});
