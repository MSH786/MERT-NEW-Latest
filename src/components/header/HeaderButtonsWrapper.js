import React from "react";
import { StyleSheet, View } from "react-native";
import { hp, wp } from "../../constants/Dimensions";
import Colors from "../../constants/Colors";

export const HeaderButtonsWrapperRight = (props) => {

    const { children } = props;

    return (
        <View style={styles.containerRight}>
            {children}
        </View>
    );
};

export const HeaderButtonsWrapperLeft = (props) => {

    const { children } = props;

    return (
        <View style={styles.containerLeft}>
            {children}
        </View>
    );
};



const styles = StyleSheet.create({
    containerRight: {
        flexDirection: 'row',
        marginRight: wp(12),
        alignContent:'center',
    },
    containerLeft: {
        flexDirection: 'row',
        marginLeft: wp(12),
        alignContent:'center'
    },
});
