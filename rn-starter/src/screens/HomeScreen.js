import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

//props is the argument that it is supposed to take
const HomeScreen = (props) => {
 

  return(
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        //the onPress is to handle what to do
        onPress={() => props.navigation.navigate("Components")}
        //to navigate to the screen, the name is same as what is put in App.js
        title="Go to Components Screen" 
      />

      <Button
        //the onPress is to handle what to do
        onPress={() => props.navigation.navigate("List")}
        //to navigate to the screen, the name is same as what is put in App.js
        title="Go to List Screen" 
      />

      <Button
        //the onPress is to handle what to do
        onPress={() => props.navigation.navigate("Image")}
        //to navigate to the screen, the name is same as what is put in App.js
        title="Go to Image Screen" 
      />

      <Button
        //the onPress is to handle what to do
        onPress={() => props.navigation.navigate("Counter")}
        //to navigate to the screen, the name is same as what is put in App.js
        title="Go to Counter Screen" 
      />

      <Button 
        title="Go to Colors Screen"
        onPress={() => props.navigation.navigate("Colors")}
      />

      <Button 
        title="Go to Square Screen"
        onPress={() => props.navigation.navigate("Square")}
      />

      <Button 
        title="Go to Reducer Screen"
        onPress={() => props.navigation.navigate("Reduce")}
      />

      <Button 
        title="Go to Text Screen"
        onPress={() => props.navigation.navigate("Text")}
      />

      <Button 
        title="Go to Box Screen"
        onPress={() => props.navigation.navigate("Box")}
      />

      <Button 
        title="Go to Layout Screen"
        onPress={() => props.navigation.navigate("Layout")}
      />

      <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

 //can also do this instead of passing the entire props, just pass the required attributes
// const HomeScreen = ({ navigation }) => {
  
// and use it as follows
//       <Button
//         onPress={() => navigation.navigate("List")}
//         title="Go to List Screen" 
//       />

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
