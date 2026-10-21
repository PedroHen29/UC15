import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface cardProp {
  img: string;
  titulo: string;
  preco: number
}

const Card = ({ img, titulo,  preco }: cardProp) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: img }} style={styles.imagem} />

      <Text style={styles.texto}>{titulo}</Text>
      <Text>{preco}</Text>
      
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#f8f9fa",
    padding: 20,
    textAlign: "center",
    color: "white",
    borderRadius: 25,
  },
  texto: {
    color: "black",
    fontFamily: "Arial",
    fontSize: 20,
    textAlign: "center",
  },
  container: {
    width: 200,
    backgroundColor: "transparent",
  },
  imagem: {
    height: 300,
    objectFit: "cover",
    borderRadius: 40,
  },
  selo:{
    backgroundColor: '#2d3748',
    color: 'white',
    borderRadius: 20,
    padding: 5
  }
});
