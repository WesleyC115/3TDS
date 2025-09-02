import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ManipulacaoListas() {
  const [mensagem, setMensagem] = useState('');
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  const handleItemPress = (item) => {
    setMensagem(`Você clicou em: ${item}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item)}>
            <Text style={styles.item}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { fontSize: 18, marginVertical: 10, color: 'blue' },
  mensagem: { marginTop: 20, fontSize: 16, color: 'green', textAlign: 'center' },
});