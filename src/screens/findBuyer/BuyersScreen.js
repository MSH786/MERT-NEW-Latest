import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HeaderDefaultOptions} from '../../navigators/NavigationHeaderOptions';

//Compoenets
import SearchBarComponent from '../../components/input/SearchBarComponent';
import UserList from '../../components/userList/usersList';
import ButtonComponent from '../../components/button/ButtonComponent';

//
import Chevright from '../../../assets/icons/Arrows/Chevright';

import navigator from '../../utils/navigator';

//DummyData
import {userListData} from '../../data/data';
const BuyersScreen = () => {
  const navigation = useNavigation();
  navigation.setOptions(HeaderDefaultOptions('Alicilar'));
  return (
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.searchBarView}>
            <SearchBarComponent
              style={{marginLeft: 0, width: '100%'}}
              placeHolder={'Arama'}
              rightIconHide={true}
            />
          </View>
          <UserList
            popular={true}
            data={userListData}
            title={'Popüler Alıcılar'}
            bottomTitle={'Hepsini Gör'}
          />
          <ButtonComponent
            buttonStyle={styles.buttonText}
            title={'Popüler Alıcı Olun'}
            icon={<Chevright />}
            onPress={() => {
              navigator(navigation, 'BePopularScreen')
            }}
          />
          <UserList
            data={userListData}
            title={'Alıcılar'}
            bottomTitle={'Hepsini Gör'}
          />
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchBarView: {
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText:{
    width: '100%',
    marginVertical: 10,
    flexDirection:"row",
    justifyContent: 'space-between',
    paddingHorizontal:20
  }
});

export default BuyersScreen;
