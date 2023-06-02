//the imports are done here
import React from "react";
import { Text, StyleSheet, View} from "react-native";

//here is the component definition, returns a JSX, which looks something like HTML
//JSX is a form of javascript which tells react what we want to do, it is not equal to javascript

//prop is used to configure the JSX, eg. the style attribute
const ComponentsScreen = function() {
    //variables
    const greeting = "Hi there!";
    const greeting1 = ["asdf", "bbb"];
    const greeting2 = <Text>Yo</Text>

    return (
        <View>
            <Text style = {style.textStyle}>This is the ComponentsScreen</Text>
            <Text style = {style.subHeader}>{greeting}</Text>
            <Text>{greeting1}</Text>
            {greeting2}
        </View>
    
    );
};

//the stylesheet definition, which contains the styles to be used
const style = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
    subHeader: {
        fontSize: 20,
    }
})

//export the component to use it in the project
export default ComponentsScreen;