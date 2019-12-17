/* eslint-disable prettier/prettier */
const React = require('react-native');
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  textoHome: {
    fontSize: deviceWidth * 0.1,
    color: 'red',
    textAlign: 'center',
    marginVertical: 15,
    backgroundColor: 'black',
  },
  textInput: {
    height: 40,
  },
  textTwo: {
    padding: 10,
    fontSize: 42,
  },
};
