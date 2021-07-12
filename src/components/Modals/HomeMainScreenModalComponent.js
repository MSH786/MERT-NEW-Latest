import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import Fonts from '../../constants/Fonts';
import {wp, hp} from '../../constants/Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import {FontSize} from '../../constants/Sizes';

const HomeMainScreenModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [check, setCheck] = useState(false);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text> Home Main Screen Modal Component </Text>
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
                <View style={styles.FirstHeadingTitleTextRect}>
                  <Text style={styles.HeadingTitleText}>Sıralama</Text>
                </View>
                <View style={styles.SelectCategoryRect}>
                  <View style={styles.CheckBoxIconRect}>
                    <Ionicons
                      size={18}
                      color="#F5953C"
                      name={'checkmark-circle'}
                    />
                  </View>
                  <View style={styles.SelectTextRect}>
                    <Text style={styles.CategoryTitleText}>
                      Fiyata Göre (Önce En Yüksek)
                    </Text>
                  </View>
                </View>
                <View style={styles.SelectCategoryRect}>
                  <View style={styles.CheckBoxIconRect}>
                    <Ionicons
                      size={18}
                      color="#F5953C"
                      name={'radio-button-off'}
                    />
                  </View>
                  <View style={styles.SelectTextRect}>
                    <Text style={styles.CategoryTitleText}>
                      Fiyata Göre (Önce En Düşük)
                    </Text>
                  </View>
                </View>
                <View style={styles.SelectCategoryRect}>
                  <View style={styles.CheckBoxIconRect}>
                    <Ionicons
                      size={18}
                      color="#F5953C"
                      name={'radio-button-off'}
                    />
                  </View>
                  <View style={styles.SelectTextRect}>
                    <Text style={styles.CategoryTitleText}>
                      Tarihe Göre (Önce En Yeni)
                    </Text>
                  </View>
                </View>
                <View style={styles.SelectCategoryRect}>
                  <View style={styles.CheckBoxIconRect}>
                    <Ionicons
                      size={18}
                      color="#F5953C"
                      name={'radio-button-off'}
                    />
                  </View>
                  <View style={styles.SelectTextRect}>
                    <Text style={styles.CategoryTitleText}>
                      Km’ye Göre (Önce En Yüksek)
                    </Text>
                  </View>
                </View>
                <View style={styles.SelectCategoryRect}>
                  <View style={styles.CheckBoxIconRect}>
                    <Ionicons
                      size={18}
                      color="#F5953C"
                      name={'radio-button-off'}
                    />
                  </View>
                  <View style={styles.SelectTextRect}>
                    <Text style={styles.CategoryTitleText}>
                      Km’ye Göre (Önce En Düşük)
                    </Text>
                  </View>
                </View>
                <View style={styles.SelectCategoryRect}>
                  <View style={styles.CheckBoxIconRect}>
                    <Ionicons
                      size={18}
                      color="#F5953C"
                      name={'radio-button-off'}
                    />
                  </View>
                  <View style={styles.SelectTextRect}>
                    <Text style={styles.CategoryTitleText}>
                      Yıla Göre (Önce En Yeni)
                    </Text>
                  </View>
                </View>
                <View style={styles.SelectCategoryRect}>
                  <View style={styles.CheckBoxIconRect}>
                    <Ionicons
                      size={18}
                      color="#F5953C"
                      name={'radio-button-off'}
                    />
                  </View>
                  <View style={styles.SelectTextRect}>
                    <Text style={styles.CategoryTitleText}>
                      Yıla Göre (Önce En Eski)
                    </Text>
                  </View>
                </View>
                <View style={styles.SelectCategoryRectLast}>
                  <View style={styles.CheckBoxIconRect}>
                    <Ionicons
                      size={18}
                      color="#F5953C"
                      name={'radio-button-off'}
                    />
                  </View>
                  <View style={styles.SelectTextRect}>
                    <Text style={styles.CategoryTitleText}>
                      Adrese Göre (A-Z)
                    </Text>
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
    width: wp(298),
    height: hp(468),
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
  FirstHeadingTitleTextRect: {
    width: wp(298),
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingBottom: hp(10),
    marginTop: hp(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeadingTitleText: {
    fontSize: FontSize(18),
    fontFamily: Fonts.regular,
    fontWeight: 'normal',
    color: '#3A2D13',
    letterSpacing: -0.3,
  },
  SelectCategoryRect: {
    width: wp(251),
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingBottom: hp(8),
    marginTop: hp(16),
    flexDirection: 'row',
  },
  SelectCategoryRectLast: {
    width: wp(251),
    paddingBottom: hp(8),
    marginTop: hp(16),
    flexDirection: 'row',
  },
  CheckBoxIconRect: {
    width: wp(24),
    justifyContent: 'center',
  },
  SelectTextRect: {
    width: wp(227),
    justifyContent: 'center',
  },
  CategoryTitleText: {
    fontSize: FontSize(15),
    fontFamily: Fonts.regular,
    fontWeight: 'normal',
    color: '#3A2D13',
    letterSpacing: -0.3,
  },
});

export default HomeMainScreenModalComponent;
