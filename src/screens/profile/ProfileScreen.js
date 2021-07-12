import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProfileInfosCard from '../../components/card/ProfileInfosCard';
import {HeaderCustomOptions} from '../../navigators/NavigationHeaderOptions';
import ProfilePageViewer from '../../components/views/ProfilePageViewer';
import Colors from '../../constants/Colors';

import navigator from '../../utils/navigator';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [scroll, setScroll] = useState(false);

  const viewerRef = useRef();

  navigation.setOptions(
    HeaderCustomOptions(
      '',
      Colors.white,
      Colors.lightGray,
      ['NotificationSmall'],
      ['Share', 'Settings'],
    ),
  );

  return (
    <ScrollView style={styles.container}>
      <ProfileInfosCard onChangeScroll={is => alert(is)} />

      <ProfilePageViewer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default ProfileScreen;
