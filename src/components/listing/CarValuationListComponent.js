import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import CarValuationItem from '../item/CarValuationItemComponent';
import Fonts from '../../constants/Fonts';
import {FontSize} from '../../constants/Sizes';
import ValuationDropDown from '../dropDownSelector/ValuationDropDown';
import {dataCities} from '../../data/data';

const CarValuationListComponent = props => {
  const {containerStyle} = props;
  const [form, setForm] = useState({});

  return (
    <View style={[styles.container, containerStyle]} >
      <ScrollView style={styles.content}>
        <ValuationDropDown
          style={styles.picker}
          title={'Araç Tipi'}
          value={form && form.CarType}
          data={dataCities}
          placeHolder={'Araç Tipi'}
          onValueChange={(value, index) => setForm({...form, CarType: value})}
        />
        <ValuationDropDown
          style={styles.picker}
          title={'Yıl'}
          value={form && form.CarYear}
          data={dataCities}
          placeHolder={'Yıl'}
          onValueChange={(value, index) => setForm({...form, CarYear: value})}
        />
        <ValuationDropDown
          style={styles.picker}
          title={'Marka'}
          value={form && form.CarBrand}
          data={dataCities}
          placeHolder={'Marka'}
          onValueChange={(value, index) => setForm({...form, CarBrand: value})}
        />
        <ValuationDropDown
          style={styles.picker}
          title={'Model'}
          value={form && form.CarModel}
          data={dataCities}
          placeHolder={'Model'}
          onValueChange={(value, index) => setForm({...form, CarModel: value})}
        />
        <ValuationDropDown
          style={styles.picker}
          title={'Yakıt'}
          value={form && form.CarFear}
          data={dataCities}
          placeHolder={'Yakıt'}
          onValueChange={(value, index) => setForm({...form, CarFear: value})}
        />
        <ValuationDropDown
          style={styles.picker}
          title={'Kasa Tipi'}
          value={form && form.CarCaseType}
          data={dataCities}
          placeHolder={'Kasa Tipi'}
          onValueChange={(value, index) =>
            setForm({...form, CarCaseType: value})
          }
        />
        <ValuationDropDown
          style={styles.picker}
          title={'Motor'}
          value={form && form.CarEngine}
          data={dataCities}
          placeHolder={'Motor'}
          onValueChange={(value, index) => setForm({...form, CarEngine: value})}
        />
        <ValuationDropDown
          style={styles.picker}
          title={'Paket'}
          value={form && form.CarPackage}
          data={dataCities}
          placeHolder={'Paket'}
          onValueChange={(value, index) =>
            setForm({...form, CarPackage: value})
          }
        />
      </ScrollView>
    </View>
  );
};

export default CarValuationListComponent;

const styles = StyleSheet.create({
  container: {
    width: wp(331),
    height: hp(467),
    borderRadius: hp(16),
    backgroundColor: Colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
 
  },
  picker: {
    marginTop: hp(5),
  },
});
