import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function TratamentoGestual2() {
  const [mensagem, setMensagem] = useState('');

  const handleImagePress = () => {
    setMensagem('Você clicou na imagem! Esta é uma imagem de exemplo.');
  };

  return (
    <View style={styles.container}> 
      <TouchableOpacity onPress={handleImagePress}>
        <Image
          source={{ uri: 'https://picsum.photos/200' }}
          style={styles.image}
        />
      </TouchableOpacity>
      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' },
  image: { width: 150, height: 150, marginBottom: 20 },
  mensagem: { fontSize: 16, color: 'blue', textAlign: 'center', marginTop: 10 },
});