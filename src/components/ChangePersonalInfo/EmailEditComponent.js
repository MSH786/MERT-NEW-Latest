import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import {FontSize} from '../../constants/Sizes';
import Fonts from '../../constants/Fonts';

//Eye Icon will be added.

const EmailEditComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.mainrect}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.HeadingTitleRect}>
              <Text style={styles.headingtxt}>E-Posta Adresi</Text>
            </View>
          </TouchableOpacity>
          <View style={{width: wp(332), height: hp(35)}}>
            <TextInput style={styles.emailinput} placeholder="abc@gmail.com" />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(332),
    marginTop: hp(15),
    marginBottom: hp(10),
    alignItems: 'center',
  },
  mainrect: {
    width: wp(332),
    borderBottomWidth: hp(1),
    borderColor: Colors.lightGray,
  },
  HeadingTitleRect: {
    width: wp(332),
    height: hp(25),
    paddingHorizontal: wp(4),
  },
  headingtxt: {
    fontSize: FontSize(17),
    fontFamily: Fonts.regular,
    fontWeight: 'normal',
    color: '#3A2D13',
  },
  inputRect: {
    width: wp(332),
  },
  emailinput: {
    fontSize: FontSize(17),
    fontFamily: Fonts.regular,
    fontWeight: 'normal',
    color: '#000',
    height: hp(45),
  },
  txt: {
    fontSize: FontSize(17),
    color: '#F5953C',
  },
});

export default EmailEditComponent;
