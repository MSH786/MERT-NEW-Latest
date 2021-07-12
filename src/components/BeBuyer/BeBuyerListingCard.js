import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';

//Common Components
import Card from '../custom/Card';
import ToucahbleIconCard from '../custom/ToucableIconCard';

//assets
import ChatWhiteIcon from '../../../assets/icons/ChatWhiteIcon';
import ToucableIconCard from '../custom/ToucableIconCard';
import PhoneWhiteIcon from '../../../assets/icons/PhoneWhiteIcon';
import FillRedHeartIcon from '../../../assets/icons/CardIcons/FillRedHeartIcon';
import GearIcon from '../../../assets/icons/CardIcons/GearIcon';
import KmIcon from '../../../assets/icons/CardIcons/KmIcon';
import GasIcon from '../../../assets/icons/CardIcons/GasIcon';
import ShareIcon from '../../../assets/icons/ShareIcon';
import LocationIcon from '../../../assets/icons/CardIcons/LocationIcon';

import ProfilePhotoCard from '../card/ProfilePhotoCard';
import {FontSize} from '../../constants/Sizes';

const BeBuyerListingCard = ({
  data,
  navigateToOtherProfileScreen,
  navigateToDetailsScreen,
}) => {
  console.log('hello');
  console.log(data);
  return (
    <Fragment>
      {data === null ? (
        <Text style={styles.otomobiltxt}>No Activites</Text>
      ) : (
        <Fragment>
          {data.map((item, i) => (
            <Card
              style={{
                width: wp(332),
                alignSelf: 'center',
                marginTop: hp(10),
                marginBottom: hp(10),
              }}
              key={i}>
              <View>
                <View style={styles.topContainer}>
                  <View style={styles.avatarContainer}>
                    <ProfilePhotoCard onPress={navigateToOtherProfileScreen} />
                  </View>
                  <View style={styles.profileInfosContainer}>
                    <Text style={{fontWeight: 'bold', fontSize: FontSize(18)}}>
                      {item.title}
                    </Text>
                    <Text style={{fontSize: FontSize(15)}}>Şimdi</Text>
                  </View>
                  <View style={styles.iconsContainer}>
                    <Text style={{marginTop: hp(8), marginRight: wp(5)}}>
                      #15237
                    </Text>
                    <ToucahbleIconCard
                      style={{
                        marginRight: 5,
                        width: wp(32),
                        backgroundColor: '#E5DECE',
                        borderRadius: 7,
                      }}>
                      <ChatWhiteIcon />
                    </ToucahbleIconCard>
                    <ToucahbleIconCard
                      style={{
                        marginRight: 5,
                        width: wp(32),
                        backgroundColor: '#E5DECE',
                        borderRadius: 7,
                      }}>
                      <PhoneWhiteIcon />
                    </ToucahbleIconCard>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.touchableComponent}
                  onPress={navigateToDetailsScreen}>
                  <View style={styles.carPhotoContainer}>
                    <ImageBackground
                      style={{
                        width: wp(324),
                        height: hp(132),
                        borderRadius: wp(7),
                        borderColor: 'black',
                        overflow: 'hidden',
                      }}
                      source={require('../../../assets/images/dummyCarImages/car2.jpg')}>
                      <FillRedHeartIcon
                        width={wp(26)}
                        height={wp(23)}
                        style={styles.hearticon}
                      />
                      <ToucableIconCard style={styles.carmodelimg}>
                        <Image
                          style={{width: wp(36.82), height: hp(36.82)}}
                          source={require('../../../assets/images/volvo.png')}></Image>
                      </ToucableIconCard>
                    </ImageBackground>
                  </View>
                  <View style={styles.detailsContainer}>
                    <Text style={{fontSize: FontSize(17), marginBottom: hp(7)}}>
                      Öğretmenden Satılık 2012 Model Volvo S60 Hatasız Boyasız,
                      Servis Bakımlı
                    </Text>
                    <View style={styles.carFeatureDetailsContainer}>
                      <View>
                        <View style={styles.carFeatureDetail}>
                          <KmIcon />
                          <Text style={{marginLeft: wp(4)}}>123.000</Text>
                        </View>
                        <View style={styles.carFeatureDetail}>
                          <GasIcon />
                          <Text style={{marginLeft: wp(4)}}>Dizel</Text>
                        </View>
                      </View>
                      <View style={styles.carFeatureDetail}>
                        <View>
                          <View style={styles.carFeatureDetail}>
                            <KmIcon />
                            <Text style={{marginLeft: wp(4)}}>2012</Text>
                          </View>
                          <View style={styles.carFeatureDetail}>
                            <LocationIcon />
                            <Text style={{marginLeft: wp(4)}}>İstanbul</Text>
                          </View>
                        </View>
                      </View>
                      <View>
                        <Text style={styles.priceText}>129.500 TL</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </Card>
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    width: wp(332),
    padding: wp(10),
  },
  avatarContainer: {
    flex: 1,
  },
  profileInfosContainer: {
    flex: 3,
  },
  iconsContainer: {
    flexDirection: 'row',
    flex: 2.3,
  },
  touchableComponent: {
    width: wp(332),
  },
  carPhotoContainer: {
    width: wp(332),
    borderRadius: wp(7),
    paddingHorizontal: wp(10),
    borderColor: 'black',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: hp(135),
  },
  detailsContainer: {
    width: wp(332),
    paddingHorizontal: wp(10),
    alignSelf: 'center',
    paddingVertical: hp(10),
  },
  carFeatureDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  carFeatureDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontSize: FontSize(18),
    color: '#F5953C',
  },
  hearticon: {
    position: 'absolute',
    top: hp(6),
    left: wp(290),
  },
  carmodelimg: {
    position: 'absolute',
    width: wp(43),
    height: hp(43),
    alignItems: 'center',
    justifyContent: 'center',
    top: wp(78),
    left: wp(8),
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: wp(8),
  },
});

export default BeBuyerListingCard;
