import React, {useReducer} from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

//context allows us to pass info from a parent to a nested child. Props only allows us to move to an immediate child.

const blogReducer = (state, action) => {
    switch(action.type) {
        case "get_blogpost": 
            return action.payload;
        case "edit_blogpost":
            //if the id is equal to the id passed in action, we change it, else we let the blogpost be
            //state.map is used to iterate over the state

            //iterate over the blogposts, when we get the reqd blogpost, we take the blogpost from payload, else we let it be
            return state.map( (blogPost) => {
                if (blogPost.id === action.payload.id){
                    return action.payload;
                }else{
                    return blogPost;
                }

                //we can also write return blogPost.id === action.payload.id ? action.payload : blogPost;
            })
        case "delete_blogpost":
            return state.filter((blogPost) => blogPost.id !== action.payload)
            //when condition in filter is true, the blogPost object is retained in the array. hence we effectively delete the post by not including it
        // case "add_blogpost":
        //     return [...state, {id : Math.floor(Math.random() * 99999) , title : action.payload.title, content: action.payload.content }];
        default:
            return state;
    }
};

const getBlogPost = (dispatch) => {
    return async () => {
        const response = await jsonServer.get("/blogposts");
        //response.data will contain our array of blogposts
        dispatch({type: "get_blogpost", payload: response.data});
    } 
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post("/blogposts", {title: title, content: content})
        .then(res => {
                console.log(res);
                console.log(res.data)
            }
        ).catch(error => console.log(error))
        ;
        // dispatch({ type: "add_blogpost" , payload: {title: title, content: content}});
        if (callback){
            callback();
        }
    }
};

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        // dispatch({type: "delete_blogpost", payload: id})
    }
}

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, {title: title, content: content});
        //the payload is the new blogpost
        dispatch({type: "edit_blogpost", payload: {id: id, title: title, content: content}});
        if (callback){
            callback();
        }
        
    }
}

//type of action in dispatch is used in switch case, it is a property of the reducer action
//payload is any extra data we need to send

//Blog Provider will provide the children with the values to be passed, it wraps the stack navigator and hence all screens can get the value 


//we pass these values to the createDataContext function which is a generic function to create the context and give it to us
export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost, deleteBlogPost, editBlogPost, getBlogPost}, []);