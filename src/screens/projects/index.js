import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import styles from "./styles";

export default class Projects extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Projects Screen</Text>
        </View>
      </View>
    );
  }
}