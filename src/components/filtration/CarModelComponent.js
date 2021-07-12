import React, {Fragment} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';

import TouchableComponent from '../custom/TouchableComponent';
import RingIcon from '../../../assets/icons/RingIcon';
import Chevleft from '../../../assets/icons/Arrows/Chevleft';
import ChevRightBlack from '../../../assets/icons/Arrows/ChevRightBlack';
import HorizontalBarsIcon from '../../../assets/icons/HorizontalBarsIcon';
import FilterIconWhite from '../../../assets/icons/FilterIconWhite';
import ShareIcon from '../../../assets/icons/ShareIcon';
import { FontSize } from '../../constants/Sizes';

const {width, height} = Dimensions.get('window');

//Share and Settings Icons will be added.

const CarModelComponent = props => {
  const {data, SelectHandler} = props;

  return (
    <Fragment>
      {data[0] == null ? (
        <View style={styles.container}>
          <Text style={styles.modelnametxt}>No Activites</Text>
        </View>
      ) : (
        <Fragment>
          {props.data.map((item, i) => (
            <View style={styles.container} key={i}>
              <TouchableOpacity
                onPress={() => {
                  SelectHandler(item.carTitle);
                }}>
                <View style={styles.carmodelrow}>
                  <View style={styles.modelImgcol}>
                    <Image
                      source={require('../../../assets/images/bmwLogo.png')}
                      resizeMode="contain"
                      style={styles.bmwimg}></Image>
                  </View>
                  <View style={styles.modelnametxtcol}>
                    <Text style={styles.modelnametxt}>{item.carTitle}</Text>
                  </View>
                  <View style={styles.modelrighticoncol}>
                    <ChevRightBlack />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(370),
    borderBottomWidth: 1,
    alignSelf: 'center',
    borderColor: 'rgba(58, 45, 19, 0.1)',
    paddingBottom: '2.5%',
    alignItems: 'center',
    marginTop: '5.5%',
  },
  carmodelrow: {
    flexDirection: 'row',
    width: wp(333),
  },
  modelImgcol: {
    width: wp(65),
    alignItems: 'center',
    justifyContent: 'center',
  },

  bmwimg: {
    width: wp(60),
    height: hp(60),
  },
  modelnametxtcol: {
    width: wp(225),
    justifyContent: 'center',
  },
  modelnametxt: {
    fontSize: FontSize(15),
    color: 'rgba(58, 45, 19, 0.83)',
  },
  modelrighticoncol: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(43),
  },
});

export default CarModelComponent;
