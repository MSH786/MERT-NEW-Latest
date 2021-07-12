import React, {useRef} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProfileInfosCard from '../../components/card/ProfileInfosCard';
import ProfilePageViewer from '../../components/views/ProfilePageViewer';
import Colors from '../../constants/Colors';
import {HeaderCustomOptions} from '../../navigators/NavigationHeaderOptions';

const OtherUserProfileScreen = () => {
  const navigation = useNavigation();

  navigation.setOptions(
    HeaderCustomOptions(
      '',
      Colors.white,
      Colors.white,
      ['Back'],
      ['Share', 'Chat', 'Call', 'More'],
    ),
  );

  const viewerRef = useRef();

  console.log('OtherUserProfileScreen');

  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <ProfileInfosCard />
      <ProfilePageViewer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default OtherUserProfileScreen;

/*/
onPageSelected={e => {
  setIndex(e.nativeEvent.position);
}}


<View>
<ProfileCarListing data={DATA} section={'Sattıklarım'} />
</View>
<View>
<ProfileCarListing data={DATA} section={'Favoriler'} />
</View>
*/
