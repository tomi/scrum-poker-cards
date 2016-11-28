"use strict";

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated
} from "react-native";

// const CARD_ASPECT_RATIO = 400 / 558;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#111111",
    backgroundColor: "#FFFFFF",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#111111",
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
  },
  card: {
    alignSelf: "center"
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

class Card extends Component {
  constructor() {
    super();

    this.setNativeProps = this.setNativeProps.bind(this);
  }

  setNativeProps(nativeProps) {
    if (this._root) {
      this._root.setNativeProps(nativeProps);
    }
  }

  render() {
    if (!this.props.value) {
      return (
          <View style={ [styles.hiddenContainer, this.props.style] }/>
      );
    }

    return (
      <TouchableHighlight
          ref={ component => this._root = component }
          style={ [styles.container, this.props.style] }
          onPress={ () => this.props.onPress(this.props.value) }>
        <View style={ styles.card }>
          <Text style={ styles.text }>{ this.props.value }</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

Card.propTypes = {
  value:     React.PropTypes.string,
  onPress:   React.PropTypes.func,
  style:     React.PropTypes.object,
  textStyle: React.PropTypes.object,
};

const AnimatedCard = Animated.createAnimatedComponent(Card);

export default AnimatedCard;
