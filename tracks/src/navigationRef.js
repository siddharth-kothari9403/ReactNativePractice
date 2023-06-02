//this is used to make the naavigator accessible to all the components in the app, not only the screens but even the context
import { NavigationActions } from "react-navigation";

let navigator;

export const setNavigator = (nav) => {
    navigator = nav;
}

export const navigate = (routeName, params) => {
    //kind of like a reducer. We pass the routename and params whenever we want to navigate using the navigate function
    //then the state of the app is updated to show the current screen
    //this reducer effect is achieved by the NavugationActions
    navigator.dispatch(
        NavigationActions.navigate({
            routeName : routeName,
            params : params
        })
    );
}