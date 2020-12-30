import React, {Component} from 'react';
import {Text, Button, TextInput, View, StyleSheet} from 'react-native';
import Estilo from './estilo';
import MegaNum from './MegaNumeros';

export default class MegaTeste extends Component {
  state = {
    qtdNum: 3,
    numeros: [],
    max: 10,
  };

  gerarNumerosNaoContidos = (nums) => {
    const novo = parseInt(Math.random() * this.state.max + 1);
    return nums.includes(novo) ? this.gerarNumerosNaoContidos(nums) : novo; //Recursiva
  };

  gerarNum = () => {
    const numeros = Array(this.state.qtdNum)
      .fill()
      .reduce((n) => [...n, this.gerarNumerosNaoContidos(n)], [])
      .sort((a, b) => a - b);
    this.setState({numeros});
  };

  gerarTexto = () => {
    const nums = this.state.numeros;
    return nums.map((n) => {
      return <MegaNum key={n} numeros={n} />;
    });
  };

  // gerarNum = () => {
  //     const numeros = []
  //     for(let i = 0; i < this.state.qtdNum; i++){
  //         numeros.push(this.gerarNumerosNaoContidos(numeros))
  //     }
  //     numeros.sort((a,b) => a-b)
  //     this.setState({numeros})
  // }

  alterarQtd = (qtd) => {
    this.setState({qtdNum: +qtd});
  };

  alterarMax = (max) => {
    this.setState({max: +max});
  };

  render() {
    return (
      <>
        <Text style={[Estilo.txtG, {color: '#2F4F4F'}]}>Gerador Mega-Sena</Text>
        <TextInput
          keyboardType={'numeric'}
          borderBottomWidth={1}
          width={150}
          margin={20}
          placeholder="Digite um número"
          onChangeText={this.alterarQtd}
        />
        <TextInput
          keyboardType={'numeric'}
          placeholder="Digite o intervalo max"
          width={150}
          margin={20}
          borderBottomWidth={1}
          onChangeText={this.alterarMax}
        />
        <Button
        title="Gerar"
        onPress={this.gerarNum}
        color='#32CD32'
        />
        <View style={style.Num}>{this.gerarTexto()}</View>
      </>
    );
  }
}

const style = StyleSheet.create({
    Num:{
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'center',
        marginTop: 25
    }
})