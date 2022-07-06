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
   Text,
 } from 'react-native';

 const corFundo = '#61bd8d';

 class SobreOJogo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.tela}>
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 0.4}}>
                    <Text style={styles.textoTitulo}>
                        Sobre:
                    </Text>
                    <Text style={styles.texto}>
                        Jogo de Cara ou Coroa, escrito em react-native 0.63.0
                    </Text>
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
    textoTitulo: {
        color: 'white',
        textShadowColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    texto: {
        color: 'white',
        textShadowColor: 'grey',
        margin: 15,
        textAlign: 'justify',
        fontSize: 20,
        fontWeight: 'bold',
    },
 });
 
 export default SobreOJogo;
 