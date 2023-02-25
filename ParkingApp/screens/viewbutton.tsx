import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import CButton from "./CButton";

const Tokens = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.parent}>
          <CButton text={"Buy Token"} press={() => alert('button pressed')} />
          <CButton text={"View Token"} press={() => navigation.navigate('Display')} />
        </View>
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

export default Tokens;