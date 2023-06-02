import React, {useState}  from "react";
import { Text, StyleSheet, TextInput, View} from "react-native";

const TextScreen = () => {
    const [name, setName] = useState('');

    return (
        //to stop autoorrect and autocapitalisation 

        //to handle text inputs, we make a state variable in parent and send the function as a callback function to the textInput
        //the textInput then calls the function to change the variable when user enters something.
        //the value attribute is tied to what is shown in the text input, hence it should be set equal to the state variable
        <View>
            <Text>Enter Name:</Text>
            <TextInput 
                style = {style.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>Input is {name}</Text>

            {name.length < 5 ? <Text>Name less than 5 characters</Text> : null}

        </View>

        //to conditionally render an element, we do the syntax above
        
    );
};

//we always need to give styling to text input , by default it has no styling
const style = StyleSheet.create({
    input: {
        margin : 15, 
        borderColor: "black", 
        borderWidth: 1
    }
});

export default TextScreen;