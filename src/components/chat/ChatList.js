import React from 'react';
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
import {FontSize} from '../../constants/Sizes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import navigator from '../../utils/navigator';

const ChatList = props => {
  const {data} = props;
  const navigation = useNavigation();

  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigator(navigation, 'ChatDetailScreen');
        }}
        style={styles.itemMainView}>
        <Image style={styles.carImage} source={item.img} />
        <View style={styles.middleView}>
          <Text numberOfLines={1} style={styles.carName}>
            {item.carName}
          </Text>
          <Text numberOfLines={1} style={styles.userNmae}>
            {item.userName}
          </Text>
          <View style={styles.lastTextView}>
            {item.lastTextStatus == 'sent' ? (
              <Ionicons style={styles.checkSize} name={'md-checkmark-sharp'} />
            ) : (
              item.lastTextStatus == 'delivered' && (
                <Ionicons
                  style={[styles.checkSize, {color: Colors.primary}]}
                  name={'md-checkmark-done-sharp'}
                />
              )
            )}
            <Text numberOfLines={1} style={styles.lastText}>
              {item.lastText}
            </Text>
          </View>
        </View>
        <View style={styles.rightView}>
          <Text style={styles.timeText}>{item.time}</Text>
          <Image style={styles.userImageView} source={item.userImg} />
          {item.unreadTexts != 0 && (
            <View style={styles.unreadTextView}>
              <Text>{item.unreadTexts}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        extraData={data}
        keyExtractor={item => item.id}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemMainView: {
    flexDirection: 'row',
    paddingVertical: hp(10),
    borderBottomWidth: hp(1),
    borderBottomColor: `${Colors.darkGray}07`,
  },
  carImage: {
    width: '20%',
    height: hp(66),
    borderRadius: hp(10),
  },
  middleView: {
    width: '60%',
    paddingLeft: wp(10),
  },
  carName: {
    fontWeight: 'bold',
    fontSize: FontSize(17),
    color: Colors.darkGray,
    width: '100%',
  },
  userNmae: {
    fontWeight: '800',
    fontSize: FontSize(17),
    color: Colors.homeItem,
    width: '100%',
  },
  lastText: {
    fontSize: FontSize(15),
    color: `${Colors.darkGray}50`,
    width: '100%',
  },
  rightView: {
    width: '20%',
    alignItems: 'flex-end',
  },
  userImageView: {
    width: hp(40),
    height: hp(40),
    borderRadius: hp(20),
    marginTop: hp(5),
  },
  timeText: {
    fontSize: FontSize(15),
    color: Colors.homeItem,
  },
  unreadTextView: {
    position: 'absolute',
    width: hp(22),
    height: hp(22),
    borderRadius: hp(11),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -hp(7),
  },
  checkSize: {
    fontSize: FontSize(18),
    marginRight: hp(5),
    color: `${Colors.darkGray}50`,
  },
  lastTextView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
