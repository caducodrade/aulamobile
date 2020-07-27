import React, { useEffect } from 'react';

import {View} from 'react-native';
import {StyleSheet, Touchable} from 'react-native-web';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Veiculo() {

    useEffect(() => {
        AsyncStorage.getItem('id').then(
            storagedId => { const id = id;
            setId(id);
        })
    }, [])

    return (
        <SafeAreaView style={style.container}>
            <Image style={style.image} source={require('../assets/logo-faccar.png')}/>
            <Text size={styles.title} >Lista de Usuarios</Text>
            <TouchableOpacity>
                <Text>Adiciona novo usuario</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};      

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: 150,
        marginTop: 30,
        alignSelf: "center",
        resizeMode: "contain"
    },
    title: {
        fontSize: 26,
        paddingleft: 10,
        marginTop: 15
    }
});