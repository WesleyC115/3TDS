import React, {useState} from "react";
import {View, Modal, Button, Text, TextInput, StyleSheet, FlatList} from 'react-native';

export default function DialogoModal() {
    const [visivel, setVisivel] = useState(false);
    const [texto, setTexto] = useState ('');
    const [textosSalvos, setTextosSalvos ] = useState([]);

    const salvarTexto = () => {
        if (texto.trim()) {
            setTextosSalvos([...textosSalvos, texto]);
            setTexto('');
            setVisivel(false);
        }
    };

    const cancelar = () => {
        setTexto('');
        setVisivel(false);
    };

    return (
        <View style={styles.container}>
            <Button title= "Abrir Dialogo" onPress={() => setVisivel(true)}></Button>
            <FlatList
            data={textosSalvos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <Text style={styles.textoSalvo}>{item}</Text>}            
            />
            <Modal visible={visivel} animationType="slide" transparent={true}>
                <View style ={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text>Este é um dialogo modal</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite algo"
                            value={texto}
                            onChangeText={setTexto}
                        />
                        <Button title="Salvar e fechar" onPress={salvarTexto} />
                        <Button title="Cancelar" onPress={cancelar} color="red" />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 20},
    textoSalvo: { fontSize: 16, marginVertical: 5, color: '#333'},
    modalContainer: {flex: 1, justifyContent: 'center', alignItems: 'center', 
        backgroundColor: 'rgba(0,0,0,0.5)'},
    modalContent: { backgroundColor: '#fff', padding: 20, borderRadius: 10},
    input: {borderWidth: 1, borderColor: '#ccc', padding: 10, 
        marginVertical: 10, width: '100%'}
});