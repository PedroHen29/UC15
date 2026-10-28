import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Undo2 } from "lucide-react";

const Loggin = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Register</Text>
      <TouchableOpacity
        style={styles.btnVoltar}
        onPress={() => navigation.goBack()}
      >
        <Undo2 color="black" />
      </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Nome..." />
        <TextInput style={styles.input} placeholder="Email..." />
        <TextInput
          style={styles.input}
          placeholder="Senha..."
          secureTextEntry={true}
        ></TextInput>

        <TouchableOpacity
          style={styles.botaoEntar}
          onPress={() => navigation.navigate("Profile")}
        >
          Entrar
        </TouchableOpacity>
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

  input: {
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 8,
    width: 200,
    fontWeight: "500",
    height: 30,
  },
  texto: { fontFamily: "Arial", fontSize: 20, fontWeight: "bold" },
  botaoEntar: {
    padding: 8,
    width: 200,
    backgroundColor: "#1e40af",
    borderRadius: 8,
    color: "white",
    fontFamily: "Arial",
    textAlign: "center",
  },
  botaoCriar: {
    padding: 8,
    width: 200,
    backgroundColor: "#1E9F55",
    borderRadius: 8,
    color: "white",
    fontFamily: "Arial",
    textAlign: "center",
  },
  btnVoltar: {
    marginRight: "auto",
  },
});
