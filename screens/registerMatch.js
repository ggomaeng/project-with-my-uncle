/**
 * Created by ggoma on 2017. 3. 4..
 */
import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

import {Button} from 'react-native-elements';

import * as firebase from 'firebase';

export default class RegisterMatch extends Component {
    constructor() {
        super();

        this.state = {
            text: 'Loading...'
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.readFirebase();
    }

    componentWillUnmount() {

    }

    addToFirebase() {
        firebase.database().ref('sample').set({
            name: 'joonggooo',
            age: 50
        });
    }

    readFirebase() {
        firebase.database().ref('sample').once('value', snapshot => {
            console.log(snapshot.val())

            //this.state.text = snapshot.val(); NONONONONONO
            this.setState({
                text: snapshot.val().name
            })
        })
    }

    render() {
        const {text} = this.state;


        return (
            <View>
                <Button
                    small
                    onPress={() => this.addToFirebase()}
                    icon={{name: 'add', type: 'Ionicons'}}
                    title='Add to Firebase' />

                <Text>{text}</Text>
            </View>
        )
    }
}