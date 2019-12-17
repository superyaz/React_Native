/* eslint-disable prettier/prettier */
const React = require('react-native');
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  textoLogin: {
    fontSize: deviceWidth * 0.1,
    color: 'red',
    textAlign: 'center',
    marginVertical: 15,
  },
};
