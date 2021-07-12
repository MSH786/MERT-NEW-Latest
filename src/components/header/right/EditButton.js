import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {hp, wp} from '../../../constants/Dimensions';
import {useNavigation} from '@react-navigation/native';
import HeaderButton from '../HeaderButton';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../../constants/Colors';
import navigator from '../../../utils/navigator';

//This component is used BeBuyerListingScreen, MyFindBuyerDetailsScreen. It will navigate different routes.
//Need to get a props to know which screen it is used.


const EditButton = props => {
  const {buttonColor, headerColor} = props;

  const navigation = useNavigation();

/*/
  const onHandle = () => {
    navigator(navigation, 'EditBeBuyerScreen');
  };
/*/
  return (
    <HeaderButton
      IconFontFamily={Feather}
      iconName={'edit'}
      headerColor={headerColor}
      containerStyle={styles.containerStyle}
      //onPress={onHandle}
    />
  );
};

export default EditButton;

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: wp(0),
    marginRight: wp(9),
  },
});
