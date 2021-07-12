import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import Carousel from 'react-native-snap-carousel';
import Colors from '../../constants/Colors';
//Icon
import AddIcon from '../../../assets/icons/AddIcon';
import ShareIcon from '../../../assets/icons/ShareIcon';
import EmptyHeartIcon from '../../../assets/icons/CardIcons/EmptyHeartIcon';
import FilledHeartIcon from '../../../assets/icons/CardIcons/FilledHeartIcon';
import {FontSize} from '../../constants/Sizes';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PickingImages = props => {
  const {onPressImagePicker, ImagesData, title, onPressHeart, isLiked} = props;

  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.largePickerButton}>
        <Image
          source={
            !!item.path
              ? {uri: item.path}
              : require('../../../assets/images/dummyCarImages/car.jpg')
          }
          style={styles.mainImage}
        />
        <TouchableOpacity onPress={onPressHeart} activeOpacity={0.5} style={styles.heart}>
          {isLiked ? <FilledHeartIcon /> : <EmptyHeartIcon />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.share}>
        <FontAwesome5 size={wp(13)} style={{color:Colors.white}} name={"share-alt"} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {!!title&&<Text style={styles.titleText}>{title}</Text>}
      {ImagesData?.length == 0 ? (
        <TouchableOpacity
          onPress={onPressImagePicker}
          style={styles.largePickerButton}>
          <AddIcon width={50} height={50} />
        </TouchableOpacity>
      ) : (
        <Carousel
          data={!!ImagesData ? ImagesData : []}
          renderItem={_renderItem}
          sliderWidth={wp(340)}
          itemWidth={wp(340)}
        />
      )}
      {ImagesData?.length > 0 && (
        <View>
          <View style={styles.imageListView}>
            {ImagesData?.map((item, index) => {
              return (
                <View style={{width: wp(73),marginRight:wp(13)}}>
                  {index < 4 && (
                    <View style={styles.smallPickerButton}>
                      <Image
                        source={
                          !!item.path
                            ? {uri: item.path}
                            : require('../../../assets/images/dummyCarImages/car.jpg')
                        }
                        style={[styles.mainImage, {resizeMode: 'cover'}]}
                      />
                      {index == 3 && (
                        <TouchableOpacity
                          onPress={onPressImagePicker}
                          style={styles.addImageText}>
                          <FontAwesome5 size={wp(13)} style={{color:Colors.white}} name={"plus"} />
                          {ImagesData?.length > 4 && (
                            <Text style={styles.imagesLengthText}>
                              {ImagesData?.length - 4}
                            </Text>
                          )}
                        </TouchableOpacity>
                      )}
                    </View>
                  )}
                </View>
              );
            })}
            {isLiked == undefined && ImagesData?.length < 4 && (
              <TouchableOpacity
                onPress={onPressImagePicker}
                style={[styles.smallPickerButton, {width: '22%'}]}>
                <FontAwesome5 size={wp(13)} style={{color:Colors.white}} name={"plus"} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default PickingImages;

const styles = StyleSheet.create({
  container: {
  },
  largePickerButton: {
    width: wp(331),
    height: hp(205),
    backgroundColor: '#E5DECE',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallPickerButton: {
    width: '100%',
    height: hp(75),
    borderRadius: 15,
    backgroundColor: '#E5DECE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  imageListView: {
    flexDirection: 'row',
    marginTop: hp(14),
  },
  imagesLengthText: {
    fontSize: FontSize(21),
    color: 'white',
    fontWeight: 'bold',
    marginLeft: wp(1),
  },
  addImageText: {
    width: '100%',
    height: hp(75),
    borderRadius: 15,
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: '#00000080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: FontSize(16),
    fontWeight: '800',
    marginBottom: hp(10),
  },
  heart: {
    position: 'absolute',
    right: 10,
    top: 10,
    padding: 10,
    borderRadius: 5,
  },
  share: {
    position: 'absolute',
    backgroundColor: '#FFFFFF90',
    right: 10,
    bottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});
