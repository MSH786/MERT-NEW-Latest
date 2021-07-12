import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Colors from '../../constants/Colors';
import {wp, hp} from '../../constants/Dimensions';
import HomeCategoryItemComponent from '../item/HomeCategoryItemComponent';

const HomeCategoryListComponent = ({
  data,
  containerStyle,
  onCategoryChange,
}) => {
  const [selectItem, setSelectItem] = React.useState({id: 0});

  const onHandleChange = item => {
    setSelectItem(item);
  };

  const Items = ({item}) => {
    return (
      <HomeCategoryItemComponent
        item={item}
        select={selectItem}
        onPress={onHandleChange}
        onCategoryChange={onCategoryChange}
      />
    );
  };

  return (
    <View style={[styles.container, {...containerStyle}]}>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={Items}
        keyExtractor={item => item.id}
        extraData={selectItem}
      />
    </View>
  );
};

export default HomeCategoryListComponent;

const styles = StyleSheet.create({
  container: {
    width: wp(360),
    height: hp(40),

    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
