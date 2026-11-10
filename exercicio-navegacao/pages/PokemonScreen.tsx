import {
  View,
  Text,
  FlatList,
  Pressable,
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
  const [vermelho, setVermelho] = useState(false);
  function clicar() {
    setVermelho(!vermelho);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pokemons</Text>
      <Text>Toque em um pokemon para ver os detalhes dele.</Text>

      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity onPress={clicar}>
              <Heart style={styles.coracao} color={vermelho ? "red" : "black"}  />
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
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#F4F6F8" },
  titulo: { fontSize: 26, fontWeight: "bold", marginBottom: 8 },
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
  coracao: { alignSelf: "flex-end" },
});
