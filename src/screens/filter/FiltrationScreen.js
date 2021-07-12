import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CarTypeListComponent from '../../components/listing/CarTypeListComponent';
import CarBrandModelComponent from '../../components/filtration/CarBrandModelComponent';
import BottomSheetPopup from '../../components/popup/BottomSheetPopup';
import FilterDropDown from '../../components/dropDownSelector/FilterDropDown';
import {dataCarTypeSlider, dataCarModelData, dataCities} from '../../data/data';
import {MotorHacmi} from '../../data/data';
import Toggle from '../../components/custom/Toggle';
import {useNavigation} from '@react-navigation/native';
import {HeaderCustomOptions} from '../../navigators/NavigationHeaderOptions';
import Colors from '../../constants/Colors';
import RangeSliderComponent from '../../components/seekBar/RangeSliderComponent';

import navigator from '../../utils/navigator';

const FiltrationScreen = ({route}) => {
  const {selectedTitle} = route.params;

  const navigation = useNavigation();

  navigation.setOptions(
    HeaderCustomOptions(
      headerTitle,
      Colors.white,
      Colors.darkGray,
      ['Back'],
      ['Next'],
    ),
  );

  const [headerTitle, setHeaderTitle] = React.useState('Filtreleme');
  const [CarTypeSlider, setCarTypeSlider] = React.useState(true);
  const [CarTypeSliderData, setCarTypeSliderData] = React.useState([]);
  const [carModel, setCarModel] = React.useState(selectedTitle);
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
        {CarTypeSlider && (
          <CarTypeListComponent
            data={CarTypeSliderData}
            onChange={ChangeCarTypeSelection}
          />
        )}
        {/*Slider Rect End*/}

        {/*Marka BMW Start*/}
        <CarBrandModelComponent
          data={selectedTitle}
          onPress={() => {
           navigator(navigation, 'FilterSearchScreen', {data: carModelData})
          }}
        />
        {/*Marka BMW End*/}

        {/* Adres */}
        <FilterDropDown
          title={'Adres'}
          value={selectedAdres}
          data={dataCities}
          placeHolder={'Adres'}
          onValueChange={(itemValue, itemIndex) => setSelectedAdres(itemValue)}
        />
        {/* Adres */}

        {/* Price */}
        <RangeSliderComponent
          title={'Fiyat'}
          minValue={100000}
          maxValue={200000}
          TrackOneValue={132000}
          TrackTwoValue={155000}
          onChangeValues={values => {}}
        />
        {/* Price */}

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

        {/* KM */}
        <RangeSliderComponent
          title={'Kilometre'}
          minValue={10000}
          maxValue={100000}
          TrackOneValue={13000}
          TrackTwoValue={77000}
          onChangeValues={values => {}}
        />
        {/* KM */}

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
          data={MotorHacmi}
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
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
});

export default FiltrationScreen;
