import React from "react";
import {Text, StyleSheet, View, TextInput} from "react-native";
//library import of the icon
import {Ionicons} from "@expo/vector-icons"

// https://icons.expo.fyi/ -> to view about icons present and their libraries

//getting the required props
const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    //use name of the icon
    return (
        <View style={style.background}>
            
            <Ionicons name = "search-sharp" style={style.iconStyle}></Ionicons>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search" 
                style = {style.input} 
                value={term} 
                onChangeText={(newTerm) => onTermChange(newTerm)}
                onEndEditing={() => onTermSubmit()}
            />
        </View>

        //using the value and onChangeText as done previously, this time from props
        //onEndEditing means when the user presses the enter button on keyboard, the action onTermSubmit is performed
    );
};

const style = StyleSheet.create({
    background: {
        backgroundColor: 'grey',
        height: 50,
        margin: 15,
        //for rounded corners
        borderRadius: 5,
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        fontSize: 14
    },
    iconStyle: {
        alignSelf: 'center',
        fontSize: 35,
        marginHorizontal: 15
    }
});

export default SearchBar;
