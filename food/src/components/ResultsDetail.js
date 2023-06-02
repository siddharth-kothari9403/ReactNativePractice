import React from "react";
import {Text, StyleSheet, View, Image} from "react-native"

const ResultsDetail = ({item}) => {
    return (
        <View style={style.ViewStyle}>
            <Image style={style.ImageStyle} source = {{ uri: item.image_url}}/>
            <Text style={style.TitleStyle}>{item.name}</Text>
            <Text>Stars: {item.rating}, Reviews: {item.review_count}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    ViewStyle: {
        margin: 10
    },
    ImageStyle: {
        width: 200,
        height: 200,
        borderRadius: 5
    },
    TitleStyle: {
        fontSize: 14,
        fontWeight: "bold",
    }
});

export default ResultsDetail;