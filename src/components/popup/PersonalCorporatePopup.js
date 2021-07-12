import React, {useState} from 'react';

import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import { wp, hp } from '../../constants/Dimensions'
import BireyselIcon from '../../../assets/icons/BireyselIcon';
import TextComponent from '../text/TextComponent';
import {translate} from '../../utils/translationHelpers';
import KurumsalIcon from '../../../assets/icons/KurumsalIcon';
const Popup = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.row}>
              <BireyselIcon />
              <TextComponent bold style={{marginLeft: 10}}>
                {translate('personal')}
              </TextComponent>
            </TouchableOpacity>
            <View style={styles.orLineContainer}>
              <View style={styles.line} />
              <TextComponent color="#3A2D13">veya</TextComponent>
              <View style={styles.line} />
            </View>
            <TouchableOpacity style={styles.row}>
              <KurumsalIcon />
              <TextComponent bold style={{marginLeft: 10}}>
                {translate('as_company')}
              </TextComponent>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    // padding: hp(2),
    justifyContent: 'center',
    width: wp(50),
    height: hp(33),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 13,
    width: wp(40),
    height: hp(10),
  },
  orLineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: wp(100),
    marginVertical: 20,
    // marginTop: 20,
  },
  line: {
    width: wp(14),
    marginHorizontal: 10,
    backgroundColor: '#3A2D13',
    height: 1,
  },
});

export default Popup;
