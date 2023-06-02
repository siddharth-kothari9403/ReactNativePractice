import React, {useContext} from "react";
import {StyleSheet} from "react-native";
import {Context as blogContext} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({navigation}) => {
    
    const {addBlogPost} = useContext(blogContext);
    return <BlogPostForm onSubmit = {(title, content) => {
        addBlogPost(title, content, () => {navigation.navigate("Index")})
    }}/>

    //pass the callback function to navigate to the previous screen as an argument to the function, and call it from there 
}

const styles = StyleSheet.create({
    
});

export default CreateScreen;