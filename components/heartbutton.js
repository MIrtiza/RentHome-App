import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Platform, Image, FlatList, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { PropTypes } from 'prop-types'


class HeartButton extends React.Component{
    constructor(props){
        super(props);
        this.state = { addedToFavorite: false}
        this.addToFavorite = this.addToFavorite.bind(this);
    }

    addToFavorite(){
        this.setState({
            addedToFavorite: !this.state.addedToFavorite
        });
    }
    render(){
        const { addedToFavorite } = this.state;
        return(
                <TouchableHighlight
                    onPress={this.addToFavorite}
                >
                    <View>
                        <Icon 
                            name={addedToFavorite ? 'heart': 'heart-o'}
                            size={25}
                            color={'#ffffff'}
                        />
                    </View>
                </TouchableHighlight>
        )
    }
}

export default HeartButton