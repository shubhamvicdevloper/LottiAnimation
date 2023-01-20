import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Lottie from "lottie-react-native";
import React, { useEffect, useRef } from "react";
import welcome from "./src/assets/welcome-animation.json";
export default function App() {
  const animationRef = useRef();
  return (
    <View style={styles.container}>
      <Text>HEllO </Text>
      <StatusBar style="auto" />
      <Lottie ref={animationRef} source={welcome} loop={true} autoPlay={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
