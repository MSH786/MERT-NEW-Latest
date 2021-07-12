import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  FlatList,
} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import Colors from '../../constants/Colors';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CrossBlackIcon from '../../../assets/icons/CrossBlackIcon';
import { FontSize } from '../../constants/Sizes';

const ImageSlider = props => {
  const [imageIndex, setImageIndex] = useState(0);
  const {data, onPressCross, dotStyle, renderHorizontal} = props;
  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={!!item.path ? {uri: item.path} : item.img}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Carousel
        firstItem={imageIndex}
        data={data}
        renderItem={_renderItem}
        sliderWidth={wp(390)}
        itemWidth={wp(390)}
        onSnapToItem={index => setImageIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={imageIndex}
        containerStyle={{backgroundColor: Colors.white}}
        dotStyle={[styles.paginationDot, dotStyle]}
        inactiveDotStyle={[
          styles.paginationDot,
          {backgroundColor: Colors.lightGray},
        ]}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
      {renderHorizontal && (
        <View style={{paddingHorizontal: wp(10)}}>
          <Text style={styles.titleText}>Arkaplan Ekleyin</Text>
          <FlatList
            horizontal
            data={data}
            renderItem={item => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setImageIndex(item.index);
                  }}>
                  <Image
                    style={styles.horizontalImages}
                    source={item.item.img}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
      {!renderHorizontal && (
        <TouchableOpacity onPress={onPressCross} style={styles.crossIcon}>
          <CrossBlackIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imageView: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  crossIcon: {
    position: 'absolute',
    right: hp(10),
    top: hp(10),
    backgroundColor: Colors.lightGray,
    padding: hp(10),
    borderRadius: hp(5),
  },
  paginationDot: {
    width: hp(10),
    height: hp(10),
    borderRadius: hp(5),
    marginHorizontal: wp(5),
    backgroundColor: Colors.darkGray,
  },
  titleText: {
    fontSize: FontSize(15),
    color: Colors.darkGray,
    marginBottom: hp(10),
  },
  horizontalImages: {
    width: wp(78),
    height: hp(78),
    marginRight: wp(10),
    borderRadius: hp(10),
  },
});
