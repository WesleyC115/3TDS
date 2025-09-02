import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';

export default function EstruturaLayout() {
  const { height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={[styles.section, { height: height * 0.2, backgroundColor: 'skyblue' }]} />
      <View style={[styles.section, { height: height * 0.6, backgroundColor: 'steelblue' }]} />
      <View style={[styles.section, { height: height * 0.2, backgroundColor: 'lightblue' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  section: { justifyContent: 'center', alignItems: 'center' }
});