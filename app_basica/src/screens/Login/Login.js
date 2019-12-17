/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Home from '../Home/Home';
import Perfil from '../Perfil/Perfil';

class Login extends Component {
  render() {
    return (
      <View>
        <Home name="Yazin" />
        <Perfil text="lorem insum no se que mas poner porque no me acuerdo de nada más :D, necesito que haga scrol para poder mirar como funciona el scroll dentro de la aplicacion" />
      </View>
    );
  }
}

export default Login;
