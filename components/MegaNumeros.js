import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Estilo from './estilo';

export default ({numeros}) => {
  return (
    <View style={style.Container}>
      <Text style={[Estilo.txtG, style.Texto]}>{numeros}</Text>
    </View>
  );
};

const style = StyleSheet.create({
    Container:{
        height: 50,
        width: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 25,
    },
    Texto: {
        color: '#FFF'
    }
})
