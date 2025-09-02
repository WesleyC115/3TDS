import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function ComponentesTela() {
  const [texto, setTexto] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite algo..."
        style={styles.input}
        onChangeText={setTexto}
      />
      <Button title="Enviar" onPress={() => alert(`Você digitou: ${texto}`)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 }
});