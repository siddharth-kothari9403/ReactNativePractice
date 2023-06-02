//copy of squareScreen.js using reducers
//reducers are used when we have state variables which are closely related to each other, and which make sense to be with each other
//and we have a precise way to update the variables

//reducers take 2 arguments
//Argument 1 = object containing all the state
//Argument 2 = object describing the update

//reducer always returns the value tp be used as new argument 1, we never modify argument 1 directly
import React, {useReducer} from "react";
import { Text, StyleSheet, View} from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

//reducer function

const reducer = (state, action) => {
    //action is the object containing the action to do 
    switch(action.colorToChange) {
        case 'red' : 
            //return the state variable new instantiation
            //again the syntax says to copy state, and change a property in it 
            return state.red + action.amount > 255 || state.red + action.amount < 0
                ? state
                : {...state, red: state.red + action.amount};
        case 'green' :
            return state.green + action.amount > 255 || state.green + action.amount < 0
                ? state
                : {...state, green: state.green + action.amount};
        
        case 'blue' :
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
                ? state
                : {...state, blue: state.blue + action.amount};

        default: 
            return state;
    }
}

const ReducerScreen = function() {

    //syntax of reducer, the first argument is the reducer function, the second is the state
    //state object
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state;

    //dispatch will be used to run the reducer, it will take the action as the argument
     // console.log(red);
    return( <View>
        <Text>Square Screen</Text>
        
        <ColorCounter color = "Red" 
            //passing the action object with the required attributes to the reducer function
            onIncrease = {() => dispatch({colorToChange : 'red', amount: COLOR_INCREMENT})}
            onDecrease = {() => dispatch({colorToChange : 'red', amount: (-1)*COLOR_INCREMENT})}
        />
        <ColorCounter color = "Green" 
            onIncrease = {() => dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})}
            onDecrease = {() => dispatch({colorToChange: 'green', amount: (-1)*COLOR_INCREMENT})}/>
        <ColorCounter color = "Blue" 
            onIncrease = {() =>  dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})}
            onDecrease = {() =>  dispatch({colorToChange: 'blue', amount: (-1)*COLOR_INCREMENT})}
        />
        <View style = {{height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}/>
    </View>);
};

const style = StyleSheet.create({

});

export default ReducerScreen;