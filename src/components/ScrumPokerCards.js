"use strict";

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight
} from "react-native";

import _ from "lodash";
import Card from "./Card";

const CARD_VALUES = [
  "0", "½", "1",
  "2", "3", "5",
  "8", "13", "20",
  "40", "100", "?",
  "∞", "☕", null
];

const CARDS_PER_ROW = 3;

export default class ScrumPokerCards extends Component {
  constructor() {
    super();

    this.state = {
      rows:      _.chunk(CARD_VALUES, CARDS_PER_ROW),
      opacities: CARD_VALUES.map(() => 1),
    };
  }

  render() {
    console.log("RENDER");
    const rows = this.state.rows.map((row, i) => {
      const cards = row.map((cardValue, j) => {

        const idx = i * CARDS_PER_ROW + j;
        const opacity = this.state.opacities[idx];
        console.log("RENDER", idx, opacity);

        return (
          <TouchableHighlight
            key={ j }
            style={{ flex: 1 }}
            onPress={ this.onCardPressed.bind(this, idx) }
          >
            <Card style={{ opacity }} key={ cardValue } value={ cardValue } />
          </TouchableHighlight>
        );
      });

      return (
        <View key={ i } style={ styles.row }>
          { cards }
        </View>
      )
    });

    return (
      <View style={ styles.container }>
        { rows }
      </View>
    );
  }

  onCardPressed(idx) {
    console.log("HIDE", idx);

    const newState = _.cloneDeep(this.state);
    newState.opacities[idx] = 0;

    this.setState(newState);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  }
});

