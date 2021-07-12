import React from 'react';
import {StyleSheet, FlatList, View, Image, Text} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontSize } from '../../constants/Sizes';

const Premium = props => {
  const {data} = props;
  return (
    <View style={styles.container}>
      <View style={styles.blurView}>
        <Text style={styles.title}>Arkadaşını davet et, 100 Jeton kazan.</Text>
        <View style={styles.shareView}>
          <View style={styles.shareIconView}>
            <Ionicons
              name={'md-share-social-sharp'}
              color={Colors.white}
              style={{fontSize: FontSize(20)}}
            />
          </View>
          <Text style={styles.shareText}>Davet Kodun: 96T28F</Text>
        </View>
        <View style={styles.descTab}>
          <View style={styles.descHeaderText}>
            <Text style={styles.descHeaderTitle}>Vitrinde Öne Çıkart</Text>
            <Text style={styles.descHeaderPrice}>29,99 ₺</Text>
          </View>
          <Text style={styles.descFooterText}>
            Seçtiğiniz bir ilanınızı vitrinde öne çıkartın.
          </Text>
        </View>
        <View style={styles.descTab}>
          <View style={styles.descHeaderText}>
            <Text style={styles.descHeaderTitle}>Popüler Alıcı Ol</Text>
            <Text style={styles.descHeaderPrice}>9,99 ₺</Text>
          </View>
          <Text style={styles.descFooterText}>
            Popüler alıcılar listesinde yerinizi alın.
          </Text>
        </View>
        <View
          style={[
            styles.descTab,
            {
              marginTop: hp(20),
              marginBottom: 0,
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 0,
              borderBottomWidth: 0.5,
              borderColor: Colors.darkGray,
            },
          ]}>
          <View style={styles.descHeaderText}>
            <Text style={styles.descHeaderTitle}>Aylık Abonelik</Text>
            <Text style={styles.descHeaderPrice}>1 Ay, 219,99 ₺</Text>
          </View>
          <Text style={styles.descFooterText}>
          1 ay boyunca kullanabileceğiniz 10 adet Vitrinde Öne Çıkart hakkı ve Popüler Alıcılık. 
          </Text>
        </View>
        <View
          style={[
            styles.descTab,
            {borderTopRightRadius: 0, borderTopLeftRadius: 0},
          ]}>
          <View style={styles.descHeaderText}>
            <Text style={styles.descHeaderTitle}>Yıllık Abonelik</Text>
            <Text style={styles.descHeaderPrice}>12 Ay, Ayda 189,99 ₺</Text>
          </View>
          <Text style={styles.descFooterText}>
          1 ay boyunca kullanabileceğiniz 10 adet Vitrinde Öne Çıkart hakkı ve Popüler Alıcılık. 
          </Text>
        </View>
        <View style={styles.line}/>
        <View style={{flexDirection:"row"}}>
            <View style={styles.squareBox}>
            <Text style={styles.descHeaderTitle}>100 Jeton</Text>
            <Text style={styles.descHeaderPrice}>29,99 ₺</Text>
            </View>
            <View style={[styles.squareBox,{marginLeft:hp(20)}]}>
            <Text style={styles.descHeaderTitle}>200 Jeton</Text>
            <Text style={styles.descHeaderPrice}>49,99 ₺</Text>
            </View>
        </View>
        <View style={{flexDirection:"row",marginVertical:hp(20)}}>
            <View style={styles.squareBox}>
            <Text style={styles.descHeaderTitle}>500 Jeton</Text>
            <Text style={styles.descHeaderPrice}>89,99 ₺</Text>
            </View>
            <View style={[styles.squareBox,{marginLeft:hp(20)}]}>
            <Text style={styles.descHeaderTitle}>1000 Jeton</Text>
            <Text style={styles.descHeaderPrice}>159,99 ₺</Text>
            </View>
        </View>
      </View>
    </View>
  );
};

export default Premium;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(20),
  },
  blurView: {
    width: '100%',
    borderRadius: hp(20),
    backgroundColor: `${Colors.white}80`,
    alignItems: 'center',
    marginTop: hp(10),
  },
  title: {
    fontWeight: '800',
    fontSize: FontSize(21),
    color: Colors.darkGray,
    marginVertical: hp(10),
    width: '60%',
    textAlign: 'center',
  },
  shareIconView: {
    padding: hp(7),
    backgroundColor: Colors.lightGray,
    borderRadius: hp(5),
  },
  shareView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: wp(5),
    borderBottomColor: Colors.primary,
    marginBottom: hp(20),
  },
  shareText: {
    fontSize: FontSize(17),
    color: Colors.darkGray,
    marginLeft: wp(10),
  },
  descTab: {
    width: '90%',
    borderRadius: hp(10),
    backgroundColor: Colors.lightGray,
    padding: wp(10),
    marginBottom: hp(10),
  },
  descHeaderText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descFooterText: {
    fontSize: FontSize(16),
    color: Colors.darkGray,
  },
  descHeaderTitle: {
    fontSize: FontSize(18),
    color: Colors.darkGray,
    fontWeight:"800"
  },
  descHeaderPrice: {
    fontSize: FontSize(16),
    color: Colors.primary,
  },
  line:{
      width:"100%",
      height:hp(0.6),
      marginTop:hp(10),
      marginBottom:hp(20),
      backgroundColor:Colors.blackishGray
  },
  squareBox:{
      width:'42%',
      backgroundColor:Colors.lightGray,
      borderRadius:hp(10),
      alignItems:"center",
      justifyContent:"center",
      paddingVertical:hp(25)
  }
});
