import React, {useContext} from "react";
import {View, StyleSheet} from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";

const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillBlur={() => {clearErrorMessage()}}
            />
            <AuthForm
                headerText="Sign in to your account"
                errorMessage={state.errorMessage}
                onSubmit={({email, password}) => {signin({email, password})}}
                submitButtonText="Sign in"
            />

            <NavLink
                routeName = "Signup" 
                text="Don't have an account? Sign up instead!"
            />
        </View>
    );
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;