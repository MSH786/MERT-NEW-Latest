import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { hp, wp } from "../../../constants/Dimensions";
import TouchableComponent from "../../custom/TouchableComponent";
import * as Icons from '../../../constants/Icons'

const ProfileButtonLeft = (props) => {

  const onHandle = () => {

  };

  return (
    <View style={styles.container}>
      <TouchableComponent  onPress={onHandle}>
        <Image style={styles.images} source={Icons.profileButton} />
      </TouchableComponent>
    </View>
  );
};

export default ProfileButtonLeft;

const styles = StyleSheet.create({
  container: {},
  images: {
    height: wp(32),
    width: wp(32),
    marginLeft: wp(9),
  },
});
