import React from 'react';
import {View, StyleSheet, FlatList, Text, ScrollView} from 'react-native';
import {cos} from 'react-native-reanimated';
import ProfileCarCard from '../card/ProfileCarCard';

const ProfileCarListing = props => {
  const {data, onScroll, scrollEnabled} = props;
  const [selectItem, setSelectItem] = React.useState({id: 0});

  const onHandleChange = item => {
    setSelectItem(item);
  };

  const Items = ({item}) => {
    return (
      <ProfileCarCard
        item={item}
        select={selectItem}
        onPress={onHandleChange}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
      nestedScrollEnabled={false}
        style={styles.list}
        data={data}
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
  list:{
    flex:1,
    flexGrow: 1,
  }
});

export default ProfileCarListing;
