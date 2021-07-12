import React from "react";
import { Image, StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { wp, hp } from "../../constants/Dimensions";
import Colors from "../../constants/Colors";
import { BlurView } from "@react-native-community/blur";
import * as Images from "../../constants/Images";
import { HorizontalSeparatorComponent } from '../../components/seperator/HorizontalSeparatorComponent'
import ButtonComponent from "../../components/button/ButtonComponent";
import CarValuationResultCard from "../../components/card/CarValuationResultCard";
import { useNavigation } from "@react-navigation/core";
import { HeaderDefaultOptions } from "../../navigators/NavigationHeaderOptions";
import { FontSize } from "../../constants/Sizes";

const CarValutationResultScreen = (props) => {

const navigation =useNavigation();

navigation.setOptions(HeaderDefaultOptions('Degerini Ogren',Colors.primary,Colors.white))

  return (
    <View style={styles.container}>

      <View style={styles.header} />

      <CarValuationResultCard style={styles.salesPreviewCard}/>

    </View>
  );
};


export default CarValutationResultScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
  },
  text: {
    fontSize: FontSize(15),
  },
  header: {
    width: "100%",
    height: hp(100),
    backgroundColor: Colors.primary,
  },
  salesPreviewCard: {
    marginTop: wp(-65),
  },
});
