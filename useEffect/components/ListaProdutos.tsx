import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

interface Produto {
  id: number;
  title: string;
}


const ListaProdutos = () => {
  // array de produtos
  const [produtos, setProdutos] = useState<Produto[]>([]);
  // boolean que verifica se esta carregando ou nao
  const [carregando, setCarregando] = useState<boolean>(true);
  const [termo, setTermo] = useState<string>("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setProdutos(dados);
        setCarregando(false); 
      });
  }, [termo]);

  if (carregando) {
    return <ActivityIndicator size="large" />;
  }

  const produtosFiltrados = produtos.filter((produto) => 
    produto.title.toLowerCase().includes(termo.toLowerCase()));

  return (
    <View>
      <TextInput
        style={styles.input}
        value={termo}
        onChangeText={setTermo}
        placeholder="Buscar produto..."
      />
      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.linha}>
            <Text style={styles.texto}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListaProdutos;

const styles = StyleSheet.create({
  linha: { padding: 14, borderBottomWidth: 1, borderBottomColor: "#eee" },

  texto: { color: "white" },

  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, color: 'white' },
});
