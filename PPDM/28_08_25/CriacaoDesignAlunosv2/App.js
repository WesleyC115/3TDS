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
import BarraAcao from './screens/BarraAcao';
import ControleElementos from './screens/ControleElementos';
import TratamentoExcecoes from './screens/TratamentoExcecoes';
import ManipulacaoListas from './screens/ManipulacaoLista';
import EntradaSaida from './screens/EntradaSaida';


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
        <Drawer.Screen name="2.1.6 Tela com Barra" component={BarraAcao} />
        <Drawer.Screen name="2.1.7 ControleElementos" component={ControleElementos} />
        <Drawer.Screen name="2.1.8 Tratamento Exceções" component={TratamentoExcecoes} />
        <Drawer.Screen name="2.2.2 Manipulação de Listas" component={ManipulacaoListas} />
        <Drawer.Screen name="2.2.3 Entrada e Saida" component={EntradaSaida} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
