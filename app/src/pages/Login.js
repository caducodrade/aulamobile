import React, { useEffect } from 'react';

import {View, Image, Text, TextInput, StyleSheet, AsyncStorage, Alert} from 'react-native';

import logo from '../../assets/logo-faccar.jpg';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [id, setId] = useState('');
    useEffect()
    useEffect(() =>
        AsyncStorage.getItem('id').then(id =>{
            if(id){
                navigation.navigate('index')
            }
        })
    );

    console.log(email, senha),

    async function handleSubmit() {
        console.log('solicitando');
        
        const response = await api.post('/users/login', {
            'email' : email,
            'senha' : senha
        });
        const {_id} = response.data.users;
        //console.log(response.data.users);        
        
        if(_id){
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('id', _id);
            navigation.navigate('Index');
        }
    }

    return (
        <View>
            <Image source={logo}/>
            <View style = {style.container}>
                <Image source={logo} style={style.logo}>

                <View style = {style.form}>
                    <Text Style = {style.label}>Informe seu e-mail</Text>
                    <TextInput 
                        style = {style.input}
                        placeholder = "Seu e-mail" 
                        placeholderTextColor = "#999"
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        keyboardType = "email-address"
                        autoCompleteType = "email"
                        value = {email.Text}
                        onChangeText = {setEmail}
                    />

                <Text Style = {style.label}>Informe sua senha</Text>
                    <TextInput 
                        style = {style.input}
                        placeholder = "Seu e-mail" 
                        secureTextEntry = {true}
                        onCompleteType = "password"
                        placeholderTextColor = "#999"
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        keyboardType = "email-address"
                        autoCompleteType = "email"
                        onChangeText = {setSenha}
                    />

                    <TouchableOpacity style = {style.button}>
                        <Text style = {style.textButton}>logar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {style.button}>
                        <Text style = {style.textButton}>logar</Text>
                    </TouchableOpacity>
                </View>            
            </View>
        </View>
    );
}

const style =StyleSheet.create({
    container : {
        flex: 1 ,        
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo : {
        width: '100%',
        height: '100%'
    },
    form : {
        alignSelf : 'stretch',
        paddingHorizontal : 30,
        marginTop: 30,
    }, 
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: ,
        marginTop:
    },
    input : {
        borderWidth: 1,
        borderColor: '#DDD',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 16,
        color: '#444',
        borderRadius: '5px'
    },
    buttom : {
        height: 40,
        backgroundColor: '#028134',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 30
    },
    textButton : {
        color: '#fff'
    },
    recuverPass : {
        color: '#444',
        paddingVertical: 10,
        alignItems: 'center',
        justyContent: 'center',
        flex: 1
    }
})