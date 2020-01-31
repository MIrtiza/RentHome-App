import React, { Component } from 'react';
import {View,Text, FlatList, StyleSheet,TouchableOpacity,} from 'react-native';

import TimeZoneItem from './timeZoneitem';
import { SaveItem, ReadItem } from './DbHelper';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    items: ['Britain', 'Russia', 'Germany', 'South Africa', 'Zambia'],
    saved: [],
  };

  onSave = item => {
    const { saved } = this.state;
    const newItems = [...saved, item];

    this.setState({
      saved: newItems,
    });

    const items = JSON.stringify(newItems);

    SaveItem('saved', items)
      .then(res => {
        console.warn('saved', res);
      })
      .catch(e => console.warn(e));
  };

  goToDetails = () => {
    
    this.setState({
      saved: [],
    });

    this.props.navigation.navigate('Bookmarked');
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={this.state.items}
          renderItem={({ item }) => (
            <TimeZoneItem
              text={item}
              onPress={() => {
                this.onSave(item);
              }}
            />
          )}
        />

        <TouchableOpacity
          onPress={this.goToDetails}
          style={styles.button}>
          <Text style={styles.save}>View Saved</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
    marginTop: 50,
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  save: {
    color: 'white',
  },
});
