import React from "react";
import { withNavigation } from "react-navigation";
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({title, results, navigation}) => {

    if (!results.length){
        return null;
    }

    return (
        <View>
            <Text style={styles.TitleStyle}>{title}</Text>
            <FlatList
                data={results}
                horizontal
                showsHorizontalScrollIndicator={false}
                //the key can be the id of the record from the api
                keyExtractor={(result) => {result.id}}

                //item is from results array, has a name property
                renderItem={({ item }) => {

                    return (
                        <TouchableOpacity 
                            onPress={() => {navigation.navigate('ResultsShow', {id: item.id})}
                            //to pass info to the ResultsShowScreen, add another argument to navigate
                        }>
                            <ResultsDetail item={item}/>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    TitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal:10,
        marginTop:10
    }
});

//withNavigation is used to add navigation functionality to a component which is not a screen
export default withNavigation(ResultsList);