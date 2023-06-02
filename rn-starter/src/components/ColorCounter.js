import React from "react";
import { Text, StyleSheet, View, Button} from "react-native";

const ColorCounter = function(props) {
    return( <View>
        <Text>{props.color}</Text>
        <Button 
            //using the callback function here 
            onPress={() => props.onIncrease()}
            title = {`Increase ${props.color}`}
        />
        <Button 
            onPress={() => props.onDecrease()}
            title = {`Decrease ${props.color}`}
        />
    </View>);
};

const style = StyleSheet.create({

});

export default ColorCounter;