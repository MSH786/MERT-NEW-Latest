import React, {Fragment} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';

//Common Components
import TouchableComponent from '../custom/TouchableComponent';
import Card from '../custom/Card';
import ToucahbleIconCard from '../custom/ToucableIconCard';

//assets
import GearIcon from '../../../assets/icons/CardIcons/GearIcon';
import KmIcon from '../../../assets/icons/CardIcons/KmIcon';
import GasIcon from '../../../assets/icons/CardIcons/GasIcon';
import ShareIcon from '../../../assets/icons/ShareIcon';
import LocationIcon from '../../../assets/icons/CardIcons/LocationIcon';

import ProfilePhotoCard from '../card/ProfilePhotoCard';
import { FontSize } from '../../constants/Sizes';

const FilteredListingCard = props => {
  const {data} = props;
  console.log('hello');
  console.log(data);
  return (
    <View>
      {data === null ? (
        <Text style={styles.otomobiltxt}>No Activites</Text>
      ) : (
        <View>
          {data.map((item, i) => (
            <Card
              style={{
                width: wp(342),
                alignSelf: 'center',
                marginTop: hp(10),
                marginBottom: hp(10),
              }}
              key={i}>
              <View>
                <View style={styles.topContainer}>
                  <View style={styles.avatarContainer}>
                    <ProfilePhotoCard
                      style={{
                        height: hp(50),
                        width: wp(40),
                      }}
                      imageStyle={{
                        height: hp(50),
                        width: wp(40),
                      }}
                    />
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
                    <ToucahbleIconCard style={{marginRight: wp(5)}}>
                      <GearIcon />
                    </ToucahbleIconCard>
                    <ToucahbleIconCard>
                      <GearIcon />
                    </ToucahbleIconCard>
                  </View>
                </View>
                <TouchableComponent style={styles.touchableComponent}>
                  <View style={styles.carPhotoContainer}>
                    <Image
                      style={{
                        width: wp(324),
                        height: hp(132),
                        borderRadius: hp(7),
                      }}
                      source={require('../../../assets/images/dummyCarImages/car2.jpg')}></Image>
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
                </TouchableComponent>
              </View>
            </Card>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    width: wp(342),
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
    flex: 2.2,
  },
  touchableComponent: {
    width: wp(342),
  },
  carPhotoContainer: {
    width: wp(342),
    borderRadius: 7,
    paddingHorizontal: wp(10),
    borderColor: 'black',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: hp(135),
  },
  detailsContainer: {
    width: wp(342),
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
  },
});

export default FilteredListingCard;
