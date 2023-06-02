import React, {useContext} from "react";
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";
import {Context as blogContext} from "../context/BlogContext";
import {EvilIcons} from "@expo/vector-icons";

const ShowScreen = ({navigation}) => {
    //getting the context from blogContext to use here
    const {state} = useContext(blogContext);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam("id"));

    return <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam("id")})}>
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({

});

export default ShowScreen;