import React from 'react';
import {View, StyleSheet, FlatList,Image , TouchableOpacity, Text} from 'react-native';

import ProtocoloItem from '../components/ProtocoloItem';

export default function Protocolos({navigation}){

  const protocolos = [
    {id : '1', protocolo: "Requisição de Substitutiva"},
    {id : '2', protocolo: "Requisição de Atestado Médico"},
    {id : '3', protocolo: "Requisição de Avaliação"},
    {id : '4', protocolo: "Solicitação da Carteirinha"}
  ]
 
  function BackIndex(){ 
    navigation.navigate('Index');   
  }

  return (
    <View style={StyleSheet.container}>
       
       <Image style = {styles.logo} source = {require('../../assets/logo-faccar.png')}/>
      
      <FlatList
      data = {protocolos}
      keyExtractor = {item => item.id}
      renderItem = {({item}) => (
        <ProtocoloItem 
        data        = {item}
        handleLeft  = {()=> alert('Protocolo Concluído')}
        handleRight = {()=> alert('Protocolo Cancelado')} />
      ) }
      ItemSeparatorComponent = { () => <Separator/>}
      />
         <TouchableOpacity onPress={BackIndex}>
                    <Text style = {styles.back2Index} > Voltar</Text>
          </TouchableOpacity>
    </View>
  )
}

const Separator = () => <View style={{flex:1, height : 1 , backgroundColor : '#DDD'}}></View>

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  logo: {
    height: 170 ,
    marginTop: 40,
    marginBottom: 30,
    alignSelf: "center",
    resizeMode:"contain"
  },
  back2Index  : {
    color: '#000',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center'
},
})
