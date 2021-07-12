import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Image,
} from 'react-native';
import Fonts from '../../constants/Fonts';
import {wp, hp} from '../../constants/Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import {FontSize} from '../../constants/Sizes';
import LinkIcon from '../../../assets/icons/LinkIcon';
import LinkIconOrangeColor from '../../../assets/icons/LinkIconOrangeColor';

const ProfileScreenModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text> Profile Screen Modal Component </Text>
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
                <View style={styles.mainRect}>
                  <View style={styles.FrirstRectIconAndText}>
                    <View style={styles.closeIconRect}>
                      <Ionicons
                        size={20}
                        color="rgba(58, 45, 19, 0.5)"
                        name={'close'}
                      />
                    </View>
                    <View style={styles.TitleTextRect}>
                      <Text style={styles.TitleText}>Yardim</Text>
                    </View>
                  </View>
                  <View style={styles.SelectRect}>
                    <View style={styles.SelectTextRect}>
                      <Text style={styles.SelectcategoryText}>
                        Kategori Seçiniz
                      </Text>
                    </View>
                    <View style={styles.DownIconRect}>
                      <Ionicons
                        size={20}
                        color="#3A2D13"
                        name={'chevron-down'}
                      />
                    </View>
                  </View>
                  <View style={styles.InputTypeRect}>
                    <TextInput style={styles.textinputtype} />
                    <View style={styles.BotttomLinkIconRectinInputRect}>
                      <Image
                        source={require('../../../assets/icons/linkIconOnImage.png')}></Image>
                    </View>
                  </View>
                </View>
                <View style={styles.DateAndTimeMainRect}>
                  <View style={styles.DateAndTimeRect}>
                    <View style={styles.BottomCloseIconRect}>
                      <Ionicons
                        size={20}
                        color="rgba(58, 45, 19, 0.5)"
                        name={'close'}
                      />
                    </View>
                    <View style={styles.BottomLinkIconRect}>
                      <Image
                        source={require('../../../assets/icons/orangeLinkIcon.png')}></Image>
                    </View>
                    <View style={styles.DateTimeTextRect}>
                      <Text style={styles.DateAndTimeText}>
                        Ekran Resmi 2021-05-12 18.19.23
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.BottomTextRect}>
                  <Text style={styles.txtRect}>Tamam</Text>
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
    width: wp(317),
    height: hp(330),
    backgroundColor: '#fff',
    paddingHorizontal: wp(10),
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
  mainRect: {
    width: wp(281),
    height: hp(252),
  },
  FrirstRectIconAndText: {
    width: wp(278),
    flexDirection: 'row',
    marginTop: hp(16),
  },
  closeIconRect: {
    width: wp(33),
    justifyContent: 'center',
  },
  TitleTextRect: {
    width: wp(245),
    justifyContent: 'center',
  },
  TitleText: {
    fontSize: FontSize(15),
    fontFamily: Fonts.regular,
    fontWeight: 'bold',
    color: '#3A2D13',
  },
  SelectRect: {
    width: wp(278),
    flexDirection: 'row',
    borderBottomWidth: hp(1),
    paddingBottom: hp(5),
    borderColor: Colors.lightGray,
    marginTop: hp(8),
  },
  SelectTextRect: {
    width: wp(248),
    justifyContent: 'center',
  },
  SelectcategoryText: {
    fontSize: FontSize(14),
    fontFamily: Fonts.regular,
    fontWeight: 'normal',
    color: '#3A2D13',
  },
  DownIconRect: {
    width: wp(30),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  InputTypeRect: {
    width: wp(281),
    height: hp(148),
    borderRadius: wp(14),
    marginTop: hp(12),
    backgroundColor: '#E5DECE',
  },
  textinputtype: {
    width: wp(281),
    height: hp(98),
    borderRadius: hp(14),
    textAlign: 'left',
    paddingLeft: wp(9),
    fontSize: wp(15),
    fontWeight: '400',
    color: Colors.darkGray,
    letterSpacing: -0.3,
  },
  BotttomLinkIconRectinInputRect: {
    height: hp(50),
    width: wp(281),
    paddingHorizontal: wp(16),
    marginBottom: 0,
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'center',
    bottom: 0,
  },
  DateAndTimeMainRect: {
    width: wp(317),
    borderBottomWidth: hp(1),
    borderColor: Colors.lightGray,
    paddingBottom: hp(10),
    marginTop: hp(0),
    alignItems: 'center',
  },
  DateAndTimeRect: {
    width: wp(278),
    flexDirection: 'row',
  },
  BottomCloseIconRect: {
    width: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  BottomLinkIconRect: {
    width: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  DateTimeTextRect: {
    width: wp(238),
    justifyContent: 'center',
    paddingHorizontal: wp(5),
  },
  DateAndTimeText: {
    fontSize: FontSize(14),
    fontFamily: Fonts.regular,
    fontWeight: 'normal',
    color: '#3A2D13',
    letterSpacing: -0.3,
  },
  BottomTextRect: {
    width: wp(281),
    alignItems: 'center',
    marginTop: hp(5),
    justifyContent: 'center',
  },
  txtRect: {
    fontSize: FontSize(16),
    fontFamily: Fonts.regular,
    fontWeight: 'normal',
    color: '#F5953C',
    letterSpacing: -0.3,
  },
});

export default ProfileScreenModalComponent;
