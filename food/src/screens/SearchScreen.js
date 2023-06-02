import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    //logic for yelp api call is in separate file, call it here, and then use them here
    const [searchApi, results, error] = useResults();

    const FilterResultsByPrice = (price) => {
        //price = $ or $$ or $$$

        //takes result from the results array, and returns true if the condition is satisfied
        //if true returned, then filter adds it to the array to be returned
        return results.filter( result => {
            //the result from api has a price property, use it
            return result.price === price;
        });
    }

     //pass the state variable and the callback function to the searchBar
    //onTermSubmit callback function is used to communicate the end of the search bar input to the parent
    return <View style={{ flex: 1 }}>
        <SearchBar term={term} onTermChange={(newTerm)=>{setTerm(newTerm)}} onTermSubmit={()=>{searchApi(term)}}/>
        {error ? <Text>{error}</Text> : null}
        
        <ScrollView>
            
            <ResultsList results={FilterResultsByPrice('$')} title="Cost Effective" />
            <ResultsList results={FilterResultsByPrice('$$')} title="Bit Pricier" />
            <ResultsList results={FilterResultsByPrice('$$$')} title="Big spending" />
        </ScrollView>

    </View>;

};

const style = StyleSheet.create({});

export default SearchScreen;