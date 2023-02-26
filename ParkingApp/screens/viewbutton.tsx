import React, {useState} from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, TouchableOpacity, Text, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
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
        <Select showTheThing={show} />
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
  const buy = async () => {
    try {
      var url = "http://3.111.245.252:3000/buytokens?count=" + count
      var call = await fetch(url)
      var response = await call.json()
      var jsonValue = JSON.stringify(response)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
      setCount(0)
      alert("Amount Paid")
    } catch (error) {
      console.log(error)
      alert("Transaction Failed")
    }
  }

  return (
      showTheThing ?
      <View style={styless.container}>
      <View style={styless.buttonContainer}>
        <TouchableOpacity style={styless.button} onPress={() => dec()}>
          <Text style={styless.font}>-</Text>
        </TouchableOpacity>
        <Text style={[styless.font, {marginTop: 8}]}>Count: {count}</Text>
        <TouchableOpacity style={styless.button} onPress={() => inc()}>
          <Text style={styless.font}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={[styless.buttonContainer, {marginTop: 20}]}>
        <Text style={styless.font}>
          Net Payable Amount : {count*10}
        </Text>
      </View>
      <View style={styless.buttonContainer}>
        <TouchableOpacity style={[styless.button, {marginTop: 25}]} onPress={() => buy()}>
          <Text style={styless.font}>Pay Now</Text>
        </TouchableOpacity>
      </View>
      </View> : null
  );
};

const styless = StyleSheet.create({
  container: {
    marginTop: 80
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  button: {
    alignItems: 'center',
    backgroundColor: "#8080ff",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  font: {
    fontSize: 20,
  },
});


export default Tokens;