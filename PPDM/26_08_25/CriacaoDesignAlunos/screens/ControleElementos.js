import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function ControleElementos() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Controle de Elementos de Tela</Text>
      <Switch
        value={isEnabled}
        onValueChange={(value) => setIsEnabled(value)}
      />
      <Text>{isEnabled ? 'Ativado' : 'Desativado'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});