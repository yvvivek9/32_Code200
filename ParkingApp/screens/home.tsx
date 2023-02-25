import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from "./header";
import ViewButton from "./viewbutton"
import Select from "./select"

export default function Home() {
    return(
        <View>
            <Header />
            <ViewButton />
            <Select />
        </View>
    );
}