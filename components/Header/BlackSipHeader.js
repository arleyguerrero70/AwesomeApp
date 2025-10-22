import React from 'react';
import { View, Text } from 'react-native';

export default function BlackSipHeader() {
    return (
        <View style={{flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white'}}>BlackSip Header</Text>
        </View>
    );
}