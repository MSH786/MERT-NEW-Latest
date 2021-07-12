import React from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import Colors from '../../../constants/Colors';
import SearchBarComponent from '../../input/SearchBarComponent';
import {wp, hp} from '../../../constants/Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FontSize} from '../../../constants/Sizes';

const Chat = props => {
  const {data} = props;
  const _renderItem = ({item, index}) => {
    console.log('data', item);
    return (
      <View>
        {item.messageStatus === 'recieved' ? (
          <View style={styles.itemView}>
            <Image style={styles.userImage} source={item.userImg} />
            <View style={styles.messageBox}>
              <Text style={styles.messageText}>{item.message}</Text>
              <View style={styles.dateTime}>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.date}>{item.time}</Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={[styles.itemView, {justifyContent: 'flex-end'}]}>
            <View style={[styles.messageBox, styles.sentMessageBox]}>
              <Text style={styles.messageText}>{item.message}</Text>
              <View style={styles.dateTime}>
                <View style={styles.readStatusView}>
                  <Ionicons
                    style={styles.iconFind}
                    name={'md-checkmark-done-sharp'}
                    size={wp(15)}
                    color={Colors.darkGray}
                  />
                  <Text
                    style={[
                      styles.date,
                      {color: Colors.darkGray, marginLeft: wp(2)},
                    ]}>
                    {item.date}
                  </Text>
                </View>
                <Text style={[styles.date, {color: Colors.darkGray}]}>
                  {item.time}
                </Text>
              </View>
            </View>
            <Image style={styles.userImage} source={item.userImg} />
          </View>
        )}
      </View>
    );
  };
  return (
    <View style={styles.SearchBarView}>
      <Text style={styles.userDesc}>
        +90 530 700 00 00 nolu telefon numaranız karşı taraf ile
        paylaşılacaktır. Kişisel verilerin işlenmesine dair{' '}
        <Text style={{color: Colors.primary}}>aydınlatma</Text>
      </Text>
      <FlatList data={data} renderItem={_renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  SearchBarView: {
    flex: 1,
    paddingHorizontal: wp(20),
  },
  userDesc: {
    color: Colors.chatUserDesc,
    fontWeight: '800',
    fontSize: FontSize(13),
    marginTop: hp(10),
    marginBottom: hp(30),
  },
  userImage: {
    width: hp(32),
    height: hp(32),
    borderRadius: hp(7),
  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: hp(10),
    width: '100%',
  },
  messageBox: {
    marginLeft: wp(10),
    padding: hp(10),
    borderBottomEndRadius: hp(15),
    borderTopEndRadius: hp(15),
    borderTopStartRadius: hp(15),
    backgroundColor: Colors.white,
    maxWidth: wp(215),
    minWidth: wp(140),
  },
  messageText: {
    fontSize: FontSize(15),
    fontWeight: '400',
    color: Colors.darkGray,
  },
  dateTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(5),
    alignItems: 'center',
  },
  date: {
    fontSize: FontSize(12),
    color: Colors.chatDate,
  },
  sentMessageBox: {
    marginRight: wp(10),
    borderBottomStartRadius: hp(15),
    borderBottomEndRadius: hp(0),
    marginLeft: 0,
    backgroundColor: Colors.iconBackground,
  },
  readStatusView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Chat;
