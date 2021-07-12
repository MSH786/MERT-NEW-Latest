import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import HeaderTitle from '../header/HeaderTitle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import {FontSize} from '../../constants/Sizes';
import ButtonComponent from '../button/ButtonComponent';
const BottomLoan = props => {
  const [approved, setApproved] = useState(false);
  const {onPressBack, data} = props;
  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.itemView}>
        <Image style={styles.bankImage} source={item.bankImg} />
        <View style={styles.line} />
        <View style={styles.mainView}>
          <View style={styles.leftView}>
            <Text style={styles.listText}>Toplam Maliyet</Text>
            <Text style={styles.listTextBold}>{`${item.toplam} TL`}</Text>
            <Text style={styles.listText}>Maliyet oranı %1,85</Text>
          </View>
          <View style={styles.middleView}>
            <Text style={styles.listText}>Faiz Oranı</Text>
            <Text style={styles.listTextBold}>{`%${item.faiz}`}</Text>
          </View>
          <View style={styles.rightView}>
            <Text style={styles.listText}>Aylık Taksit</Text>
            <Text style={[styles.listTextBold, {color: Colors.primary}]}>
              {`${item.aylik} TL`}
            </Text>
            <Text style={[styles.listText, {color: Colors.primary}]}>
              Kredi Detayı
            </Text>
          </View>
        </View>
        <ButtonComponent
          onPress={() => {
            setApproved(true);
          }}
          title={'Krediye Başvur'}
          buttonStyle={styles.button}
        />
      </View>
    );
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow:1}}>
      {!approved ? (
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onPressBack} style={styles.backButton}>
              <Ionicons
                size={wp(16)}
                style={{color: Colors.white}}
                name={'chevron-back'}
              />
            </TouchableOpacity>
            <HeaderTitle title={'Kredi Teklifleri'} color={Colors.darkGray} />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.descText}>
              24 Ay Vadeli 75.000 TL kredi için aylık taksite göre sıralanmış 9
              teklif var.
            </Text>
            <FlatList data={data} renderItem={_renderItem} />
          </View>
        </View>
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height:hp(550)
          }}>
          <View style={styles.circularView}>
            <Ionicons
              size={wp(22)}
              style={{color: Colors.white}}
              name={'md-checkmark-sharp'}
            />
           
          </View>
          <Text style={styles.approvedText}>
            Başvurunuz Tamamlanmıştır.
            </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default BottomLoan;

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
    backgroundColor: Colors.lightGray,
    height: wp(32),
    width: wp(32),
    marginLeft: wp(22),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(7),
  },
  descText: {
    fontWeight: '500',
    fontSize: FontSize(15),
    color: `${Colors.darkGray}50`,
    textAlign: 'center',
  },
  itemView: {
    padding: hp(10),
    backgroundColor: Colors.lightGray,
    borderRadius: hp(10),
    marginBottom: hp(10),
  },
  bankImage: {
    width: wp(170),
    height: hp(60),
    resizeMode: 'contain',
  },
  line: {
    height: hp(1),
    width: '100%',
    backgroundColor: `${Colors.darkGray}13`,
    marginVertical: hp(10),
  },
  mainView: {
    flexDirection: 'row',
  },
  leftView: {
    width: '33%',
  },
  rightView: {
    width: '33%',
    alignItems: 'flex-end',
  },
  middleView: {
    width: '33%',
    alignItems: 'center',
  },
  listText: {
    fontSize: FontSize(14),
    color: Colors.darkGray,
  },
  listTextBold: {
    fontSize: FontSize(18),
    fontWeight: 'bold',
    color: Colors.darkGray,
  },
  button: {
    height: hp(31),
    width: wp(195),
    marginTop: hp(10),
  },
  circularView: {
    width: hp(105),
    height: hp(105),
    borderRadius: hp(55),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  approvedText:{
      fontSize:FontSize(18),
      color:Colors.darkGray,
      marginTop:hp(10)
  }
});
