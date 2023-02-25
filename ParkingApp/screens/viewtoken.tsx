import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, StyleSheet, Button} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [waste, setWaste] = useState(0)

  const getMovies = async () => {
    try {
      const response = await fetch('http://192.168.94.152:3000/viewtokens');
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteQR = () => {
    let removed = data.shift()
    console.log(data)
    setWaste(waste + 1)
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{padding: 24}}>
        <QRCode value={data[0]} />
        <Text>{data.length - 1} QR left</Text>
        <Button title={'Refresh'} onPress={() => deleteQR()} />
    </View>
  );
};


export default App;