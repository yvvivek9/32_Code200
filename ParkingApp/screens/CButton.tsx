import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CButton = ({ text, press }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={press}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 18,
    width: "46%",
    height: 60,
  },
  text: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});

export default CButton;