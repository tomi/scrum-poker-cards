"use strict";

import React, { Component } from "react";
import {
  StyleSheet,
  View
} from "react-native";

import _ from "lodash";
import Card from "./Card";

const CARD_VALUES = [
  "0", "½", "1", "2", "3", "5",
  "8", "13", "20", "40", "100",
  "?", "∞", "☕", null
];

export default class ScrumPokerCards extends Component {
  constructor() {
    super();

    this.state = {
      rows: _.chunk(CARD_VALUES, 3)
    };
  }

  render() {
    const rows = this.state.rows.map((row, idx) => (
      <View key={ idx } style={ styles.row }>
        { row.map(card => (<Card key={ card } value={ card } />)) }
      </View>
    ));

    return (
      <View style={ styles.container }>
        { rows }
      </View>
    );
  }

  renderRow() {
    const rows = (
      <View style={ styles.row }>
        { this.state.rows.map(card => (<Card value={ card } />)) }
      </View>
    );

    return (
      <View style={ styles.container }>
        { rows }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  row: {
    flex: 1,
    // alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    // justifyContent: "flex-start",
  }
});

