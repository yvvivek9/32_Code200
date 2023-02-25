import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>PES-U-tilities</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height : 70,
    paddingLeft : 12,
    backgroundColor : 'blue',
    
  },
  head: {
    color: 'white',
    marginLeft: 12,
    marginTop: 10,
    textAlign: 'left',
    fontSize : 36,
  },
});

export default Header;