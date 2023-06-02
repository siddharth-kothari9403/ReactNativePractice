// import "../_mockLocation";
import React, {useContext, useCallback} from "react";
import {StyleSheet} from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map"; 
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import {AntDesign} from '@expo/vector-icons';


const TrackCreateScreen = ({ isFocused }) => {
    const {state, addLocation} = useContext(LocationContext);

    const callback = useCallback((location) => {
        addLocation(location, state.recording);
    }, [state.recording]);

    //similar to useEffect, the callback is recreated when state.recording changes, not again and again

    const [err] = useLocation(isFocused || state.recording, callback);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h2>TrackCreate Screen</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track', 
    tabBarIcon: <AntDesign name="pluscircleo" size={20}/>
}

const styles = StyleSheet.create({

});

export default withNavigationFocus(TrackCreateScreen);