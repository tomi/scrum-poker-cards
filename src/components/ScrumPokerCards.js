"use strict";

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Animated
} from "react-native";

import _ from "lodash";
import AnimatedCard from "./Card";

const CARD_VALUES = [
  "0", "½", "1",
  "2", "3", "5",
  "8", "13", "20",
  "40", "100", "?",
  "∞", "☕", null
];

export default class ScrumPokerCards extends Component {
  constructor() {
    super();

    this.onLayout         = this.onLayout.bind(this);
    this.onCardPressed    = this.onCardPressed.bind(this);

    this.state = {
      selectedCard: null,
      cards: []
    };
  }

  render() {
    if (_.isEmpty(this.state.cards)) {
      return (
        <View onLayout={ this.onLayout } style={{ flex: 1 }} />
      );
    }

    const cards = this.state.cards.map((card, i) => {
      return (
          <AnimatedCard style={{
            left:     card.x,
            top:      card.y,
            width:    card.width,
            height:   card.height,
            opacity:  card.opacity,
            zIndex:   card.zIndex,
            position: "absolute"
          }} key={ i } value={ card.value } onPress={ this.onCardPressed } />
      );
    });

    return (
      <View style={ styles.container }>
        { cards }
      </View>
    );
  }

  onCardPressed(cardValue) {
    const pressedCard = _.find(this.state.cards, c => c.value === cardValue);

    if (this.state.selectedCard === cardValue) {

      this.state.cards.forEach(card => {
        if (card === pressedCard) {
          const coords = this._getCardCoordinates(cardValue);

          Animated.parallel([
            Animated.timing(card.x,      { toValue: coords.x,      duration: 500 }),
            Animated.timing(card.y,      { toValue: coords.y,      duration: 500 }),
            Animated.timing(card.width,  { toValue: coords.width,  duration: 500 }),
            Animated.timing(card.height, { toValue: coords.height, duration: 500 }),
          ]).start();
        } else {
          Animated.timing(card.opacity, {
            toValue: 1,
            duration: 500
          }).start();
        }
      });

      this.state.cards.forEach(card => {
        Animated.timing(card.opacity, {
          toValue: 1,
          duration: 500
        }).start();
      });

      this.setState({ selectedCard: null });

    } else {

      this.state.cards.forEach(card => {
        if (card === pressedCard) {
          const coords = this._getSelectedCardCoordinates();

          Animated.parallel([
            Animated.timing(card.x,      { toValue: coords.x, duration: 500 }),
            Animated.timing(card.y,      { toValue: coords.y, duration: 500 }),
            Animated.timing(card.width,  { toValue: coords.width, duration: 500 }),
            Animated.timing(card.height, { toValue: coords.height, duration: 500 }),
            Animated.timing(card.zIndex, { toValue: 1, duration: 0 }),
            // Animated.timing(card.fontSize, { toValue: 60, duration: 500 }),
          ]).start();
        } else {
          Animated.parallel([
            Animated.timing(card.opacity, { toValue: 0, duration: 500 }),
            Animated.timing(card.zIndex, { toValue: 0, duration: 0 }),
          ]).start();
        }
      });

      this.setState({ selectedCard: cardValue });
    }
  }

  onLayout(e) {
    const layout = e.nativeEvent.layout;
    this.width = layout.width;
    this.height = layout.height;

    const cardCoords = CARD_VALUES.map(cardValue => {
      const coords = this._getCardCoordinates(cardValue);

      return Object.assign({
        value: cardValue,
        opacity: new Animated.Value(1),
        zIndex: new Animated.Value(0),
        // fontSize: new Animated.Value(30),
      }, _.mapValues(coords, x => new Animated.Value(x)));
    });

    this.setState({
      cards: cardCoords
    });
  }

  _getCardCoordinates(cardValue) {
    const incX = this.width / 3;
    const incY = this.height / 5;
    const idx = CARD_VALUES.indexOf(cardValue);

    return {
      x:      (idx % 3) * incX,
      y:      Math.floor(idx / 3) * incY,
      width:  incX - 20,
      height: incY - 20,
    };
  }

  _getSelectedCardCoordinates() {
    return {
      x: 20,
      y: 20,
      width: this.width - 40,
      height: this.height - 40
    };
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

