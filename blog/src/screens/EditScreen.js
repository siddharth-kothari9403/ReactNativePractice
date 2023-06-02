import React, {useContext} from "react";
import {StyleSheet} from "react-native";
import {Context as blogContext} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({navigation}) => {
    const id = navigation.getParam("id");
    const {state, editBlogPost} = useContext(blogContext);

    const blogPost = state.find((blogPost) => 
        blogPost.id === id
    )

    return <BlogPostForm 
        initialValues = {{title: blogPost.title, content: blogPost.content}}
        onSubmit={(title, content) => {
            //pop attribute takes us back to the previous screen in the navigation stack
            editBlogPost(id, title, content, () => {navigation.pop()})
    }}/>
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

export default EditScreen;