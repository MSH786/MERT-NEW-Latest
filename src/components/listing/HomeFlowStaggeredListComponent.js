import React from 'react';
import {StyleSheet, View, FlatList, ScrollView, Text} from 'react-native';
import Colors from '../../constants/Colors';
import {wp, hp} from '../../constants/Dimensions';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import HomeCarHeaderItemComponent from '../item/HomeCarHeaderItemComponent';
import HomeCarItemComponent from '../item/HomeCarItemComponent';
import HomeCarGroupItemComponent from '../item/HomeCarGroupItemComponent';
import MasonryList from '@react-native-seoul/masonry-list';

import navigator from '../../utils/navigator';

const HomeFlowStaggeredListComponent = ({data, containerStyle, navigateToAdDetails}) => {
  const [selectItem, setSelectItem] = React.useState({id: 0});

  const navigation = useNavigation();

  const rows = 3;
  const cols = 2;
  const marginHorizontal = 4;
  const marginVertical = 4;

  const onHandleChange = item => {
    setSelectItem(item);
  };

  const Items = item => {
    return (
      <HomeCarItemComponent
        key={item.id}
        item={item}
        select={selectItem}
        onPress={onHandleChange}
        navigateToAdDetails={navigateToAdDetails}
      />
    );
  };

  const renderItem = ({item}) => {
    return (
      <>
        {item.advertisement === true ? (
          <HomeCarGroupItemComponent item={item} />
        ) : (
          Items(item)
        )}
      </>
    );
  };

  return (
    <View style={[styles.container, {...containerStyle}]}>
      <MasonryList
        data={data}
        style={styles.list}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectItem}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        ListHeaderComponent={<HomeCarHeaderItemComponent />}
        ListHeaderComponentStyle={styles.listHeaderComponentStyle}
      />
    </View>
  );
};

export default HomeFlowStaggeredListComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginLeft:wp(20),
  },
  list: {
    width: wp(354),
    flex: 1,
    flexGrow: 1, 
  },
  listHeaderComponentStyle:{
    width: wp(337),
   
  }
});
