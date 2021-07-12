import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View, TouchableOpacity} from 'react-native';
import CarTypeListComponent from '../../components/listing/CarTypeListComponent';
import FilterDropDown from '../../components/dropDownSelector/FilterDropDown';
import {dataCarTypeSlider, dataCarModelData, dataCities} from '../../data/data';
import Toggle from '../../components/custom/Toggle';
import {useNavigation} from '@react-navigation/native';
import {HeaderCustomOptions} from '../../navigators/NavigationHeaderOptions';
import Colors from '../../constants/Colors';
import {wp, hp} from '../../constants/Dimensions';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import navigator from '../../utils/navigator';

const BeBuyerFiltrationScreen = ({route}) => {
  //const {selectedTitle} = route.params;

  const navigation = useNavigation();
  navigation.setOptions(
    HeaderCustomOptions('Alici Ol', Colors.white, Colors.darkGray, ['Back']),
  );

  const [headerTitle, setHeaderTitle] = React.useState('Filtreleme');
  const [CarTypeSlider, setCarTypeSlider] = React.useState(true);
  const [CarTypeSliderData, setCarTypeSliderData] = React.useState([]);
  //const [carModel, setCarModel] = React.useState(selectedTitle);
  const [carModelData, setCarModelData] = React.useState([]);
  const [selectedAdres, setSelectedAdres] = useState('');
  const [selectedYakit, setSelectedYakit] = useState('');
  const [selectedVites, setSelectedVites] = useState('');
  const [selectedKasaTipi, setSelectedKasaTipi] = useState('');
  const [selectedMotorGucu, setSelectedMotorGucu] = useState('');
  const [selectedMotorHacmi, setSelectedMotorHacmi] = useState('');
  const [selectedCekis, setSelectedCekis] = useState('');
  const [selectedRenk, setSelectedRenk] = useState('');
  const [selectedKimden, setSelectedKimden] = useState('');
  const [selectedDurum, setSelectedDurum] = useState('');

  useEffect(() => {
    makeCarTypeSlider();
    makeDummyDataForCarModel();
  }, []);

  const makeCarTypeSlider = () => {
    setCarTypeSliderData(dataCarTypeSlider);
  };

  const makeDummyDataForCarModel = () => {
    setCarModelData(dataCarModelData);
  };

  const ChangeCarTypeSelection = i => {
    const lastArr = [...CarTypeSliderData];
    const newArr = lastArr.map(item => {
      return {
        ...item,
        selected: false,
      };
    });
    newArr[i].selected = true;
    setCarTypeSliderData(newArr);
  };

  const ToggleHandler = () => {
    setCarTypeSlider(!CarTypeSlider);
  };

  const redirectToSearchCarsModels = () => {
    navigation.navigate('FilterSearchScreen', {data: carModelData});
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, paddingHorizontal: 20, alignItems: 'center'}}>
        <Toggle
          title={'Vasita'}
          iconStatus={CarTypeSlider}
          onPress={() => {
            ToggleHandler();
          }}
        />
        {/*Vasita rect End*/}

        {/*Slider Rect start*/}
        {CarTypeSlider ? (
          <CarTypeListComponent
            data={CarTypeSliderData}
            onSelect={ChangeCarTypeSelection}
          />
        ) : null}
        {/*Slider Rect End*/}

        {/* Adres */}
        <FilterDropDown
          title={'Adres'}
          value={selectedAdres}
          data={dataCities}
          placeHolder={'Adres'}
          onValueChange={(itemValue, itemIndex) => setSelectedAdres(itemValue)}
        />
        {/* Adres */}

        {/* Yakit */}
        <FilterDropDown
          title={'Yakit'}
          value={selectedYakit}
          data={dataCities}
          placeHolder={'Yakit'}
          onValueChange={(itemValue, itemIndex) => setSelectedYakit(itemValue)}
        />
        {/* Yakit */}

        {/* Vites */}
        <FilterDropDown
          title={'Vites'}
          value={selectedVites}
          data={dataCities}
          placeHolder={'Vites'}
          onValueChange={(itemValue, itemIndex) => setSelectedVites(itemValue)}
        />
        {/* Vites */}

        {/* Kasa Tipi */}
        <FilterDropDown
          title={'Kasa Tipi'}
          value={selectedKasaTipi}
          data={dataCities}
          placeHolder={'Kasa Tipi'}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedKasaTipi(itemValue)
          }
        />
        {/* Kasa Tipi */}

        {/* Motor Gucu */}
        <FilterDropDown
          title={'Motor Gucu'}
          value={selectedMotorGucu}
          data={dataCities}
          placeHolder={'Motor Gucu'}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedMotorGucu(itemValue)
          }
        />
        {/* Motor Gucu */}

        {/* Motor Hacmi */}
        <FilterDropDown
          title={'Motor Hacmi'}
          value={selectedMotorHacmi}
          data={dataCities}
          placeHolder={'Motor Hacmi'}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedMotorHacmi(itemValue)
          }
        />
        {/* Motor Hacmi */}

        {/* Cekis */}
        <FilterDropDown
          title={'Cekis'}
          value={selectedCekis}
          data={dataCities}
          placeHolder={'Cekis'}
          onValueChange={(itemValue, itemIndex) => setSelectedCekis(itemValue)}
        />
        {/* Cekis */}

        {/* Renk */}
        <FilterDropDown
          title={'Renk'}
          value={selectedRenk}
          data={dataCities}
          placeHolder={'Renk'}
          onValueChange={(itemValue, itemIndex) => setSelectedRenk(itemValue)}
        />
        {/* Renk */}

        {/* Kimden */}
        <FilterDropDown
          title={'Kimden'}
          value={selectedKimden}
          data={dataCities}
          placeHolder={'Kimden'}
          onValueChange={(itemValue, itemIndex) => setSelectedKimden(itemValue)}
        />
        {/* Kimden */}

        {/* Durum */}
        <FilterDropDown
          title={'Durum'}
          value={selectedDurum}
          data={dataCities}
          placeHolder={'Durum'}
          onValueChange={(itemValue, itemIndex) => setSelectedDurum(itemValue)}
        />
        {/* Durum */}
        <TouchableOpacity
          style={styles.continueButtonContainer}
          onPress={() => {
            navigator(navigation, 'BeBuyerListingScreen');
          }}>
          <SimpleLineIcons
            name={'arrow-right'}
            color={Colors.white}
            size={wp(14)}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  continueButtonContainer: {
    width: wp(32),
    height: hp(32),
    borderRadius: wp(7),
    backgroundColor: Colors.mainOrange,
    marginLeft: wp(320),
    marginRight: wp(23),
    marginTop: hp(9),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BeBuyerFiltrationScreen;
