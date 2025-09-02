import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

export default function TratamentoExcecoes() {
  const [valor, setValor] = useState('');

  const handleDivisao = () => {
    try {
      const numero = parseFloat(valor);
      if (isNaN(numero)) {
        throw new Error('Por favor, insira um número válido.');
      }
      if (numero === 0) {
        throw new Error('Erro: Divisão por zero não é permitida.');
      }
      const resultado = 100 / numero;
      Toast.show({
        type: 'success',
        text1: 'Resultado',
        text2: `100 dividido por ${numero} é ${resultado}`,
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Exceção Capturada',
        text2: error.message,
      });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite um número"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />
      <Button title="Dividir" onPress={handleDivisao} />
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 20, width: '80%' },
});