import React, {useState} from "react";
import { Text, StyleSheet, View} from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = function() {
    //parent has state variables, need to pass to colorCounter, we pass the function to colorCounter
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    //function definition to check the bounds of the colors, to be reused

    const setColor = (color, change) => {
        switch (color) {
            case 'red' :
                //ternary operator
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green' :
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue' :
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default :
                return;
        }
    }

    // console.log(red);
    return( <View>
        <Text>Square Screen</Text>
        
        <ColorCounter color = "Red" 
            //passing the callback function to colorCounter
            onIncrease = {() => setColor('red', COLOR_INCREMENT )}
            onDecrease = {() => setColor('red', -1*COLOR_INCREMENT)}
        />
        <ColorCounter color = "Green" 
            onIncrease = {() => setColor('green', COLOR_INCREMENT)}
            onDecrease = {() => setColor('green', -1*COLOR_INCREMENT)}/>
        <ColorCounter color = "Blue" 
            onIncrease = {() => setColor('blue', COLOR_INCREMENT)}
            onDecrease = {() => setColor('blue', -1*COLOR_INCREMENT)}
        />
        <View style = {{height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}/>
    </View>);
};

const style = StyleSheet.create({

});

export default SquareScreen;