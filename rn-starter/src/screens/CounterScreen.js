import React, {useState}  from "react";
import { Text, StyleSheet, View, Button} from "react-native";

const CounterScreen = function(){
    
    ///to declare a state variable, and the function to change it, the syntax: 
    const [counter, setCounter] = useState(0);
    //0 - default value, counter -> state variable, setCounter-> function to change the value, that is what we call everywhere

    return (
        <View>
            <Button title= "Increase" onPress={() => setCounter(counter + 1)} />
            <Button title= "Decrease" onPress={() => setCounter(counter - 1)} />
            <Text>Current Counter: {counter}</Text>
        </View>
    );
}

const style = StyleSheet.create({

});

export default CounterScreen;