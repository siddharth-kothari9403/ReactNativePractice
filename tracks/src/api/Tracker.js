import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance =  axios.create({
    baseURL : 'https://5191-2405-201-5c09-a85a-b8d7-1a62-2d9d-5d0d.ngrok-free.app'
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;