import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { pokemons } from '../data/Pokemons';
import type { InicioStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<InicioStackParamList, 'Detalhes'>;

export default function DetalhesScreen({ navigation, route }: Props) {
  const { pokemonId } = route.params;
  const pokemon = pokemons.find((item) => item.id === pokemonId);

  if (!pokemon) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado.</Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{pokemon.nome}</Text>
      <Image style={styles.imagem} source={{uri: pokemon.imagem}}></Image>
      <Text style={styles.texto}>Região: {pokemon.regiao}</Text>
      <Text style={styles.texto}>Tipo: {pokemon.tipo}</Text>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>Voltar</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    gap: 20,
    backgroundColor: 'white',
  },
  titulo: { fontSize: 26, fontWeight: 'bold', textAlign: 'center' },
  preco: { fontSize: 22, color: '#1454BD', fontWeight: 'bold' },
  imagem: {borderRadius: '50%', width: 100, height: 100, objectFit: 'cover'},
  botao: {backgroundColor: '#0052FF', color: 'white', padding: 8, borderRadius: 5, width: 100, textAlign: 'center', fontFamily: 'Arial'},
  texto: {fontWeight: '700', borderWidth: 2, padding: 4, borderRadius: 8, fontFamily: 'Arial', width: 200 }
});