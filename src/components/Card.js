"use strict";

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
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
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    if (!this.props.value) {
        // <TouchableOpacity style={{ flex: 1 }}>
        // </TouchableOpacity>
      return (
          <View style={ styles.hiddenContainer } />
      );
    }

    // const onPressCallback = this.props.onPress || null;

      // <TouchableOpacity style={{ flex: 1 }} onPress={ onPressCallback }>
      // </TouchableOpacity>
    return (
        <View
          style={ [styles.container, this.props.style] }
          ref={ component => this._root = component }
        >
          <Text style={ styles.text }>{ this.props.value }</Text>
        </View>
    );
  }
}

Card.propTypes = {
  value:   React.PropTypes.string,
  onPress: React.PropTypes.func,
  style: React.PropTypes.object,
};
