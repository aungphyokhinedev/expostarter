import React from 'react';
import configureStore from './src/store/index';
const { persistor, store } = configureStore();
import Root from './src/native/index';

export default class App extends React.Component {
  render() {
    return (
      <Root store={store} persistor={persistor} />
    );
  }
}

