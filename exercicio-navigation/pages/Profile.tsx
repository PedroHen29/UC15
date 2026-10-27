import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Loggin = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textoPerfil}>Perfil</Text>
      <View style={styles.card}>
        <Image
          style={styles.imagem}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfwPSpxacfengYL5nonNFzzfnZUcXyBwdqJtjg57u-w&s=10",
          }}
        />
        <Text style={styles.texto}>Nome: Lionel Messi</Text>
        <Text style={styles.texto}>Idade: 39</Text>
        <Text style={styles.texto}>Descrição: Melhor jogador do mundo</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Loggin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  card: {
    backgroundColor: "#ddd",
    padding: 20,
    width: 300,
    height: 400,
    borderRadius: 20,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10,
    gap: 3,
  },

  input: { borderColor: "black", borderWidth: 1.5, borderRadius: 4 },
  textoPerfil: {
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  texto: {
    padding: 4,
    width: "100%",
    backgroundColor: "#ccc",
    fontWeight: "bold",
    borderRadius: 10,
  },
  imagem: { height: 80, width: 80, borderRadius: 50, marginBottom: 15 },
  botao: {
    padding: 8,
    width: "100%",
    backgroundColor: "gray",
    borderRadius: 8,
    color: "white",
    fontFamily: 'Arial',
    textAlign: 'center',
    marginTop: 'auto'
  },
});
