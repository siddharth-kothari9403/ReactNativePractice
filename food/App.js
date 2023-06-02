import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

// npx create-expo-app food -> use this always, as it gives us access to a lot of libraries like icons etc.

//the stack navigator has 2 arguments, the list of screens and the options
//options contain the initial screen and the title of the app shown on top
const navigator = createStackNavigator({
  search: SearchScreen,
  ResultsShow: ResultsShowScreen
}, {
  initialRouteName: 'search',
  defaultNavigationOptions: {
    title: "Business Search"
  }
});

//last statement 
export default createAppContainer(navigator);