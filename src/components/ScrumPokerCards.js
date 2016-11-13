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
      selectedCard: null,
      rows:      _.chunk(CARD_VALUES, CARDS_PER_ROW),
      opacities: CARD_VALUES.map(() => 1),
    };
  }

  render() {
    console.log("RENDER");
    if (this.state.selectedCard) {
      return (
        <View style={ styles.singleCardContainer }>
          <TouchableHighlight
            style={{ flex: 1 }}
            onPress={ this.onCardPressed.bind(this, null) }
          >
            <Card value={ this.state.selectedCard } />
          </TouchableHighlight>
        </View>
      );
    }

    const rows = this.state.rows.map((row, i) => {
      const cards = row.map((cardValue, j) => {

        const idx = i * CARDS_PER_ROW + j;
        const opacity = this.state.opacities[idx];
        console.log("RENDER", idx, opacity);

        return (
          <TouchableHighlight
            key={ j }
            style={{ flex: 1 }}
            onPress={ this.onCardPressed.bind(this, cardValue) }
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

  onCardPressed(card) {
    console.log("HIDE", card);

    const newState = _.cloneDeep(this.state);
    newState.selectedCard = card;

    this.setState(newState);
  }
}

const styles = StyleSheet.create({
  singleCardContainer: {
    flex: 1,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 20,
    marginRight: 20,
  },
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

