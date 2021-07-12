import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import FilterSearchBarComponent from '../../components/input/FilterSearchBarComponent';
import CarModelComponent from '../../components/filtration/CarModelComponent';
import SearchBarComponent from '../../components/input/SearchBarComponent';

import BackIcon from '../../../assets/icons/BackIcon';
import RightIcon from '../../../assets/icons/RightIcon';
import {useNavigation, useTheme} from '@react-navigation/native';
import {HeaderDefaultOptions} from '../../navigators/NavigationHeaderOptions';

const FilterSearchScreen = ({route}) => {
  const {data} = route.params;

  const [search, setSearch] = React.useState('');
  const [headerTitle, setHeaderTitle] = React.useState('FilterLeme');
  const [allData, setAllData] = React.useState(data);
  const [dummyData, setDummyData] = React.useState(data);

  const navigation = useNavigation();
  navigation.setOptions(HeaderDefaultOptions(headerTitle));

  const SubmitButton = () => {
    alert('Submit Called');
  };

  const BackButton = () => {
    navigation.goBack('');
  };

  const HandlerInput = t => {
    setSearch(t);
    if (t === '') {
      setAllData(dummyData);
    } else {
      const oldData = [...allData];
      const newData = oldData.filter(item => {
        const itemData = `${item.carTitle.toUpperCase()} ${item.carTitle.toUpperCase()} ${item.carTitle.toUpperCase()}`;
        const textData = t.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setAllData(newData);
    }
  };

  const SelectHandler = i => {
    navigation.navigate('FiltrationScreen', {selectedTitle: i});
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, alignItems: 'center'}}>
        {/* Search Bar */}
        <FilterSearchBarComponent
          value={search}
          onChangeText={HandlerInput}
          placeholder={'Search Here'}
        />
        {/* Search Bar */}

        {/* All Cars Models */}
        <CarModelComponent data={allData} SelectHandler={SelectHandler} />
        {/* All Cars Models */}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({});

export default FilterSearchScreen;
