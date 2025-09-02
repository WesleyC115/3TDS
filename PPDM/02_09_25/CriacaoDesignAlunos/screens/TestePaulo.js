import React, { useState } from 'react';
import { View, Modal, Button, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function DialogoModal(){
    const [visivel, setVisivel] = useState(false);

    const fecharModal = () => {
        setVisivel(false);
        console.log('Modal fechado');
    }

    return(

        <>
            <View style={{flex: 1, padding: 20, alignItems: 'center'}}>
                {/*<Button title='Abrir modal' onPress={() => setVisivel(true)} style={styles.botaoRelativo} />*/}
                <TouchableOpacity onPress={() => setVisivel(true)} style={styles.botaoRelativo}>
                    <Text style={styles.textoBotao}>ABRIR MODAL</Text>
                </TouchableOpacity>
            </View>

             <Modal visible={visivel} animationType="slide" transparent={true}>          
                <View style={styles.containerModal}>
                    <View style={styles.containerDialog}>
                        <Text>Este é o diálogo modal!</Text>
                        <Button title="Fechar modal" onPress={fecharModal} style={styles.botaoRelativo}></Button>
                    </View>
                </View>
             </Modal>
        </>
        
    )
}

const styles = StyleSheet.create({
    containerModal: { flex: 1, 
        padding: 20, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgba(0,0,0,0.5)'},
    containerDialog: { 
        backgroundColor: '#fff', 
        padding: 20, 
        borderRadius: 10 },
    botaoRelativo: {
        marginTop: 10,
        width: '30%',
        backgroundColor: '#3c6c3aff',
        borderRadius: 7,
        padding: 10,
        alignItems: 'center'},
    textoBotao: {color: 'white', 
        alignContent: 'center'}
    });