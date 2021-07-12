import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Text, View } from 'react-native'
import Colors from '../../constants/Colors';
import { HeaderDefaultOptions } from '../../navigators/NavigationHeaderOptions';

const MailPhoneConfirmationScreen = () => {

    const navigation = useNavigation();

    navigation.setOptions(HeaderDefaultOptions('', Colors.primary));

    
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
}



export default MailPhoneConfirmationScreen;