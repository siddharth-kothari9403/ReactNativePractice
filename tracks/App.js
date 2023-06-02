import React from "react";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import {Provider as AuthProvider} from "./src/context/AuthContext";
import {Provider as LocationProvider} from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import { setNavigator } from "./src/navigationRef";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import {FontAwesome5} from "@expo/vector-icons";

const trackListFlow = createStackNavigator({
  TrackList : TrackListScreen,
  TrackDetail : TrackDetailScreen
});

trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon : <FontAwesome5 name="road" size={20}/>
};


const SwitchNavigator = createSwitchNavigator({
  resolve: ResolveAuthScreen,
  loginFlow : createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow : createMaterialBottomTabNavigator({
    trackListFlow : trackListFlow,
    TrackCreate : TrackCreateScreen,
    Account : AccountScreen
  })
});

const App = createAppContainer(SwitchNavigator);

//our app is the child of provider, hence it is wrapped by it
export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref = {(navigator) => setNavigator(navigator)}/>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
    
    
  );
}
