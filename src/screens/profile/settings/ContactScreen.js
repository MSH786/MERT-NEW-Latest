import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {wp, hp} from '../../../constants/Dimensions';
import ContactTextComponent from '../../../components/ProfileSetting/ContactTextComponent';
import TelephoneContactComponent from '../../../components/ProfileSetting/TelephoneContactComponent';

const ContractScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <ContactTextComponent />

      {/*Telephone Rect start*/}
      <TelephoneContactComponent
        title="Telefone Numarasi"
        subTitle="0212 000 00 00"
        icon="call"
      />
      {/*Telephone Rect end*/}

      {/*Whatsapp Rect start*/}
      <TelephoneContactComponent
        title="Whatsapp"
        subTitle="0212 000 00 00"
        icon="chatbubble"
      />
      {/*Whatsapp Rect end*/}

      {/*Email Rect start*/}
      <TelephoneContactComponent
        title="Email"
        subTitle="abc@gmail.com"
        icon=""
      />
      {/*Email Rect end*/}

      {/*Adres Rect start*/}
      <TelephoneContactComponent title="Adres" subTitle="" icon="" />
      {/*Adres Rect end*/}

      {/* Map Rect, I have skip this rect, for google maps integration */}
      <View style={{width: wp(333), height: hp(200)}}>
        <Image
          style={styles.mapImg}
          source={require('../../../../assets/images/map.png')}></Image>
      </View>
      <View style={{width: wp(333), height: hp(200), alignItems: 'center'}}>
        <Text style={{fontSize: wp(15), color: '#3A2D13'}}>
          Zumrutevler Mah., Elifce Sk. No:4 Maltepe, Istanbul
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapImg: {
    width: wp(332),
    height: hp(183),
  },
});

export default ContractScreen;
