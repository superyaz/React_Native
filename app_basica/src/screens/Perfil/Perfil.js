/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';

class Perfil extends Component {

  render() {
    return (
      <View>
        <Text style={styles.textoPerfil}>Este es un texto {this.props.text}</Text>
      </View>
    );
  }
}

export default Perfil;
