import React from "react";
import { Text, StyleSheet, View, Image} from "react-native";

//the self made tag that can be reused in other files
const ImageDetail = function(props) {
    // console.log(props);

    //how to display an image
    // <Image source={require("../../assets/beach.jpg")}/>
    return (
        <View>
            <Image source={props.imageSource}/>
            <Text>{props.title}</Text>
        </View>
        
    )
}

const style = StyleSheet.create({

});

export default ImageDetail;