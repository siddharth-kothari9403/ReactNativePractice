import React from "react";
import {Text, TouchableOpacity, StyleSheet, View} from "react-native";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({navigation, text, routeName}) => {
    return <Spacer>
        <TouchableOpacity onPress = {() => {navigation.navigate(routeName)}}>
            <Spacer>
                <Text style = {styles.link}>
                    {text}
                </Text>
            </Spacer>
        </TouchableOpacity>
    </Spacer>
    
}

const styles = StyleSheet.create({
    link : {
        color : 'blue'
    }
});

//this does not have a navigation prop as it is not declared in App, hence we use this to allow it to navigate
export default withNavigation(NavLink);