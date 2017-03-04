/**
 * Created by ggoma on 2017. 3. 4..
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { Button, List, ListItem } from 'react-native-elements'


const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
]


class Landing extends Component {
    static navigationOptions = {
        header: {
            title: 'landing'
        }
    };

    navigate() {
        console.log('im called');
        this.props.navigation.navigate('RegisterMatch');
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, borderWidth: 1}}>
                    <List containerStyle={{marginBottom: 20}}>
                        {
                            list.map((l, i) => (
                                <ListItem
                                    roundAvatar
                                    avatar={{uri:l.avatar_url}}
                                    key={i}
                                    title={l.name}
                                    subtitle={l.subtitle}
                                />
                            ))
                        }
                    </List>
                </View>
                <View style={{padding: 8}}>
                    <Button
                        small
                        onPress={() => this.navigate()}
                        backgroundColor={'#008dcd'}
                        icon={{name: 'add', type: 'Ionicons'}}
                        title='Upload Match Result' />
                </View>
            </View>
        )
    }
}

export default Landing;