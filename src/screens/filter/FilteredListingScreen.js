import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import FilteredListingCard from '../../components/card/FilteredListingCard';
import {useNavigation} from '@react-navigation/native';
import {HeaderCustomOptions} from '../../navigators/NavigationHeaderOptions';
import Colors from '../../constants/Colors';
import {CardDummyData} from '../../data/data'

const FilteredListingScreen = () => {
  const navigation = useNavigation();

  navigation.setOptions(
    HeaderCustomOptions(
      '',
      Colors.white,
      Colors.darkGray,
      ['Back', 'Filter', 'Listing'],
      ['Share'],
    ),
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <FilteredListingCard data={CardDummyData} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
});

export default FilteredListingScreen;
