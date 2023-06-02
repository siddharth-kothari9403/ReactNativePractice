import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorsScreen from "./src/screens/ColorsScreen";
import SquareScreen from "./src/screens/SquareScreen";
import ReducerScreen from "./src/screens/ReducerScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
import LayoutScreen from "./src/screens/LayoutScreen";

const navigator = createStackNavigator(
  {
    //this contains the screens that the app can shiw, we should add the screens here
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen, 
    Image: ImageScreen,
    Counter: CounterScreen, 
    Colors: ColorsScreen, 
    Square: SquareScreen, 
    Reduce: ReducerScreen, 
    Text: TextScreen, 
    Box: BoxScreen, 
    Layout: LayoutScreen
  },
  {
    //initial route tells which page to open first, we can configure it
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
