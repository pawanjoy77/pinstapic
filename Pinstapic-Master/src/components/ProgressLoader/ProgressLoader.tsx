import React, { Component, useState, useEffect } from 'react';
import {
    Platform,
    Button,
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    
    Switch,
    Alert
} from 'react-native';
import ProgressLoader from 'rn-progress-loader';

export default function ProgressLoading(props) {

    useEffect(() => {
        console.log(props);
    }, []);

    return (
        <View
            style={{ backgroundColor: "#06566e", justifyContent: 'center', alignItems: 'center', flex: 1 }}>

            <ProgressLoader
                visible={props.isLoading}
                isModal={true} isHUD={true}
                hudColor={"#000000"}
                color={"#FFFFFF"} />
        </View>
    );
};