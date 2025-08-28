import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function EntradaSaida() {
  const [texto, setTexto] = useState('');
  const [textoProcessado, setTextoProcessado] = useState('');

  const processarTexto = () => {
    setTextoProcessado(texto.toUpperCase());
  };

  const limparInput = () => {
    setTexto('');
    setTextoProcessado(''); 
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite um texto"
        value={texto}
        onChangeText={setTexto}
      />
      <View style={styles.buttonContainer}>
        <Button title="Processar" onPress={processarTexto} />
        <View style={styles.buttonSpacer} />
        <Button title="Limpar" onPress={limparInput} />
      </View>

      {textoProcessado.length > 0 && (
        <Text style={styles.outputText}>
          Saída: {textoProcessado}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', 
    padding: 10, marginBottom: 20, width: '80%' },
  buttonContainer: { flexDirection: 'row', alignItems: 'center' },
  buttonSpacer: { width: 10 },  
  outputText: {marginTop: 20, fontSize: 18,},
});
