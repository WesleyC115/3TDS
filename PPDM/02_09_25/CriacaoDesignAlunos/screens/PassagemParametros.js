import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Enviar Parâmetro"
        onPress={() => navigation.navigate('Detalhes', { mensagem: 'Olá da Tela Inicial!' })}
      />
    </View>
  );
}

function TelaDetalhes({ route }) {
  const { mensagem } = route.params;

  return (
    <View style={styles.container}>
      <Text>{mensagem}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function PassagemParametros() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicial" component={TelaInicial} />
        <Stack.Screen name="Detalhes" component={TelaDetalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});