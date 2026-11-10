import { View, Text, StyleSheet, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { InicioStackParamList } from "../types/navigation";
import { Pokemon, pokemons } from "../data/Pokemons";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

type Props = NativeStackScreenProps<InicioStackParamList, "Pokemons">;

export default function FavoritosScreen() {
  const [listaFavoritos, setListaFavoritos] = useState<Pokemon[]>([]);

  useFocusEffect(
    useCallback(() => {
      const atualizados = pokemons.filter((p) => p.favorito === true);
      setListaFavoritos(atualizados);
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Favoritos</Text>

      {listaFavoritos.length === 0 ? (
        <Text style={styles.subtitulo}>
          Você ainda não favoritou nenhum Pokémon.
        </Text>
      ) : (
        <FlatList
          data={listaFavoritos}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.lista}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.nome}>{item.nome}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#F4F6F8" },
  titulo: { fontSize: 26, fontWeight: "bold", marginBottom: 4 },
  subtitulo: { fontSize: 14, color: "#666", marginTop: 8 },
  lista: { paddingVertical: 16, gap: 12 },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E1E5EA",
    gap: 8,
  },
  nome: { fontSize: 18, fontWeight: "bold" },
});
