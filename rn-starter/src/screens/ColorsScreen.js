import React, {useState}  from "react";
import { Text, StyleSheet, View, Button, FlatList} from "react-native";

const ColorsScreen = function(){
    //colors array is initially empty
    
    const [colors, setColors] = useState([]);
    // console.log(colors);

    return (
        <View>
            <Button title = "Add color"
            //syntax will copy the colors array, and call randomrgb to add a new color
            onPress={() => {setColors([...colors, randomRgb()])}}/>

            <FlatList 
                keyExtractor={item => item}
                data={colors}
                renderItem={
                    //item === rgb(0,0,0)
                    ({item}) => {return (<View style = {{height: 100, width: 100, backgroundColor : item }} /> )}
                }
            />
        </View>
    );
};

//helper function to generate random rgb values
const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    //to return a string with arguments
    return `rgb(${red}, ${green}, ${blue})`;
}

const style = StyleSheet.create({});

export default ColorsScreen;