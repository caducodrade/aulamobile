import React from 'react';
import {View, Text,StyleSheet, Animated} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function ProtocoloList({data, handleLeft, handleRight}){

  function LeftActions(progress, dragX){

    const escala = dragX.interpolate({
      inputRange :  [0 , 100],
      outputRange : [0, 1],
      extrapolate : 'clamp'
    });

    return (
      <View style={ styles.leftAction}> 
        <Animated.Text style={ [styles.textAction, {transform : [{ scale : escala}]}  ] }>Concluir</Animated.Text>
      </View>
    )
  }

  function RightActions(progress, dragX){

    const escala = dragX.interpolate({
      inputRange :  [-100 , 0],
      outputRange : [1.5, 0],
      extrapolate : 'clamp'
    });

    return (
      <View style = {styles.rightAction}>
        <Animated.Text style={ [styles.textAction, {transform : [{ scale : escala}]}  ] }>Cancelar</Animated.Text>
      </View>
    ) 
  }

  return(
    <Swipeable
    renderLeftActions = {LeftActions}
    onSwipeableLeftOpen = {handleLeft}
    renderRightActions = {RightActions}
    onSwipeableRightOpen = {handleRight}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{data.protocolo}</Text>
      </View>
    </Swipeable>
 
  )   
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#FFF',
    paddingHorizontal : 10,
    paddingVertical: 20
  },
  text:{
    fontSize: 16
  },
  leftAction:{
    backgroundColor : "#3DDB43" ,
    justifyContent :'center',
    paddingHorizontal: 5,
    flex :1,
   },
    rightAction:{
    backgroundColor : "#F00",
    justifyContent :'center',
    paddingHorizontal: 5
    },
  textAction:{
    color : "#FFF"
  }
});
