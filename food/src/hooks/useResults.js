import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    //the variable to take the results obtained
    //function to call the api
    
    const searchApi = async (searchTerm) => {
        try{
            //response wil store the json response from the api
            //yelp.get() puts the netwrok request, /search is appended to the baseURL, so pass this parameter accordingly

            //response.data contains the data portion of the json response, see which portion to access as required from the response format on the api documentation
            const response = await yelp.get('/search',{
                //params can also be seen from documentation of api, what parameter does what
                params:{
                    term : {searchTerm},
                    limit: 50,
                    location: 'san jose'
                }
            });
            // console.log(response);
            //from documentation, the businesses attribute of json file contains the array of responses
            setResults(response.data.businesses);
            setError('');
        }
        catch (err){
            setError("Something went wrong");
        }
        
    };

    //useEffect is used to run a code a certain amount of times, useEffect(()=> {}) is used to run it exactly once
    //used to implement a default search 

    useEffect(()=> {
        searchApi('pasta')
    }, []);

    return [searchApi, results, error];
};