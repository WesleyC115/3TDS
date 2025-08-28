import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function TiposLayout() {
    return (
        <ScrollView contentContainerStyle={StyleSheet.container}>
            {[...Array(20).keys()].map(i => (
                <Text key={i} style={StyleSheet.text}>Item {i + 1}</Text>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {padding: 20},
    text:{fontSize: 18, marginVertical: 5}
});