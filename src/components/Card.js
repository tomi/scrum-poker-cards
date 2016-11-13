"use strict";

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

const CARD_ASPECT_RATIO = 400 / 558;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#111111",
    backgroundColor: "#FFFFFF",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#111111",
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
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
  constructor() {
    super();

    this.onLayout = this.onLayout.bind(this);

    this.state = {
      style: {}
    };
  }

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
          style={ [styles.container, this.props.style, this.state.style] }
          ref={ component => this._root = component }
          onLayout={ this.onLayout }
        >
          <Text style={ styles.text }>{ this.props.value }</Text>
        </View>
    );
  }

  onLayout(e) {
    // Maintain aspect ratio of the card
    const layout = e.nativeEvent.layout;

    const measuredHeight = layout.width / CARD_ASPECT_RATIO;
    const currentHeight  = layout.height;

    if (measuredHeight > currentHeight) {
      const measuredWidth = layout.height * CARD_ASPECT_RATIO;

      this.setState({
        style: {
          width:  measuredWidth,
          height: layout.height
        }
      });
    } else {
      this.setState({
        style: {
          width:  layout.width,
          height: measuredHeight
        }
      });
    }

  }
}

Card.propTypes = {
  value:   React.PropTypes.string,
  onPress: React.PropTypes.func,
  style: React.PropTypes.object,
};
