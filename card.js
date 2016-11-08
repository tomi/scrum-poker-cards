import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    // border: "4px solid black",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    margin: 20
  },
  text: {
    fontSize: 50
  }
});

export default class Card extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.props.value}</Text>
      </View>
    );
  }
}

Card.propTypes = {
  value: React.PropTypes.string.isRequired
};
