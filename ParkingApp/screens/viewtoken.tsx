import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, StyleSheet} from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('http://192.168.71.152:3000/viewtokens');
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{padding: 24}}>
        <Text>{data[0]}</Text>
    </View>
  );
};


export default App;