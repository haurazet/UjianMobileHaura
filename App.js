/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'
import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import Reducers from './src/redux/reducers';
import thunk from 'redux-thunk';
import Appinit from './Appinit'


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  console.disableYellowBox=true
  const store=createStore(Reducers, {}, applyMiddleware(thunk))
  return (
    <>
      <Provider store={store}>

        {/* <Text>running</Text> */}
        <Appinit/>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
 

});

export default App;
