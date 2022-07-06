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
   Linking,
 } from 'react-native';

 const corFundo = '#61bd8d';

 class OutrosJogos extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.tela}>
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 0.4}}>
                    <Text style={styles.textoTitulo}>
                        Outros Jogos:
                    </Text>
                    <Text style={styles.texto}> - Jokenpo:</Text>
                    <Text 
                        style={styles.link}
                        onPress={() => Linking.openURL('https://github.com/tconstantino/jokenpo_app')}>
                        https://github.com/tconstantino/jokenpo_app    
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
        textShadowRadius: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        fontSize: 18,
        color: 'blue',
        textDecorationLine: 'underline',
        fontWeight: 'normal',
    }
 });
 
 export default OutrosJogos;
 