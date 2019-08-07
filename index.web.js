import App from './src/App';
import React from 'react';
import { AppRegistry } from 'react-native';

AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('react-app')
});
