/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Login from './src/screens/Login/Login';

class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return <Login />;
  }
}

export default App;
