import React, { useState, useEffect } from 'react';
import {SafeAreaView, ScrollView, Text, View, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';;
import NotasList from '../../src/components/NotasList'

async function buscaMaterias( {navigation} ){
    async function buscaMaterias(){
        const response = await api.get('/materia/');
        setMateria(response.data);
        console.log(response.data)  
    }
}