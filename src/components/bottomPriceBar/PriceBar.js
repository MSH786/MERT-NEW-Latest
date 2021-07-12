import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TextInputFloatingTitle from '../input/TextInputFloatingTitle';
import Question from '../../../assets/icons/Question';
import Chevright from '../../../assets/icons/Arrows/Chevright';
import { wp, hp } from '../../constants/Dimensions'
import { FontSize } from '../../constants/Sizes';

const PriceBar = props => {
  const { title, navigateToFindBuyerDetails } = props;
  return (
    <View style={styles.container}>
      <TextInputFloatingTitle
        title={title}
        style={styles.textInput}
        placeholderTextColor={'#F5953C'}
        keyboardType={'decimal-pad'}
        placeholder={'327.000TL'}
      />
      <View style={{ width: wp(35) }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text}>ipucu:</Text>
          <Question />
        </View>
        <Text style={[styles.text, { marginTop: 5 }]}>312.000-322.000TL</Text>
      </View>
      <TouchableOpacity style={styles.arrowBox} onPress={navigateToFindBuyerDetails} >
        <Chevright />
      </TouchableOpacity>
    </View>
  );
};

export default PriceBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: '#DEDBD9',
    borderTopWidth: 0.5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  arrowBox: {
    width: hp(10),
    height: wp(10),
    borderRadius: 10,
    backgroundColor: '#F5953C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#3A2D13',
    fontSize: FontSize(16),
    marginRight: 5
  },
  textInput: {
    width: wp(35),
    borderBottomWidth: 0,
    fontSize: FontSize(5),
    color: '#F5953C',
  },
});
