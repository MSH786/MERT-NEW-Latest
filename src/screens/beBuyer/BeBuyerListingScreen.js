import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BeBuyerListingCard from '../../components/BeBuyer/BeBuyerListingCard';

import BackIcon from '../../../assets/icons/BackIcon';
import FilterSearchBarComponent from '../../components/input/FilterSearchBarComponent';
import CarModelsCompont from '../../components/BeBuyer/CarModelsCompont';
import RightIcon from '../../../assets/icons/RightIcon';
import {CardDummyData, ListingCardData} from '../../data/data';
import {useNavigation} from '@react-navigation/native';
import {HeaderCustomOptions} from '../../navigators/NavigationHeaderOptions';
import Colors from '../../constants/Colors';
import navigator from '../../utils/navigator';

const BebuyerListingScreen = () => {
  const navigation = useNavigation();
  navigation.setOptions(
    HeaderCustomOptions('', Colors.white, Colors.darkGray, ['Back'], ['Edit']),
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <>
        <View style={{flex: 1, alignItems: 'center'}}>
          <FilterSearchBarComponent />
          <CarModelsCompont />
          <BeBuyerListingCard
            data={CardDummyData}
            navigateToOtherProfileScreen={() => {
              navigator(navigation, 'OtherUserProfileScreen');
            }}
            navigateToDetailsScreen={() => {
              navigator(navigation, 'FindBuyerDetailsScreen');
            }}
          />
        </View>
      </>
    </ScrollView>
  );
};
const styles = StyleSheet.create({});

export default BebuyerListingScreen;
