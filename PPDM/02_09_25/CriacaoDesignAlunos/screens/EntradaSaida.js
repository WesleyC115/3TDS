import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function EntradaSaida() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const processarDados = () => {
    setOutput(input.toUpperCase());
  };

  const limparDados = () => {
    setInput('');
    setOutput('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={input}
        onChangeText={setInput}
      />
      <View style={styles.buttonsContainer}>
        <Button title="Processar" onPress={processarDados} />
        <Button title="Limpar" onPress={limparDados} color='red'/>
      </View>
      <View style={styles.outputContainer}>
        <Text>Saída: {output}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, width: '80%' },
  buttonsContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-around',
    width: '60%',
    padding: 20},
  outputContainer: { 
    borderColor: '#e6f2e6',
    backgroundColor: '#c2ffcdff',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    width: '80%'
  }
});