import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Location from 'expo-location';


export default function GpsControl() {
    const [isGpsEnabled, setIsGpsEnabled] = useState(false);
    const [location, setLocation] = useState(null);
    const [cidade, setCidade] = useState(null);
    const [estado, setEstado] = useState(null);
    
    const toggleGps = async () => {
        // Apenas pede a permissão quando o usuário liga o GPS.
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
        alert('Permissão para acessar a localização foi negada.');
        setIsGpsEnabled(false);
        return;
        }
        setIsGpsEnabled(prev => !prev);
        let endereco = await Location.reverseGeocodeAsync({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        });

         if (endereco.length > 0) {
          setCidade(endereco[0].city);
          setEstado(endereco[0].region);
        }
    };

    useEffect(() => {
    if (isGpsEnabled) {
        const getGpsLocation = async () => {
        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
        };
        getGpsLocation();
    } else {
        setLocation(null);
    }
    }, [isGpsEnabled]);

    return (
        
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.heading}>Controle de Hardware - GPS</Text>
                <View style={styles.controlRow}>
                    <Text style={styles.controlText}>GPS</Text>
                    <Switch onValueChange={toggleGps} value={isGpsEnabled} />
                </View>
                {isGpsEnabled && location && (
                        <Text style={styles.statusText}>
                            Latitude: {location.coords.latitude.toFixed(4)}, Longitude: {location.coords.longitude.toFixed(4)},
                            Cidade : {cidade}, Estado: {estado}
                        </Text>
                        )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  }
});