import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, Image, Text, SafeAreaView, Alert} from 'react-native';
import Colors from '../constants/Colors';
import {wp, hp} from '../constants/Dimensions';
import {useDispatch, useSelector} from 'react-redux';
import HomeCategoryListComponent from '../components/listing/HomeCategoryListComponent';
import HomeFlowStaggeredListComponent from '../components/listing/HomeFlowStaggeredListComponent';
import FloatingButtonComponent from '../components/button/FloatingButtonComponent';
import {dataCategory, homeData} from '../data/data';
import {useNavigation} from '@react-navigation/core';
import {HeaderCustomOptions} from '../navigators/NavigationHeaderOptions';
import * as mainShowcaseActions from '../redux/actions/mainShowcase';

import navigator from '../utils/navigator';

const HomeScreen = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const fetchLoading = useSelector(state => state.mainShowcase.fetchLoading);
  const fetchError = useSelector(state => state.mainShowcase.fetchError);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [category, setCategory] = useState({title: 'all'});

  /*/
  navigation.setOptions(
    HeaderCustomOptions('Değerini Öğren', Colors.white, Colors.darkGray, [
      'Back',
    ]),
  );
  /*/

  const onCategoryChange = ({title}) => {
    setCategory(title);
  };

  console.log(category);

  navigation.setOptions(
    HeaderCustomOptions('', Colors.white, Colors.darkGray, [
      'SearchBar',
      'NotificationBig',
    ]),
  );

  useEffect(() => {
    /**  if (fetchError) {
       Alert.alert('Something went wrong!', 'Please try again', [
         {text: 'Okay', onPress: () => mainShowcaseActions.cleanFetchError()},
       ]);
       setIsRefreshing(false);
     }*/
  }, [fetchError, isRefreshing]);

  // const fetchMainShowcaseItems = useCallback(async () => {
  //   dispatch(mainShowcaseActions.fetchShowcaseItems());
  // }, [dispatch]);

  // useEffect(() => {
  //   fetchMainShowcaseItems();
  // }, []);

  // useEffect(() => {
  //   let isCancelled = false;
  //   if (!isCancelled) {
  //     setIsRefreshing(true);
  //     fetchMainShowcaseItems().then(() => {
  //       setIsRefreshing(false);
  //     });
  //   }
  //   return () => {
  //     isCancelled(true);
  //   };
  // }, [fetchMainShowcaseItems, dispatch]);

  return (
    <View style={styles.container}>
      <HomeCategoryListComponent
        data={dataCategory}
        containerStyle={styles.categoryList}
        onCategoryChange={onCategoryChange}
      />

      <HomeFlowStaggeredListComponent
        data={homeData}
        containerStyle={styles.staggeredList}
        navigateToAdDetails={() => {
          navigator(navigation, 'FindBuyerDetailsScreen')
        }}
      />

      {/* <FloatingButtonComponent containerStyles={styles.floatingButton} />*/}
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  categoryList: {
    marginTop: hp(5),
  },
  staggeredList: {
    marginTop: hp(10),
  },
  floatingButton: {
    marginLeft: wp(305),
  },
});
