/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Principal from './src/components/principal';
import SobreOJogo from './src/components/sobre-o-jogo';
import OutrosJogos from './src/components/outros-jogos';

const App: () => React$Node = () => {
  return (
      // <Principal></Principal>
      <SobreOJogo></SobreOJogo>
      // <OutrosJogos></OutrosJogos>
  );
};

const styles = StyleSheet.create({

});

export default App;
