/* eslint-disable no-labels */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './Styles';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View>
        <Text style={styles.textoHome}>Bienvenido {this.props.name}</Text>
        <TextInput style={styles.textInput}
          onChangeText={(text) => this.setState({ text })}
          placeholder="Type here to trasnlate!"
          value={this.state.text} />
        <Text style={styles.textTwo}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}


export default Home;
