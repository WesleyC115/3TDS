import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function GerenciadorLayout() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: 'red' }]} />
      <View style={[styles.box, { backgroundColor: 'green' }]} />
      <View style={[styles.box, { backgroundColor: 'blue' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
  box: { width: 50, height: 50 }
});