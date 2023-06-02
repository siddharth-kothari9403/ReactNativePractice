import React from "react";
import {Text, StyleSheet, View} from "react-native";

const BoxScreen = () => {
    return (
        <View style={style.viewStyle}>
            <Text style={style.textOneStyle}>Child 1</Text>
            <Text style={style.textTwoStyle}>Child 2</Text>
            <Text style={style.textThreeStyle}>Child 3</Text>
        </View>
    );
};

const style = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: "black",
        height: 200,
        //these 3 are parent attributes, there are some for children as well
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around"
        //flexDirection = row means the children are shown horizontally, hence align itmes aligns them vertically
        //ulta for flexDirection = column

        //justifyContent works opposite to alignItems
    },

    //child attributes are flex and alignSelf
    //flex assigns the weight to the element, based on weights the content is displayed

    //alginSelf overrides the value set by the parent

    //top, left, bottom and right properties are a bit different from margin
    //when we put margin = 10, then margin is added
    //if we put top = 10, first the elements are added then the element is shifted down to make space of 10 on top
    //this will cover the element below it

    //position attribute is used to make the element independent of its siblings
    //position: "relative" is default, we can set it to "absolute"
    textOneStyle: {
        flex: 1,
        borderWidth: 3, 
        borderColor: "red",
        margin: 5
    },

    textTwoStyle: {
        flex: 2, 
        borderWidth: 3, 
        borderColor: "red",
        margin: 5
    },

    textThreeStyle: {
        borderWidth: 3, 
        borderColor: "red",
        margin: 5
    }

    //to make an object completely fill a parent, we use 
    //position: "absolute", top:0, bottom: 0, left: 0, right: 0
    //or use 
    // textTwoStyle: {
    //     flex: 2, 
    //     borderWidth: 3, 
    //     borderColor: "red",
    //     margin: 5
    //     ...Stylesheet.absoluteFillObject //this is predefined to the above 5 values
    // },
});

export default BoxScreen;