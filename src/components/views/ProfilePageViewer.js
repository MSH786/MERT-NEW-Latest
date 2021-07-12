import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  Animated,
  TouchableOpacity,
} from 'react-native';
import SearchBarComponent from '../input/SearchBarComponent';
import PagerView from 'react-native-pager-view';
import {wp, hp} from '../../constants/Dimensions';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import ProfileCarListing from '../listing/ProfileCarListing';
import ProfileSearchBar from '../input/ProfileSearchBar';
import {FontSize} from '../../constants/Sizes';
import {dataProfile, homeData} from '../../data/data';
import TouchableComponent from '../custom/TouchableComponent';
import ProfileCarCard from '../card/ProfileCarCard';

const ProfilePageViewer = props => {
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    this.viewPager.setPage(page);
  }, [page]);

  const onSelectTab = page => {
    this.viewPager.setPage(page);
    setPage(page);
  };

  const selectItemColor = select => {
    if (page === select) return Colors.primary;
    else return Colors.softGray;
  };

  const selectItemView = select => {
    if (page === select) return styles.tab;
    else return styles.unTab;
  };

  return (
    <>
      <View style={styles.contentTabs}>
        <TouchableComponent
          style={selectItemView(0)}
          onPress={() => onSelectTab(0)}>
          <Text style={[styles.tabText, {color: selectItemColor(0)}]}>
            Galerim
          </Text>
        </TouchableComponent>

        <TouchableComponent
          style={selectItemView(1)}
          onPress={() => onSelectTab(1)}>
          <Text style={[styles.tabText, {color: selectItemColor(1)}]}>
            Sattıklarım
          </Text>
        </TouchableComponent>

        <TouchableComponent
          style={selectItemView(2)}
          onPress={() => onSelectTab(2)}>
          <Text style={[styles.tabText, {color: selectItemColor(2)}]}>
            Favorilerim
          </Text>
        </TouchableComponent>
      </View>

      <View style={styles.searchBarContainer}>
        <ProfileSearchBar placeHolder={'Kelime/ilan numarası girin'} />
      </View>

      <PagerView
        ref={viewPager => {
          this.viewPager = viewPager;
        }}
        style={styles.viewPager}
        initialPage={page}
        onPageSelected={e => {
          setPage(e.nativeEvent.position);
        }}
        showPageIndicator={false}
        pageIndicatorColor={Colors.Primary}>
        <View style={styles.view} key="0">
          <ProfileCarListing data={dataProfile} />
        </View>
        <View style={styles.view} key="1">
          <ProfileCarListing data={dataProfile} />
        </View>
        <View style={styles.view} key="2">
          <ProfileCarListing data={dataProfile} />
        </View>
      </PagerView>
    </>
  );
};

const styles = StyleSheet.create({
  contentTabs: {
    width: wp(262),
    height: hp(25),
    flexDirection: 'row',
    marginTop: hp(10),
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  tab: {
    justifyContent: 'center',
    width: wp(87),
    borderColor: Colors.primary,
    borderBottomWidth: 0.8,
  },
  unTab: {
    justifyContent: 'center',
    width: wp(87),
  },
  tabText: {
    textAlign: 'center',
    fontWeight: '800',

    fontSize: FontSize(17),
    color: Colors.darkGray,
  },
  indicatorTextBottomBorder: {
    borderWidth: wp(1),
    borderColor: Colors.mainOrange,
    marginTop: hp(2),
  },
  searchBarContainer: {
    marginTop: hp(13),
    marginBottom: hp(10),
    alignSelf: 'center',
  },
  viewPager: {
    flex: 1,
    flexGrow: 1,
    height: 500,
  },
  view: {
    alignItems: 'center',

    height: 500,
  },
});

export default ProfilePageViewer;
