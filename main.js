import Exponent from 'exponent';

import {
    StackNavigator,
} from 'react-navigation';

import Landing from './screens/landing';
import RegisterMatch from './screens/registerMatch';
import * as firebase from 'firebase';

firebase.initializeApp({
    //
});

const App = StackNavigator({
    Landing: {screen: Landing},
    RegisterMatch: {screen: RegisterMatch}
});


Exponent.registerRootComponent(App);
