import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Text, Image} from 'react-native';

import ProtocoloItem from '../components/protocoloItem';

import api from '../services/api';

export default function Protocolos({navigation}){

    const protocolos = [
        {id : "1", protocolo: "Requisição de Substitutiva"},
        {id : "2", protocolo: "Requisição de Atestado Medico"},
        {id : "3", protocolo: "Requisição de Avaliação"},
        {id : "4", protocolo: "Solicitação de Carterinha"},
    ]

    function BackIndex(){ 
        navigation.navigate('Index'); 
    }

    return(
        <View style={StyleSheet.container}>

            <Image style = {style.logo} source = {require('../../assets/logo-faccar.png')}/>

            <FlatList
                data = {protocolos}
                keyExtractor = {item => item.id}
                renderItem = {({item}) => (
                    < ProtocoloItem 
                        data = {item}
                        handleLeft = {() => alert('Protocolo Concluido')}
                        handleRight = {() => alert('Protocolo Cancelado')}
                    />
                )}
                ItemSeparatorComponent = { ( ) => <Separator/> }
            />
            <TouchableOpacity onPress={BackIndex}>
                    <Text style = {style.back2Index} > Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const Separator = () => <View style={{flex:1, height:1, backgroundColor:'#DDD'}}></View>

const style = StyleSheet.create({
    container:{
        flex:1,
    },
    logo: {
        height: 170 ,
        marginTop: 40,
        marginBottom: 30,
        alignSelf: "center",
        resizeMode: "contain",
    },
    back2Index  : {
        color: '#000',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'
    },
})