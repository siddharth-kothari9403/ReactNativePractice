import React, {useState} from "react";
import {Text, StyleSheet, View, TextInput, Button} from "react-native";

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return <View>
        <Text style = {styles.label}>Enter Title: </Text>
        <TextInput value = {title} onChangeText = {(text) => {setTitle(text)}} style = {styles.input}/>
        <Text style = {styles.label}>Enter Content: </Text>
        <TextInput value = {content} onChangeText = {(cont) => {setContent(cont)}} style = {styles.input}/>
        <Button title="Save Blog Post" onPress={
            () => onSubmit(title, content)
        }/>
    </View>
};


//to define default values of props

BlogPostForm.defaultProps = {
    initialValues : {
        title: "",
        content: ""
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18, 
        borderWidth: 1, 
        borderColor: "black",
        padding: 5,
        marginBottom: 15,
        margin: 5
    }, 
    label: {
        fontSize: 20,
        marginBottom: 10
    }
});

export default BlogPostForm;