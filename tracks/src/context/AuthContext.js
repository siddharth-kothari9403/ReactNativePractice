import createDataContext from "./createDataContext";
import trackerApi from "../api/Tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";
import { NavigationEvents } from "react-navigation";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            //everything same, error message gets updated
            return {...state, errorMessage: action.payload};
        case 'signup':
            return {errorMessage: '', token: action.payload};
        case 'clear_error_message' :
            return {...state, errorMessage: ''};
        case 'signout' :
            return {token: null, errorMessage: ''};
        default :
            return state;
    }
}

//function to get token from async storage and signin if required
const tryLocalSignin = (dispatch) => {
    console.log("Here")
    return async() => {
        const token = await AsyncStorage.getItem('token')
        
        if (token){
            dispatch({type : 'signin', payload: token});
            navigate('TrackList');
        }else{
            navigate('Signup');
        }
    }
};

const signup = (dispatch) => {
    return async ({email, password}) => {
        //make api request
        //if signed up, modify state 
        //else error
        try {
            const response = await trackerApi.post('/signup', {email, password});
            // console.log(response.data);

            //to store the jwt inside our device
            await AsyncStorage.setItem('token', response.data.token);
            // await AsyncStorage.getItem('token');
            dispatch({type : 'signin', payload: response.data.token});
            navigate('TrackList');
        }catch (err){
            dispatch({type: 'add_error', payload: 'Something went wrong with sign up'})
        }
    };
};

const signin = (dispatch) => {
    return async ({email, password}) => {
        //make api request
        //if signed in, modify state 
        //else error
        try {
            const response = await trackerApi.post('/signin', {email, password});
            // console.log(response.data);

            //to store the jwt inside our device
            await AsyncStorage.setItem('token', response.data.token);
            // await AsyncStorage.getItem('token');
            dispatch({type : 'signup', payload: response.data.token});
            navigate('TrackList');
        }catch (err){
            dispatch({type: 'add_error', payload: 'Something went wrong with sign in'})
        }
    };
};

const clearErrorMessage = (dispatch) => {
    dispatch({type: "clear_error_message"});
};

const signout = (dispatch) => {
    return async () => {
        //if signed out, modify state 
        //else error
        //remove the token from async storage
        await AsyncStorage.removeItem('token');
        dispatch({type: 'signout'});
        navigate('Signin');
    };
};

export const {Provider, Context} = createDataContext(
    authReducer, 
    {signin, signup, signout, clearErrorMessage, tryLocalSignin}, 
    {token: null, errorMessage: ''}
);