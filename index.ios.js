/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from "react-native";

import Card from "./card";

export default class ScrumPokerCards extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card value="0" />
        <Card value="1" />
        <Card value="2" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});

AppRegistry.registerComponent("ScrumPokerCards", () => ScrumPokerCards);
