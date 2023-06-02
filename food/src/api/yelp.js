//axios library is used to work with network request
//install in project using npm install axios.
import axios from "axios";

export default axios.create({
    //the url to send the request to
    baseURL: 'https://api.yelp.com/v3/businesses',
    //the api key with bearer to tell the api that we are authorised 
    headers: {
        Authorization: 'Bearer Oe3DYfj2InKou6QZenHChO_rEfOdws-JI5MUB52VXFUGlmHiLHSlmfRxpU0jwSn4-t0mjjNA9uvO5a3AZ9RMyhec6k3_W-iNC_O9bcN_Qd-TZyeJDs6lP0GBDcn4Y3Yx'
    }
});