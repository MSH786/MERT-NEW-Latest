import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import Fonts from '../../constants/Fonts';
import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';

const InputScreenModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text> Input Screen Modal Component </Text>
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
                <View
                  style={{
                    flex: 1,
                    width: wp(239),
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: wp(162),
                      marginTop: hp(22),
                      alignItems: 'center',
                    }}>
                    <Text style={styles.modalheadingtitle}>E-Postani</Text>
                    <Text style={styles.modalheadingtitle}>Kontrol-Et</Text>
                  </View>
                  <View
                    style={{
                      width: wp(198),
                      marginTop: hp(10),
                      alignItems: 'center',
                    }}>
                    <Text style={styles.modalheadingsubtitle}>
                      E-postanı onaylamak için abc@gmail.com adresine
                      gönderdiğimiz bağlantıya tıkla.
                    </Text>
                  </View>
                  {/*border rect*/}
                  <View
                    style={{
                      width: wp(238),
                      borderWidth: 1,
                      marginTop: hp(30),
                      borderColor: Colors.lightGray,
                    }}></View>
                  {/*border End*/}
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(false);
                    }}>
                    <View
                      style={{
                        width: wp(239),
                        alignItems: 'center',
                        marginVertical: hp(8),
                      }}>
                      <Text style={styles.txt}>Tamam</Text>
                    </View>
                  </TouchableOpacity>
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
  //Input Screen Modal Component strat
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 0,
    width: wp(239),
    height: wp(212),
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
  modalheadingtitle: {
    fontSize: wp(17),
    fontFamily: Fonts.regular,
    fontWeight: 'normal',
    textAlign: 'center',
    lineHeight: 23.22,
  },
  modalheadingsubtitle: {
    fontSize: wp(15),
    fontFamily: Fonts.regular,
    fontWeight: 'normal',
    textAlign: 'center',
    lineHeight: 20.68,
  },
  txt: {
    fontSize: wp(17),
    color: '#F5953C',
  },
  //Input Screen Modal Component end
});

export default InputScreenModalComponent;
