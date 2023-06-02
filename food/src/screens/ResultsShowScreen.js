import React, {useEffect, useState} from "react";
import { Text, StyleSheet, View, FlatList, Image} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({navigation}) => {
    //get the param id, it it not a part of the props
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    //the site to go to
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    //to get the value only once
    useEffect(()=> {
        getResult(id);
    }, []);

    if (!result){
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => {photo}}
                renderItem={({item}) => {
                    return <Image style={styles.ImageStyle} source={{uri: item}}/>
                }}
            />
        </View>
        
        //result has a name property and an array of photos
        
    );
};

const styles = StyleSheet.create({
    ImageStyle:{
        height: 200, 
        width: 200,
        borderRadius: 5
    }
});

export default ResultsShowScreen;