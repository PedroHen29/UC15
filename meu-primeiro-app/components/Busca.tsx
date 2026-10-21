import { useState } from "react";
import { produtos } from "../data/produtos";
import { FlatList, Text, TextInput, View, StyleSheet, Image } from "react-native";

export const Busca = () => {
  const [termo, setTermo] = useState("");
  // Filtra os produtos de acordo com o termo
    const produtosFiltrados = produtos.filter((produto) => 
    produto.titulo.toLowerCase().includes(termo.toLowerCase()));
    
  return (
    <View>
      <Text> Buscar produtos</Text>

      <TextInput
        placeholder="Digite um produto..."
        value={termo}
        onChangeText={setTermo}
      />

      <FlatList
      // de onde ele lê os dados
        data={produtosFiltrados}
        // serve pra identificar o id
        keyExtractor={(produto) => produto.id}
        // como essa informação vai aparecer
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text>{item.titulo}</Text>

            <Text style={styles.txt_preco}>R${item.preco.toFixed(2)}</Text>

            <Image style={styles.imagem} source={{uri: item.imagem}}></Image>
          </View>
        )}
        ListEmptyComponent={
          <Text>Nenhum produto encontrado</Text>
        }
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    padding: 20,
    margin: 8,
    borderRadius: 8,
  },
  imagem: {
    height: 120,
    objectFit: "fill",
    borderRadius: 10,
  },
  txt_preco: {
    color: '#2ECC71'
  }
})