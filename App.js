/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Principal from './src/components/principal';
import SobreOJogo from './src/components/sobre-o-jogo';
import OutrosJogos from './src/components/outros-jogos';
import ResultadoJogo from './src/components/resultado-jogo';

const StackNavigator = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen name='Cara ou Coroa' component={Principal} />
        <StackNavigator.Screen name='Sobre' component={SobreOJogo} />
        <StackNavigator.Screen name='OutrosJogos' component={OutrosJogos} />
        <StackNavigator.Screen name='Resultado' component={ResultadoJogo} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
