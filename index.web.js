import { AppRegistry } from 'react-native';

import App from './src/App.web';

// register the app
AppRegistry.registerComponent('App', () => App);

const div = document.createElement('div');

document.body.appendChild(div);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: div,
});
