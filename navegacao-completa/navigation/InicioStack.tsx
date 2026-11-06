import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProdutosScreen from '../screens/ProdutosScreen';
import DetalhesScreen from '../screens/DetalhesScreen';
import type { InicioStackParamList } from '../types/navigation';
import { DrawerToggleButton } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator<InicioStackParamList>();

export default function InicioStack() {
  return (
    <Stack.Navigator initialRouteName="Produtos">
      <Stack.Screen
        name="Produtos"
        component={ProdutosScreen}
        options={{ title: 'Minha Loja', headerLeft: () => <DrawerToggleButton tintColor='#1454BD'/> }}
      />
      <Stack.Screen
        name="Detalhes"
        component={DetalhesScreen}
        options={{ title: 'Detalhes do Produto' }}
      />
    </Stack.Navigator>
  );
}