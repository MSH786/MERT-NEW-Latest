import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {wp, hp} from '../../constants/Dimensions';
import {FontSize} from '../../constants/Sizes';
import {CardTypeData} from '../../data/data';
import CarTypeItem from '../item/CarTypeItem';

const CarTypeListComponent = props => {
  const {onChange} = props;

  const [selectItem, setSelectItem] = React.useState({ id: 0 });

  const onHandleChange = (item) => {
    setSelectItem(item);
  };

  const Items = ({ item }) => {
    return <CarTypeItem
      item={item}
      select={selectItem}
      onPress={onHandleChange}
    />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={CardTypeData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={Items}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        extraData={selectItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default CarTypeListComponent;
