import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Fonts from '../../constants/Fonts';
import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import {FontSize} from '../../constants/Sizes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StarIconOrangeColor from '../../../assets/icons/StarIconOrangeColor';

const HomeScreenModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text> Home Screen Modal Component </Text>
      </TouchableOpacity>

      {/*Modal start*/}
      <TouchableOpacity
        onPress={() => {
          setModalVisible(false);
        }}>
        <View
          style={styles.centeredView}
          onPress={() => {
            setModalVisible(false);
          }}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.LogoRect}>
                  <Image
                    source={require('../../../assets/images/logoWhite.png')}
                    style={styles.LogoImg}
                  />
                </View>
                <View style={styles.TitleTextRect}>
                  <Text style={styles.titleText}>
                    Düşünceleriniz bizim için önemli.
                  </Text>
                </View>
                <View style={styles.StarsIconsRect}>
                  <View style={{marginHorizontal: wp(3)}}>
                    <StarIconOrangeColor />
                  </View>
                  <View style={{marginHorizontal: wp(3)}}>
                    <StarIconOrangeColor />
                  </View>
                  <View style={{marginHorizontal: wp(3)}}>
                    <StarIconOrangeColor />
                  </View>
                  <View style={{marginHorizontal: wp(3)}}>
                    <StarIconOrangeColor />
                  </View>
                  <View style={{marginHorizontal: wp(3)}}>
                    <StarIconOrangeColor />
                  </View>
                </View>
                <View style={styles.subTitleRect}>
                  <Text style={styles.subTitleText}>
                    App Store’da puanlamak için şimdi dokunun.
                  </Text>
                </View>
                <View style={styles.btnTitleTextRect}>
                  <Text style={styles.btnTitleText}>Şimdi Değil</Text>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </TouchableOpacity>
      {/*Modal End*/}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 0,
    width: wp(239),
    height: hp(256),
    backgroundColor: '#4D5156',
    borderRadius: hp(23),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: wp(0),
      height: hp(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 5,
  },
  LogoRect: {
    width: wp(239),
    marginTop: hp(22),
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoImg: {
    width: wp(139),
    height: hp(59),
  },
  TitleTextRect: {
    width: wp(239),
    marginTop: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: FontSize(13),
    fontWeight: 'normal',
    fontFamily: Fonts.regular,
    color: '#A2B1C5',
  },
  StarsIconsRect: {
    width: wp(239),
    marginTop: hp(15),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subTitleRect: {
    width: wp(239),
    marginTop: hp(8),
    alignItems: 'center',
    paddingHorizontal: wp(45),
    justifyContent: 'center',
  },
  subTitleText: {
    fontSize: FontSize(13),
    fontWeight: 'normal',
    textAlign: 'center',
    fontFamily: Fonts.regular,
    color: '#A2B1C5',
  },
  btnTitleTextRect: {
    width: wp(168),
    height: hp(21),
    marginTop: hp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTitleText: {
    fontSize: FontSize(13),
    fontWeight: 'normal',
    textAlign: 'center',
    fontFamily: Fonts.regular,
    color: '#F5953C',
  },
});

export default HomeScreenModalComponent;
