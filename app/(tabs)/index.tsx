import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.body}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Hola BlackSip</Text>
      <TouchableWithoutFeedback
        onPress={() => Alert.alert("¿Por qué me tocaste?")}
      >
        <Text style={styles.alert}>No me vayas a tocar</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    margin: "auto",
  },
  title: {
    color: "#FFF",
  },
  alert: {
    color: "red",
  },
});
