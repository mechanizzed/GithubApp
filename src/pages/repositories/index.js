import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';


export default class Repositories extends Component {
  static navigationOptions = {
    header: true,
  };

  render() {
    return (
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Adicionar"
        />
      </View>
    );
  }
}
