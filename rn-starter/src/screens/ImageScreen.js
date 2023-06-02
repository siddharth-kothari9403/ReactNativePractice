import React from "react";
import { Text, StyleSheet, View, Image} from "react-native";
//to use the imageDetail component just created, import it.

import ImageDetail from "../components/ImageDetail";

//title for imageDetail can be accessed using props in imageDetail, it is a custom attribute
const ImageScreen = function(){
    return (
        <View>
            <ImageDetail title = "Forest" imageSource = {require("../../assets/forest.jpg")}/>
            <ImageDetail title = "Beach" imageSource = {require("../../assets/beach.jpg")}/>
            <ImageDetail title = "Mountain" imageSource = {require("../../assets/mountain.jpg")}/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageScreen;