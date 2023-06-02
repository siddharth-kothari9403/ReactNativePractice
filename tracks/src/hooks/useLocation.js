import { useEffect, useState } from "react";
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from "expo-location";

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);

    useEffect(() => {
        //function to check if we have location permissions or not
        let subscriber;
        const startWatching = async () => {
            try {
                const { granted } = await requestForegroundPermissionsAsync();
                if (!granted) {
                throw new Error('Location permission not granted');
                }
                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, 
                    callback
                );

            } catch (e) {
                setErr(e);
            }
        };

        if (shouldTrack){
            startWatching();
        }else{
            //if no location permissions, remove it, this comes with the watchPositionAsync return value
            if (subscriber){
                subscriber.remove();
            }
            
            subscriber = null;
        }
        
        //cleanup function
        return () => {
            if (subscriber){
               subscriber.remove(); 
            }
        }

    }, [shouldTrack, callback]);

    return [err];
}