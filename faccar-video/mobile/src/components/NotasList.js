import React, { useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import api from '../services/api';

export default function NotasList( {item} ) {

    const [materia, setMateria] = useState([]);

    useEffect(() => {
        buscaMateria(item.materia_id)
    },[]);

    async function buscaMateria(materia_id) {
        const materia = await api.get('/materia' + materia_id);
        setMateria(materia.data);
    }

    return (
        <View style={style.container}>
            <Text style={style.TableCellTitulo}> {materia.materia}  </Text>
            <Text style={style.TableCell}>       {item.primeiroBim} </Text>
            <Text style={style.TableCell}>       {item.segundoBim}  </Text>
            <Text style={style.TableCell}>       {item.terceiroBim} </Text>
            <Text style={style.TableCell}>       {item.quartoBim}   </Text>           
        </View>       
    
    )
}

const style = StyleSheet.create({ 
    container: {
        flexDirection :'row'
    },  
    TableCellTitulo:{
        width :150,
        borderWidth: 1,
        borderColor :"#000",
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
    TableCell:{
        flex: 1,
        borderWidth: 1,
        borderColor :"#000",
        color: "#000",
        paddingVertical: 5,
        paddingHorizontal: 5,
        fontSize: 16,
        textAlign : 'center'
    }
})