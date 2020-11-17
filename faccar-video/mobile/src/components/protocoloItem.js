import React from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function protocoloItem({data, HandleLeft, HandleRight}){

    function LeftAction(progress, dragX){
        const escala = dragX.interpolate({
            inputRange : [0,100],
            outputRange : [0,1],
            extrapolate : 'clamp',
        });
        return(
            <View style = {style.LeftAction}>
                <Animated.Text style = {style.TextAction, {transform : [{scale : escala}]}}>Concluir</Animated.Text>
            </View>
        );
        
    }

    function RightAction(progress, dragX){
        const escala = dragX.interpolate({
            inputRange : [-100,0],
            outputRange : [1.5,0],
            extrapolate : 'clamp',
        });
        return(
            <View style = {style.RightAction}>
                <Animated.Text style = {style.TextAction, {transform : [{scale : escala}]}}>Cancelar</Animated.Text>
            </View>
        );
        
    }

    return (
        <Swipeable 
            renderLeftAction = {LeftAction}
            onSwipeableLeftOpen = {HandleLeft}
            renderRightAction = {RightAction}
            onSwipeableRightOpen = {HandleRight}
        >    
            <View style = {style.container}>
                <Text style = {style.Text}>{data.protocolo}</Text>
            </View>
        </Swipeable>
    )

}

const style = StyleSheet.create({ 
    container: {
        backgroundColor: '#FFF',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },  
    Text: {
        fontSize: 16,
    },
    LeftAction: {
        backgroundColor: '#3388e3',
        justifyContent: 'center',
        paddingHorizontal: 5,
        flex:1,
    },
    RightAction: {
        backgroundColor: '#f00',
        justifyContent: 'center',
        paddingHorizontal: 5,
    },
    TextAction: {
        color: '#FFF',
    }
})