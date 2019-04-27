/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

//import {AppRegistry} from 'react-native';
import App from './src/App';
//import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);
import { Navigation } from "react-native-navigation";





Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: "navigation.playground.WelcomeScreen"
            }
        }
    });
});