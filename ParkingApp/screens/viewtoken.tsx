import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [waste, setWaste] = useState(0)

  const getMovies = async () => {
    try {
      var jsonValue = await AsyncStorage.getItem('@storage_Key')
      var data = JSON.parse(jsonValue)
      setData(data.data)
    } catch (error) {
      console.error(error);
    }
  };

  const inc = () => {
    if(waste < data.length-1)
      setWaste(waste + 1)
  }

  const dec = () => {
    if(waste > 0)
      setWaste(waste - 1)
  }

  useEffect(() => {
    getMovies();
  }, []);

  if(data.length > 0)
    return (
      <View>
          <View style={style.container}>
            <QRCode value={data[waste]} size={250} />
            <Text style={style.num}>QR No.{waste + 1}</Text>
          </View>
          <View style={{marginTop: 30, flexDirection: "row", justifyContent: "space-around"}}>
            <TouchableOpacity style={style.button} onPress={() => dec()}>
              <Text style={style.font}>Prev</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button} onPress={() => inc()}>
              <Text style={style.font}>Next</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  else
      return(
        <View>
          <Text>No QR available</Text>
        </View>
      )
};

const style = StyleSheet.create({
  container:{
    alignItems: "center",
    marginTop: 50
  },
  num:{
    fontSize: 20,
    marginTop: 10,
  },
  button:{
    backgroundColor: "#0066ff",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10
  },
  font:{
    fontSize: 25,
    color: "white"
  }
})
export default App;