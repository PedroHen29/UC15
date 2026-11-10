import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { pokemons } from "../data/Pokemons";
import type { InicioStackParamList } from "../types/navigation";
import { Heart } from "lucide-react";
import { useState } from "react";

type Props = NativeStackScreenProps<InicioStackParamList, "Pokemons">;

export default function ProdutosScreen({ navigation }: Props) {
  const [favoritos, setFavoritos] = useState<number[]>([]);

  function alternarFavorito(id: number) {
    const pokemonAlvo = pokemons.find(p => p.id === id);
    
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((favId) => favId !== id));
      if (pokemonAlvo) pokemonAlvo.favorito = false;
    } else {
      setFavoritos([...favoritos, id]);
      if (pokemonAlvo) pokemonAlvo.favorito = true;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pokémons</Text>
      <Text style={styles.subtitulo}>
        Toque em um pokémon para ver os detalhes dele.
      </Text>

      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => {
          const isFavorito = favoritos.includes(item.id);

          return (
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() => alternarFavorito(item.id)}
                style={styles.botaoCoracao}
              >
                <Heart
                  size={24}
                  color={isFavorito ? "red" : "black"}
                  fill={isFavorito ? "red" : "none"}
                />
              </TouchableOpacity>

              <Text style={styles.nome}>{item.nome}</Text>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Detalhes", { pokemonId: item.id })
                }
              >
                <Text style={styles.link}>Ver detalhes →</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#F4F6F8" },
  titulo: { fontSize: 26, fontWeight: "bold", marginBottom: 4 },
  subtitulo: { fontSize: 14, color: "#666", marginBottom: 8 },
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
  link: { color: "#1454BD", fontWeight: "bold" },
  botaoCoracao: { alignSelf: "flex-end" },
});
