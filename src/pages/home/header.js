import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

export default class HomeHeader extends Component {
  render() {
    return (
      <Text style={styles.text}>This is PageOne!</Text>
    )
  }
}

const styles = {
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    flex: 1,
  }
};


