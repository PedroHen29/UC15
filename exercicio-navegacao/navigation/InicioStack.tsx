import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerToggleButton } from '@react-navigation/drawer';

import PokemonScreen from '../pages/PokemonScreen';
import DetalhesScreen from '../pages/DetalhesScreen';
import type { InicioStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<InicioStackParamList>();

export default function InicioStack() {
  return (
    <Stack.Navigator initialRouteName="Pokemons">
      <Stack.Screen
        name="Pokemons"
        component={PokemonScreen}
        options={{
          title: 'Pokedex',
          headerLeft: () => <DrawerToggleButton tintColor="#1454BD" />,
        }}
      />
      <Stack.Screen
        name="Detalhes"
        component={DetalhesScreen}
        options={{ title: 'Detalhes do Produto' }}
      />
    </Stack.Navigator>
  );
}