import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';


export default class Repositories extends Component {
  static navigationOptions = {
    header: false,
  };

  render() {
    return (
      <View style={styles.app}>
        <View style={styles.containerHeader}>
          <TextInput
            style={styles.input}
            placeholder="Adicionar repositório"
          />
          <TouchableOpacity>
            <Icon name="plus" size={18} />
          </TouchableOpacity>
        </View>

        <View style={styles.containerMain}>
          <View style={styles.boxRepositories}>
            <View style={styles.boxRepositoriesInside}>
              <Image
                style={styles.avatar}
                source={{ uri: 'https://avatars3.githubusercontent.com/u/32581245?s=460&v=4' }}
              />
              <View style={styles.left}>
                <Text style={styles.textTitle}>Title</Text>
                <Text style={styles.textDescription}>Description</Text>
              </View>
              <Icon name="chevron-right" size={20} style={styles.iconRight} />
            </View>
          </View>
        </View>

      </View>
    );
  }
}
