/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import {
   StyleSheet,
   View,
   Image,
 } from 'react-native';
 import moedaCaraImg from '../images/moeda_cara.png';
 import moedaCoroaImg from '../images/moeda_coroa.png';

 const corFundo = '#61bd8d';

 class ResultadoJogo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const resultados = [ moedaCaraImg, moedaCoroaImg ];
        const caraOuCoroa = Math.round(Math.random());
        const resultado = resultados[caraOuCoroa];

        return (
            <View style={styles.tela}>
                <View style={styles.painelResultado}>
                    <Image source={resultado}></Image>
                </View>
            </View>
        );
    };
 }
 
 const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: corFundo,
    },
    painelResultado: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
 });
 
 export default ResultadoJogo;
 