import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

export default class TimeZoneItem extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  static defaultProps = {
    text: '',
    onPress: () => {},
  };

  render() {
    const { text, onPress } = this.props;

    return (
      <View style={styles.timeZoneItem}>
        <Text style={styles.textStyle}>{text}</Text>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.save}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
  },
  timeZoneItem: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  textStyle: {
    flex: 3,
  },
  save: {
    color: 'white',
  },
});