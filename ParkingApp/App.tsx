import React, {useEffect} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from "./screens/header";
import ViewButton from "./screens/viewbutton"
import ViewToken from './screens/viewtoken';

function App() {
  const Stack = createNativeStackNavigator();

  const buy = async () => {
    try {
      var url = "http://3.111.245.252:3000/viewtokens"
      var call = await fetch(url)
      if(call != null){
        var response = await call.json()
        var jsonValue = JSON.stringify(response)
        await AsyncStorage.setItem('@storage_Key', jsonValue)
        alert("Online! Database updated")
      }
    } catch (error) {
      alert("Offline! Database not updated")
    }
  }

  useEffect(() => {buy()}, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Display" component={Display} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({ navigation }) {
  return (
    <View>
      <Header />
      <ViewButton navigation={navigation} />
    </View>
  );
}

function Display() {
  return(
    <View>
      <Header />
      <ViewToken />
    </View>
  );
}

export default App;


