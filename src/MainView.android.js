"use strict";

import Orientation from "react-native-orientation";
import ScrumPokerCards from "./components/ScrumPokerCards";
import React, { Component } from "react";
import {
  StyleSheet,
  View
} from "react-native";

Orientation.lockToPortrait();

export default class MainLayout extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <ScrumPokerCards />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: "#00a651",
 },
});
