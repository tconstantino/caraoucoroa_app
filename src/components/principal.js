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
   TouchableHighlight,
 } from 'react-native';
 import logoImg from '../images/logo.png';
 import botaoJogarImg from '../images/botao_jogar.png';
 import botaoSobreOJogoImg from '../images/sobre_jogo.png';
 import botaoOutrosJogosImg from '../images/outros_jogos.png';

 const corFundo = '#61bd8d';

 class Principal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.tela}>
                <View style={styles.painelLogo}>
                    <Image source={logoImg}></Image>
                    <TouchableHighlight 
                        underlayColor={corFundo}
                        activeOpacity={0.5}
                        onPress={() => {}}>
                        <Image style={{marginTop: 25}} source={botaoJogarImg}></Image>
                    </TouchableHighlight>
                </View>
                <View style={styles.painelBotoes}>
                    <TouchableHighlight
                        underlayColor={corFundo}
                        activeOpacity={0.5}
                        onPress={() => {}}>
                        <Image style={styles.botao} source={botaoSobreOJogoImg}></Image>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={corFundo}
                        activeOpacity={0.5}
                        onPress={() => {}}>
                        <Image style={styles.botao} source={botaoOutrosJogosImg}></Image>
                    </TouchableHighlight>
                </View>
            </View>
        );
    };
 }
 
 const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#61bd8d',
    },
    painelLogo: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    painelBotoes: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10,
    },
 });
 
 export default Principal;
 