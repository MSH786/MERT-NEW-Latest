import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import HeaderTitle from '../header/HeaderTitle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import TextInputFloatingTitle from '../input/TextInputFloatingTitle';
import {FontSize} from '../../constants/Sizes';
import ButtonComponent from '../button/ButtonComponent';
const BottomForm = props => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const {onPressBack} = props;
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onPressBack} style={styles.backButton}>
            <Ionicons
              size={wp(16)}
              style={{color: Colors.white}}
              name={'chevron-back'}
            />
          </TouchableOpacity>
          <HeaderTitle title={'Başvuru Formu'} color={Colors.darkGray} />
        </View>
        <View style={styles.contentContainer}>
          <TextInputFloatingTitle
            title={'Ad'}
            placeholder={'XXXXXXXX'}
            value={'Mert'}
          />
          <TextInputFloatingTitle
            title={'Soyad'}
            placeholder={'XXXXXXXX'}
            value={'Candaş'}
          />
          <TextInputFloatingTitle
            title={'TC Kimlik No'}
            placeholder={'XXXXXXXX'}
            value={'54338865925'}
          />
          <TextInputFloatingTitle
            title={'Eposta Adresi'}
            placeholder={'XXXXXXXX'}
            value={'mertcandas@gmail.com'}
          />
          <TextInputFloatingTitle
            title={'Cep Telefonu'}
            placeholder={'XXXXXXXX'}
            value={'530 700 00 00'}
          />
          <View style={styles.checkView}>
            <TouchableOpacity
              onPress={() => {
                setCheck1(!check1);
              }}
              style={styles.checkBox}>
              {!!check1 && (
                <Ionicons
                  size={wp(9)}
                  style={{color: Colors.homeItem}}
                  name={'md-checkmark-sharp'}
                />
              )}
            </TouchableOpacity>
            <Text style={styles.checkText}>
              Diğer bankalardan teklif almak istiyorum.
            </Text>
          </View>
          <View style={styles.checkView}>
            <TouchableOpacity
              onPress={() => {
                setCheck2(!check2);
              }}
              style={styles.checkBox}>
              {!!check2 && (
                <Ionicons
                  size={wp(9)}
                  style={{color: Colors.homeItem}}
                  name={'md-checkmark-sharp'}
                />
              )}
            </TouchableOpacity>
            <Text style={styles.checkText}>
              <Text style={{color: Colors.primary}}>
                Kullanıcı sözleşmesini
              </Text>{' '}
              okudum, anladım ve kabul ediyorum.
            </Text>
          </View>
          <Text style={styles.descText}>
            Kişisel bilgileriniz başvuru talebinizin iletilmesi ve alternatif
            teklifler sunulması için işlenmek üzere değerlendirme sürecinde
            kredi tahsis edecek bankalarla paylaşılacaktır.
          </Text>
          <Text style={styles.descText}>
            Kişisel verilerin işlenmesi ile alakalı aydınlatma metnine{' '}
            <Text style={{color: Colors.primary}}>buradan</Text>{' '}
            ulaşabilirsiniz.
          </Text>
          <ButtonComponent
            title={'Başvuruyu Tamamla'}
            buttonStyle={styles.button}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default BottomForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:hp(20)
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: hp(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(20),
  },
  backButton: {
    backgroundColor: Colors.darkBack,
    height: wp(32),
    width: wp(32),
    marginLeft: wp(22),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(7),
  },
  checkView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(5),
  },
  checkBox: {
    width: hp(14),
    height: hp(14),
    borderRadius: hp(2),
    borderWidth: 1,
    borderColor: Colors.homeItem,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkText: {
    fontSize: FontSize(15),
    marginLeft: wp(10),
    color: Colors.darkGray,
    fontWeight: '800',
  },
  descText: {
    fontWeight: '800',
    fontSize: FontSize(13),
    color: Colors.homeItem,
    marginTop: hp(10),
  },
  button: {
    height: hp(42),
    width: wp(231),
    marginTop: hp(20),
    marginBottom: hp(40),
  },
});
