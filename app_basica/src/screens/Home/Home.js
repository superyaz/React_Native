/* eslint-disable no-alert */
/* eslint-disable no-labels */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './Styles';
// import { Button } from 'native-base';


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
        <Button onPress={() => {
          alert('You tapped the button!');
        }}
          title="Presioname"
        />
      </View>
    );
  }
}


export default Home;
