import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Select = () => {
  
  const [count, setCount] = useState(0);
  const inc = () => {
    if(count < 31){
    setCount(prevCount => prevCount + 1);}
    }
  const dec = () => {
    if(count > 0){
    setCount(prevCount => prevCount - 1);}
  }
  const Submit = () => alert("Submitted");

  return (
    <View style={styles.container}>
    
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={inc}>
        <Text> + </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={dec}>
        <Text> - </Text>
      </TouchableOpacity>

      <Text>
        Net Payable Amount : {count*10}
      </Text>

      <TouchableOpacity style={styles.button} onPress={Submit}>
        <Text> Pay Now </Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },
  countContainer: {
    alignItems: 'center',
  },
});

export default Select;