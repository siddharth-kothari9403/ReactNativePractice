import React from "react";
import { Text, StyleSheet, View, FlatList} from "react-native";

//Flatlist used to show an array as a list on the screen
//takes 2 props, the array of data and the renderItem
//renderItem function tells how to convert each item to an element

const ListScreen = function() {
    const friends = [
        {name: "Friend 1", age: "20"},
        {name: "Friend 2", age: "25"},
        {name: "Friend 3", age: "20"}
    ];

    return (
        //only one element is allowed as parent, should wrap everything
        <View>
            <Text>List Screen</Text>

            <FlatList 
                // horizontal prop is used to make the list horizontally scrollable
                // horizontal -> just writing this works
                // showsHorizontalScrollIndicator -> to show the scroll bar
                // showsHorizontalScrollIndicator = {false} -> to not show it
                keyExtractor={friend => friend.name}
                //the key is used to uniquely identify a record, hence we choose a property which can serve as key
                // helps react native keep track of elements and optimise the performance, not necessary though
                data = {friends}
                renderItem = {({ item }) => {
                    //item is the object that it will take, here it will be that object in the friends array
                    //hence that object has the property name, and we can use it as we want
                    //the renderItem contains JSX code to tell wht to do with the item object
                    return <Text style = {style.TextStyle}>{item.name} - Age: {item.age}</Text>
                }}
            />
        </View>
    );
};

const style = StyleSheet.create({
    TextStyle: {
        marginVertical: 20
    }
});

export default ListScreen;