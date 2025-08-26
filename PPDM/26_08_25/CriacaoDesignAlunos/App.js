import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importa telas
import CriacaoInterface from './screens/CriacaoInterface';
import EstruturaLayout from './screens/EstruturaLayout';
import TiposLayout from './screens/TiposLayout';
import GerenciadorLayout from './screens/GerenciadorLayout';
import ComponentesTela from './screens/ComponentesTela';
import DialogoModal from './screens/DialogoModal';



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="2. Criação de Interface">
        <Drawer.Screen name="2. Criação de Interface" component={CriacaoInterface} />
        <Drawer.Screen name="2.1.1 Estrutura" component={EstruturaLayout} />
        <Drawer.Screen name="2.1.2 TiposLayout" component={TiposLayout} />
        <Drawer.Screen name="2.1.3 GerenciadorLayout" component={GerenciadorLayout} />
        <Drawer.Screen name="2.1.4 ComponentesTela" component={ComponentesTela} />
        <Drawer.Screen name="2.1.5 DialogoModal" component={DialogoModal} />


      </Drawer.Navigator>
    </NavigationContainer>
  );
}
