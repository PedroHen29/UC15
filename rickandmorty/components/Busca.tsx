import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
} from "react-native";
import { useEffect, useState } from "react";

interface Personagem {
  name: string;
  species: string;
  image: string;
}

interface RespostaAPI {
  results: Personagem[];
}

const BuscaUsuarios = () => {
  const [personagens, setPersonagens] = useState<Personagem[]>([]);
  const [termo, setTermo] = useState<string>("");
  const [carregando, setCarregando] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((resposta) => resposta.json())
      .then((dados: RespostaAPI) => {
        setPersonagens(dados.results);
        setCarregando(false);
      })

      .catch((erro) => console.log(erro));
  }, [termo]);

  const personagensFiltrados = personagens.filter((personagem) =>
    personagem.name.toLocaleLowerCase().includes(termo.toLowerCase())
  );

  if (carregando) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={termo}
        onChangeText={setTermo}
        placeholder="Busque um personagem..."
        style={styles.input}
      />

      <FlatList
        data={personagensFiltrados}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>{item.name}</Text>
            <Text style={styles.status}>{item.species}</Text>
            <Image style={styles.imagem} source={{ uri: item.image }}></Image>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, backgroundColor: "#fff" },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 8,
  },
  item: {
    padding: 15,
    margin: 4,
    width: 230,
    height: 110,
    backgroundColor: "#ccc",
    borderRadius: 8,
  },
  nome: { fontSize: 17, fontWeight: "bold", width: 130, marginBottom: 4 },
  status: { width: 80, fontSize: 14, color: 'black' },
  imagem: {
    height: 55,
    width: 55,
    objectFit: "cover",
    borderRadius: 5,
    position: "absolute",
    alignSelf: "flex-end",
    justifyContent: "flex-start",
    borderWidth: 2,
    borderColor: '#888'
  },
});

export default BuscaUsuarios;
