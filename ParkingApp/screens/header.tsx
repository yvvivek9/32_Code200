import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>PES-U-tilities</Text>
      <Text style={styles.title}>Make your parking faster</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft : 12,
    backgroundColor : 'blue',
    
  },
  head: {
    color: 'white',
    marginLeft: 12,
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'left',
    fontSize : 36,
  },
  title: {
    textAlign: "right",
    fontSize: 20,
    marginBottom: 5,
    marginRight: 10,
    fontStyle: "italic",
    color: "#ccccff"
  }
});

export default Header;