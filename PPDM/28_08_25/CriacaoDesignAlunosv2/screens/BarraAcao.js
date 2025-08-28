import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TelaComBarra() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Barra de Ação está aqui em cima!</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function BarraAcao() {
  const [modalVisivel, setModalVisivel] = useState(false);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tela"
        component={TelaComBarra}
        options={{
          title: 'Minha Barra de Ação',
          headerRight: () => (
            <>
              <TouchableOpacity
                onPress={() => setModalVisivel(true)}
                style={styles.headerButton}
              >
                <Text style={styles.headerButtonText}>Info</Text>
              </TouchableOpacity>
              <Modal
                visible={modalVisivel}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisivel(false)}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalText}>Você clicou no botão da barra de ação!</Text>
                    <Button title="Fechar" onPress={() => setModalVisivel(false)} />
                  </View>
                </View>
              </Modal>
            </>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18 },
  headerButton: { marginRight: 10, padding: 10, backgroundColor: '#007AFF', borderRadius: 5 },
  headerButtonText: { color: '#fff', fontSize: 16 },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { backgroundColor: '#fff', padding: 20, borderRadius: 10, alignItems: 'center' },
  modalText: { fontSize: 16, marginBottom: 10 },
});