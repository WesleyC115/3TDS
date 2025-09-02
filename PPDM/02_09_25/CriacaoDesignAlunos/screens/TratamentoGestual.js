import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TratamentoGestual() {
  const [coordenadas, setCoordenadas] = useState({ x: 0, y: 0 });

  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    setCoordenadas({ x: locationX, y: locationY });
  };

  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => true}
      onResponderRelease={handlePress}
    >
      <Text>Toque em qualquer lugar para detectar o gesto!</Text>
      <Text style={styles.coordenadas}>
        Coordenadas: X = {coordenadas.x.toFixed(2)}, Y = {coordenadas.y.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' },
  coordenadas: { marginTop: 20, fontSize: 16, color: 'blue' },
});