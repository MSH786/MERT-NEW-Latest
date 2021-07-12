import React from "react";
import { Image, StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { wp, hp } from "../../constants/Dimensions";
import Colors from "../../constants/Colors";
import { BlurView } from "@react-native-community/blur";
import * as Images from "../../constants/Images";
import { HorizontalSeparatorComponent } from '../../components/seperator/HorizontalSeparatorComponent'
import ButtonComponent from "../../components/button/ButtonComponent";
import Fonts from "../../constants/Fonts";
import { FontSize } from "../../constants/Sizes";

const CarValuationResultCard = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        style={styles.blur}
       blurRadius={20.1} />


      <View style={styles.content}>
        <Text style={styles.title}>Jeep</Text>

        <HorizontalSeparatorComponent style={styles.separatorTitle} />

        <Image style={styles.image} source={Images.carJeep} />

        <Text style={styles.subTitle}>Renegade</Text>

        <Text style={styles.description}>
          Jeep Renegade 1.6 Multijet Limited 2019 - Otomatik - 55.000 KM
          </Text>

        <Text style={styles.priceAround}>263.150 - 270.100 TL</Text>

        <HorizontalSeparatorComponent style={[styles.separatorTitle, { backgroundColor: Colors.notiButton }]} />

        <ButtonComponent
          onPress={() => { }}
          title={"Ücretsiz İlan Ver"}
          buttonStyle={styles.button}
          textStyle={styles.cardText}
        />
      </View>
    </View>
  );
};

export default CarValuationResultCard;

const styles = StyleSheet.create({
  container: {
    width: wp(327),
    height: hp(602),
    borderRadius: hp(16),
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: FontSize(60),
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontWeight: "900",
    textAlign: "center",
    marginTop: hp(28),
  },
  subTitle: {
    fontSize: FontSize(21),
    color: Colors.darkGray,
    fontFamily: Fonts.bold,
    fontWeight: "800",
    textAlign: "center",
    marginTop: hp(19),
  },
  description: {
    fontSize: FontSize(16),
    color: Colors.darkGray,
    fontWeight: "400",
    textAlign: "center",
    width: wp(262),
    lineHeight: hp(23),
  },
  priceAround: {
    fontSize: FontSize(27),
    color: Colors.primary,
    fontWeight: "800",
    textAlign: "center",
    marginTop:hp(8),
  },
  image: {
    marginTop: hp(40),
    width: hp(448),
    height: hp(186),
    resizeMode:'contain'
  },
  button: {
    marginTop: hp(23),
    width: hp(219),
    height: hp(44),
  },
  separatorTitle: {
    backgroundColor: Colors.primary,
    width: wp(202),
    height: hp(0.6),
    marginTop: hp(5),
  },
  blur: {
    backgroundColor: "rgba(0, 0, 0, 0.10)",
    borderRadius: hp(16),
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

