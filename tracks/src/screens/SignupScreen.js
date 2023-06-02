import React, {useContext} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import {Context as AuthContext} from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext);

    //NavigationEvents allows us to execute something whenever we navugate to a screen
    //onWillFocus = called any time we are about to navigate to this screen
    //onDidFocus = called any time we complete the navigation to this screen
    //onWillBlur = opposite, when we are about to leave
    //similarly onDidBlur

    return (
        <View style = {styles.container}>
            <NavigationEvents 
                onWillBlur={() => {clearErrorMessage()}}
            />
            
            <AuthForm
                headerText="Signup for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign up"
                onSubmit={( {email, password } ) => signup({email, password})}
            />

            <NavLink 
                routeName="Signin"
                text="Already have an account? Sign in instead!"
            />
            
        </View>
    );
    //secureTextEntry is for passwords
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200
    }
    
});

export default SignupScreen;