import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [list, setList] = useState([]);

  const buy = async () => {
    try {
      var url = "http://172.16.174.58:3000/viewtokens"
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

  const getMovies = async () => {
    try {
      var jsonValue = await AsyncStorage.getItem('@storage_Key')
      var data = JSON.parse(jsonValue)
      setList(data.data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {getMovies()}, [])

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(data);
    console.log(list);
    let hasValue = list.indexOf(data)
    if(hasValue > -1){
      alert("Found");
      list.splice(hasValue, 1)
    }
    else
      alert("Not Found");
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
