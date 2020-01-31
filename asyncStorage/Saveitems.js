import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";

export default class SavedItem extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    text: "",
    onPress: () => {}
  };

  render() {
    const { text } = this.props;

    return (
      <View style={styles.timeZoneItem}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timeZoneItem: {
    flex: 1,
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  textStyle: {
    flex: 3
  },
});
