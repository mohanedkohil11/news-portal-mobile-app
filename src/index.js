import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Text>News Portal</Text>
    </Provider>
  );
}
