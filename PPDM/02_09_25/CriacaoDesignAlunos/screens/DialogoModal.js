import React, { useState } from 'react';
import { View, Modal, Button, Text, TextInput, StyleSheet, FlatList } from 'react-native';

export default function DialogoModal() {
  const [visivel, setVisivel] = useState(false);
  const [texto, setTexto] = useState('');
  const [textosSalvos, setTextosSalvos] = useState([]);

  const salvarTexto = () => {
    if (texto.trim()) {
      setTextosSalvos([...textosSalvos, texto]);
      setTexto('');
      setVisivel(false);
    }
  };

  const cancelar = () => {
    setTexto(''); // Limpa o texto digitado
    setVisivel(false); // Fecha o modal
  };

  return (
    <View style={styles.container}>
      <Button title="Abrir Diálogo" onPress={() => setVisivel(true)} />
      {/* FlatList é um componente do react native que exibe uma lista de itens de forma eficiente */}
      <FlatList
        //data é um array com os textos que quer exibir
        data={textosSalvos} 
        //função que recebe o item do array e retorna um componente Text
        renderItem={({ item }) => <Text style={styles.textoSalvo}>{item}</Text>} 
        //função que extrai a chave única para cada item
        keyExtractor={(item, index) => index.toString()}  
      /> {/*fim do FlatList */}
      <Modal visible={visivel} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Este é um diálogo modal</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite algo..."
              value={texto}
              onChangeText={setTexto}
            />
            <Button title="Salvar e Fechar" onPress={salvarTexto} />
            <Button title="Cancelar" onPress={cancelar} color="red" />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  textoSalvo: { fontSize: 16, marginVertical: 5, color: '#333' },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { backgroundColor: '#fff', padding: 20, borderRadius: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 10, width: '100%' }
});