import React from "react";
import {StyleSheet, View} from "react-native";

const LayoutScreen = () => {
    return (
        <View style={style.outerViewStyle}>
            <View style={style.outerViewOneStyle}>
                <View style={style.innerViewOneStyle} />

                <View style={style.innerViewTwoStyle} />
            </View>

            <View style={style.innerViewThreeStyle} />
        </View>
    );
};

const style = StyleSheet.create({
    outerViewStyle: {
        height: 100,
    },

    outerViewOneStyle: {
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    innerViewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: "pink",
        alignSelf: "flex-start"
    },

    innerViewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: "purple",
        alignSelf: "flex-end"
    },

    innerViewThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: "green",
        alignSelf: "center"
    }
});

export default LayoutScreen;