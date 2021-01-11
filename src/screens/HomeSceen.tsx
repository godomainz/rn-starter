import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }:any) => {
  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>
      <Button
        onPress={() => navigation.navigate("Components")} 
        title="Go to Components demo"/>
      <Button
        onPress={() => navigation.navigate("List")} 
        title="Go to List demo"/>
      <Button
        onPress={() => navigation.navigate("Image")} 
        title="Go to Image demo"/>
      <Button
        onPress={() => navigation.navigate("Counter")} 
        title="Go to Counter demo"/>
      <Button
        onPress={() => navigation.navigate("Color")} 
        title="Go to Color demo"/>
      <Button
        onPress={() => navigation.navigate("Square")} 
        title="Go to Square demo"/>
      <Button
        onPress={() => navigation.navigate("Text")} 
        title="Go to Text demo"/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
