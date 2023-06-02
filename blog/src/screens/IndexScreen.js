import React, {useContext, useEffect} from "react";
import {Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import {Context as BlogContext} from "../context/BlogContext";
import { FontAwesome5 } from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {

    //how to get the value from context
    const {state, deleteBlogPost, getBlogPost} = useContext(BlogContext);

    //to call it only once
    useEffect(() => {
        getBlogPost();

        //to call it whenever the index screen is displayed again
        const listener = navigation.addListener('didFocus', () => {
            getBlogPost();
        });

        return () => {
            listener.remove();
        };

    }, []);

    return (
        <View>
            <FlatList 
            data={state} 
            keyExtractor={(blogPost) => blogPost.title}
            renderItem = {({item}) => {
                return (<TouchableOpacity onPress={() => navigation.navigate("Show", {id: item.id})}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress = {() => {deleteBlogPost(item.id)}}>
                                <FontAwesome5 name="trash" style={styles.icon}/>
                            </TouchableOpacity>
                        
                        </View>
                    </TouchableOpacity>
                );
            }}
            />
            
        </View>
    );
};

//to add a navigation button to the header of the screen
//the function returns the following navigation options

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        //headerRight will have a jsx object returned 
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
              <Feather name="plus" size={30} />
            </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderLeftWidth: 1, 
        borderRightWidth: 1,
        borderColor: "gray"
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;