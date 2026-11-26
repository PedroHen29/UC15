import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const EscolherFoto = () => {
  const [foto, setFoto] = useState<string | null>(null);

  const escolherDaGaleria = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });
    if (!resultado.canceled) {
      setFoto(resultado.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header}>
        {foto && <Image source={{ uri: foto }} style={styles.preview}></Image>}
        <Text style={styles.texto}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={escolherDaGaleria}>
        <Text style={styles.botaoTexto}>Escolher da galeria</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EscolherFoto;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    flexDirection: "column",
    padding: 8,
  },
  botao: { backgroundColor: "#078EFA", padding: 12, borderRadius: 10 },
  botaoTexto: { fontWeight: "500", color: "white" },
  preview: { width: 100, height: 100, borderRadius: 100 },
  texto: {
    fontWeight: "600",
    fontSize: 20,
    alignSelf: "flex-start",
    paddingBottom: 0,
  },
  header: { backgroundColor: "gray", width: "100%", flexDirection: "row" },
});
