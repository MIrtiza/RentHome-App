import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { ReadItem, DeleteItem } from './DbHelper';
import SavedItem from './Saveitems';
import TimeZoneItem from './timeZoneitem';

export default class BookmarkDetails extends Component {
  static navigationOptions = {
    title: 'Saved Items',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    saved: [],
  };

  removeItem = () => {
    DeleteItem('saved')
      .then(res => {
        this.setState({
          saved: [],
        })
        console.log(res);
      })
      .catch(e => console.log(e));
  };

  // removeItem = (item) => {
  //   DeleteItem(item)
  //     .then(res => {
  //       var array = [...this.state]; // make a separate copy of the array
  //       var index = array.indexOf(item.target.value)
  //       if (index !== -1) {
  //         array.splice(index, 1);
  //         this.setState({saved: array});
  //       }
  //       console.log(res);
  //     })
  //     .catch(e => console.log(e));
  // };



  
  removePeople(e) {
    var array = [...this.state.people]; // make a separate copy of the array
    var index = array.indexOf(e.target.value)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({people: array});
    }
  }
  componentDidMount = () => {
    ReadItem('saved')
      .then(res => {
        if (res) {
          const saved = JSON.parse(res);
          this.setState({
            saved: saved,
          });
        }
      })
      .catch(e => console.warn(e));
  };



  onDelete = item => {
    const { saved } = this.state;
    const newItems = [...this.state.saved];
    var index = newItems.indexOf(item.target.value)

    if(index !== -1){
      newItems.splice(index,1);
      this.setState({saved: newItems})
    }
   

    const items = JSON.stringify(newItems);

    SaveItem('saved', items)
      .then(res => {
        console.warn('saved', res);
      })
      .catch(e => console.warn(e));
  };

  render() {
    return (
      <View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={this.state.saved}
          renderItem={({ item }) => (
            // <SavedItem
            //   text={item}
            //   onPress={() => {
            //     this.onSave(item);
            //   }}
            // />

            <TimeZoneItem
            text={item}
            onPress={() => {
              this.removeItem(item);
            }}
          />
          // <TouchableOpacity onPress={this.removeItem}>
          //        <Text style={styles.save}>un book</Text>
          // </TouchableOpacity>
            
          )}
        />

        {this.state.saved.length > 0 && (
          <TouchableOpacity onPress={this.removeItem} style={styles.button}>
            <Text style={styles.save}>Remove Key</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
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
    color: '#123456',
  },
});
