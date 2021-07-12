import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import Fonts from '../../constants/Fonts';
import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import {FontSize} from '../../constants/Sizes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreenDocumentIcon from '../../../assets/icons/LoginScreenDocumentIcon';

const LoginScreenModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text> Login Screen Modal Component </Text>
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
                <View style={styles.mainRectTop}>
                  <View style={styles.ManBoxMainRect}>
                    <View style={styles.IconRect}>
                      <Image
                        source={require('../../../assets/icons/man.png')}></Image>
                    </View>
                    <View style={styles.TextRect}>
                      <Text style={styles.TitleText}>Bireysel</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.mainRectCenter}>
                  <View style={styles.horizontalLineMianRect}>
                    <View style={styles.LeftRectContent} />
                    <View>
                      <Text style={styles.centerText}>veya</Text>
                    </View>
                    <View style={styles.RightRectContainer} />
                  </View>
                </View>
                <View style={styles.mainRectBottom}>
                  <View style={styles.DocumentBoxMainRect}>
                    <View style={styles.IconRect}>
                      <Image
                        source={require('../../../assets/icons/documentLoginModel.png')}></Image>
                    </View>
                    <View style={styles.TextRect}>
                      <Text style={styles.TitleText}>Kurumsal</Text>
                    </View>
                  </View>
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
    width: wp(210),
    height: hp(271),
    backgroundColor: '#fff',
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
  mainRectTop: {
    width: wp(210),
    height: hp(120),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ManBoxMainRect: {
    width: wp(171),
    height: hp(92),
    marginTop: hp(10),
    backgroundColor: '#fff',
    elevation: 4,
    borderEndColor: '#eee',
    borderColor: 'white',
    borderRadius: 13,
    flexDirection: 'row',
  },
  DocumentBoxMainRect: {
    width: wp(171),
    height: hp(92),
    marginBottom: hp(10),
    backgroundColor: '#fff',
    elevation: 4,
    borderColor: 'white',
    borderEndColor: '#eee',
    borderRadius: 13,
    flexDirection: 'row',
  },
  IconRect: {
    width: wp(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextRect: {
    width: wp(121),
    justifyContent: 'center',
  },
  TitleText: {
    fontFamily: Fonts.regular,
    fontWeight: 'bold',
    fontSize: FontSize(17),
  },
  mainRectCenter: {
    width: wp(210),
    height: hp(31),
    paddingHorizontal: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalLineMianRect: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  LeftRectContent: {
    flex: 1,
    borderWidth: hp(1),
    borderColor: Colors.lightGray,
  },
  centerText: {
    width: wp(50),
    textAlign: 'center',
    fontFamily: Fonts.regular,
    fontWeight: 'normal',
    fontSize: FontSize(14),
  },
  RightRectContainer: {
    flex: 1,
    borderWidth: hp(1),
    borderColor: Colors.lightGray,
  },
  mainRectBottom: {
    width: wp(210),
    height: hp(120),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreenModalComponent;
