import React, {useState} from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import CButton from "./CButton";

const Tokens = ({navigation}) => {
  const [show, setShow] = useState(false);
  
  const changeview = () => {
    setShow(!show)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.parent}>
          <CButton text={"Buy Token"} press={() => changeview()} />
          <CButton text={"View Token"} press={() => navigation.navigate('Display')} />
        </View>
        <Select showTheThing={show}/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 100
  },
  parent: {
    paddingTop: 24,
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 10,
  },
});

const Select = ({ showTheThing }) => {
  
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
      showTheThing ?
      <View style={styless.container}>
    
      <View style={styless.countContainer}>
        <Text>Count: {count}</Text>
      </View>

      <TouchableOpacity style={styless.button} onPress={inc}>
        <Text> + </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styless.button} onPress={dec}>
        <Text> - </Text>
      </TouchableOpacity>

      <Text>
        Net Payable Amount : {count*10}
      </Text>

      <TouchableOpacity style={styless.button} onPress={Submit}>
        <Text> Pay Now </Text>
      </TouchableOpacity>
      
      </View> : null
  );
};

const styless = StyleSheet.create({
  container: {
    marginTop: 100
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },
  countContainer: {
    alignItems: 'center',
  },
});


export default Tokens;