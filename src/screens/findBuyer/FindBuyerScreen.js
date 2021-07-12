import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation, useTheme} from '@react-navigation/native';
import {
  HeaderCustomOptions,
  HeaderDefaultOptions,
} from '../../navigators/NavigationHeaderOptions';

//Compoenets
import PickingImages from '../../components/imagePicker/PickingImages';
import EditBar from '../../components/editBar/EditBar';
import CarTypeListComponent from '../../components/listing/CarTypeListComponent';
import Toggle from '../../components/custom/Toggle';
import FilterDropDown from '../../components/dropDownSelector/FilterDropDown';
import TextInputFloatingTitle from '../../components/input/TextInputFloatingTitle';
import PriceBar from '../../components/bottomPriceBar/PriceBar';

import navigator from '../../utils/navigator';

//Icons
import BackIcon from '../../../assets/icons/BackIcon';
import KmIcon from '../../../assets/icons/CardIcons/KmIcon';

//DummyData
import {CardTypeData, dataCities, YilData} from '../../data/data';
import Colors from '../../constants/Colors';

//This screen needs to be fixed.
//navigating to InspectionReportScreen will be added. 

const FindBuyerScreen = () => {
  const navigation = useNavigation();
  navigation.setOptions(
    HeaderCustomOptions('Ilan Ver', Colors.white, Colors.darkGray, ['Back']),
  );
  const [filePath, setFilePath] = useState([]);
  const [CarTypeSlider, setCarTypeSlider] = useState(true);
  const [CarTypeSliderData, setCarTypeSliderData] = useState([]);
  const [yil, setYil] = useState('');
  const [marka, setMarka] = useState('');
  const [model, setModel] = useState('');
  const [yakit, setYakit] = useState('');
  const [kasaTipi, setKasaTipi] = useState('');
  const [paket, setPaket] = useState('');
  const [motor, setMotor] = useState('');
  const [vites, setVites] = useState('');
  const [kaskoKodu, setKaskoKodu] = useState('');
  const [km, setKm] = useState('');
  const [renk, setRenk] = useState('');
  const [plaka, setPlaka] = useState('');
  const [muayeneTarihi, setMuayeneTarihi] = useState('');
  const [takas, setTakas] = useState('');
  const [ekspertizRaporu, setEkspertizRaporu] = useState('');
  const [aciklama, setAciklama] = useState('');
  const [location, setLocation] = useState('');
  const [motorGucu, setMotorGucu] = useState('');
  const [motorHacmi, setMotorHacmi] = useState('');
  const [cekis, setCekis] = useState('');

  const chooseFile = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
    }).then(image => {
      console.log(image);
      const newList = [...filePath];
      newList.push(image);
      setFilePath(newList);
    });
  };
  const ToggleHandler = () => {
    setCarTypeSlider(!CarTypeSlider);
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

  console.log('FindBuyerScreen')

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <PickingImages
            title={'Medya Ekleyin'}
            onPressImagePicker={() => {
              chooseFile();
            }}
            ImagesData={filePath}
          />
          <EditBar title={'Audi A6 Avant'} />
          <Toggle
            title={'Vasita'}
            iconStatus={CarTypeSlider}
            onPress={() => {
              ToggleHandler();
            }}
          />
          {CarTypeSlider ? (
            <CarTypeListComponent
              data={CardTypeData}
              onSelect={ChangeCarTypeSelection}
            />
          ) : null}
        </View>
      </ScrollView>
      <PriceBar
        title={'Fiyat'}
        navigateToFindBuyerDetails={() => {
          navigator(navigation, 'MyFindBuyerDetailsScreen');
        }}
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default FindBuyerScreen;

/*/

   <FilterDropDown
            title={'Yil'}
            value={yil}
            data={dataCities}
            placeHolder={'Yil'}
            onValueChange={(itemValue, itemIndex) => setYil(itemValue)}
          />
          <FilterDropDown
            title={'Marka'}
            value={marka}
            data={dataCities}
            placeHolder={'Marka'}
            onValueChange={(itemValue, itemIndex) => setMarka(itemValue)}
          />
          <FilterDropDown
            title={'Model'}
            value={model}
            data={dataCities}
            placeHolder={'Model'}
            onValueChange={itemValue => setModel(itemValue)}
          />
          <FilterDropDown
            title={'Yakit'}
            value={yakit}
            data={dataCities}
            placeHolder={'Yakit'}
            onValueChange={itemValue => setYakit(itemValue)}
          />
          <FilterDropDown
            title={'Kasa Tipi'}
            value={kasaTipi}
            data={dataCities}
            placeHolder={'Kasa Tipi'}
            onValueChange={itemValue => setKasaTipi(itemValue)}
          />
          <FilterDropDown
            title={'Paket'}
            value={paket}
            data={dataCities}
            placeHolder={'Paket'}
            onValueChange={itemValue => setPaket(itemValue)}
          />
          <FilterDropDown
            title={'Motor'}
            value={motor}
            data={dataCities}
            placeHolder={'Motor'}
            onValueChange={itemValue => setMotor(itemValue)}
          />
          <FilterDropDown
            title={'Vites'}
            value={vites}
            data={dataCities}
            placeHolder={'Vites'}
            onValueChange={itemValue => setVites(itemValue)}
          />
          <TextInputFloatingTitle
            title={'Kasko Kodu'}
            value={kaskoKodu}
            placeholder={'XXXXXXXX'}
            setValue={text => {
              setKaskoKodu(text);
            }}
          />
          <TextInputFloatingTitle
            title={'Km'}
            value={km}
            placeholder={'XXXXXXXX'}
            setValue={text => {
              setKm(text);
            }}
          />
          <TextInputFloatingTitle
            title={'Renk'}
            value={renk}
            placeholder={'XXXXXXXX'}
            setValue={text => {
              setRenk(text);
            }}
          />
          <TextInputFloatingTitle
            title={'Plaka'}
            value={plaka}
            placeholder={'XXXXXXXX'}
            setValue={text => {
              setPlaka(text);
            }}
          />
          <TextInputFloatingTitle
            title={'Muayene Tarihi'}
            value={muayeneTarihi}
            placeholder={'XXXXXXXX'}
            setValue={text => {
              setMuayeneTarihi(text);
            }}
          />
          <FilterDropDown
            title={'Takas'}
            value={takas}
            data={dataCities}
            placeHolder={'Takas'}
            onValueChange={itemValue => setTakas(itemValue)}
          />
          <FilterDropDown
            title={'Ekspertiz Raporu'}
            value={ekspertizRaporu}
            data={dataCities}
            placeHolder={'Ekspertiz Raporu'}
            onValueChange={itemValue => setEkspertizRaporu(itemValue)}
          />
          <TextInputFloatingTitle
            title={'Açıklama'}
            value={aciklama}
            placeholder={'XXXXXXXX'}
            setValue={text => {
              setAciklama(text);
            }}
          />
          <FilterDropDown
            title={'Location'}
            value={location}
            data={dataCities}
            placeHolder={'Location'}
            onValueChange={itemValue => setLocation(itemValue)}
          />
          <FilterDropDown
            title={'Motor Gücü'}
            value={motorGucu}
            data={dataCities}
            placeHolder={'Motor Gücü'}
            onValueChange={itemValue => setMotorGucu(itemValue)}
          />
          <FilterDropDown
            title={'Motor Hacmi'}
            value={motorHacmi}
            data={dataCities}
            placeHolder={'Motor Hacmi'}
            onValueChange={itemValue => setMotorHacmi(itemValue)}
          />
          <FilterDropDown
            title={'Cekiş'}
            value={cekis}
            data={dataCities}
            placeHolder={'Cekiş'}
            onValueChange={itemValue => setCekis(itemValue)}
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
});


          */
