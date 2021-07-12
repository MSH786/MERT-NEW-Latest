import React,{useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { wp, hp } from '../../constants/Dimensions'
import { FontSize } from '../../constants/Sizes';

const CarDetails = props => {
  const [descLength, setDescLength] = useState(4);
  const {title, brandLogo, subText, dateText, descriptionText} = props;
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Image style={{width:wp(81),height:hp(42),marginLeft:-hp(20)}} source={brandLogo} />
        <Text numberOfLines={1} style={styles.titleText}>
          {title}
        </Text>
      </View>
      <View style={styles.subTitleView}>
        <Text style={styles.subText}>{subText}</Text>
        <Text style={styles.dateText}>{dateText}</Text>
      </View>
      <View style={styles.descView}>
        <Text numberOfLines={descLength} style={styles.descText}>{descriptionText}</Text>
      </View>
      <TouchableOpacity onPress={()=>{setDescLength(descLength === 4 ?undefined:4)}}>
        <Text style={styles.moreText}>
        Hepsini Gör
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CarDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: FontSize(20),
    color: '#3A2D13',
    width: wp(250),
  },
  subTitleView: {
    marginTop: hp(18),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subText: {
    color: '#3A2D13',
    fontWeight: 'bold',
    fontSize: FontSize(14),
  },
  dateText: {
    color: '#3A2D13',
    fontWeight: '400',
    fontSize: FontSize(14),
  },
  descView: {
    marginTop: 5,
  },
  descText:{
    lineHeight:wp(19.31),
    color:"#3A2D1350",
    fontSize:FontSize(14)
  },
  moreText:{
    marginTop:hp(3),
    color: "#3A2D1350",
    fontSize:FontSize(13),
    fontWeight:"bold"
  }
});
