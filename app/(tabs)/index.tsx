import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.body}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Hola BlackSip</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    margin: "auto"
  },
  title: {
    color: "#FFF",
  },
});
