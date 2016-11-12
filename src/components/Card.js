"use strict";

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#7FDBFF",
    backgroundColor: "#0074D9",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  hiddenContainer: {
    borderWidth: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 30
  }
});

export default class Card extends Component {
  render() {
    if (!this.props.value) {
      return (
        <View style={ styles.hiddenContainer } />
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.value}</Text>
      </View>
    );
  }
}

Card.propTypes = {
  value: React.PropTypes.string.isRequired
};
