import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screen/Auth/Auth';
import SharePlaceScreen from "./src/screen/SharePlace/SharePlaces";
import FindPlaceScreen from "./src/screen/FindPlace/FindPlace";
import SideDrawerScreen from "./src/screen/SideDrawer/SideDrawer";
import PlaceDetailsScreen from "./src/screen/PlaceDetail/PlaceDetail";
import configureStore from "./src/store/configureStore";

const store = configureStore();

// Register Screens
Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen, store, Provider);
Navigation.registerComponent('awesome-places.SharePlaceScreen', () => SharePlaceScreen, store, Provider);
Navigation.registerComponent('awesome-places.FindPlaceScreen', () => FindPlaceScreen, store, Provider);
Navigation.registerComponent('awesome-places.SideDrawerScreen', () => SideDrawerScreen);
Navigation.registerComponent('awesome-places.PlaceDetailScreen', () => PlaceDetailsScreen, store, Provider);

// Start App
Navigation.startSingleScreenApp({
    screen: {
      screen: "awesome-places.AuthScreen",
      title: "Login"
    }
});