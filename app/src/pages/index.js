import React from 'react';

import {View, SafeAreaView} from 'react-native';
import {StyleSheet} from 'react-native-web';
import { NavigationActions } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Index extends ( {Navigation} ) {

    async function handleSubmit(){
        Navigation.navigate('User');
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.row}>
                <TouchableOpacity  style={style.button}>
                    <Image style={style.image} source={require('../assets/user.svg')}/>
                    <text style={style.text} >Meu cadastro</text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button}>
                    <text style={style.text}>Notas</text>
                </TouchableOpacity>       
            </View>   

            <View style={style.row}> 
                <TouchableOpacity style={style.button}>
                    <text style={style.text}>Horários</text>
                </TouchableOpacity>
                
                <TouchableOpacity style={style.button}>
                    <text style={style.text}>Protocolos</text>
                </TouchableOpacity>                             
                
                <TouchableOpacity style={style.button}>
                    <text style={style.text}>Bibliotecas</text>
                </TouchableOpacity>
            </View>        
            <View style={style.row}> 
                <TouchableOpacity style={style.button, style.logoff}>
                    <text style={style.text}>logoff</text>
                </TouchableOpacity>    
            </View>        
        </SafeAreaView>
    );

    const style = StyleSheet.create({
        container : {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },

        row: {
            flexDirection: 'row'
        },

        button: {
            marginRight: 5,
            marginLeft: 5,
            marginTop: 5,
            marginBottom: 5,   	
            width: '40%',
            height: 100,
            flex: 0,
            backgroundColor: 'green',
            border: 1,
            borderRadius: 5,
            borderColor: 'grey' 
        },
        
        text: {
            color: '#000',
            textAlign: 'center'
        },

        logoff: {
            backgroudColor: '#b00',
        }
    });
}        

