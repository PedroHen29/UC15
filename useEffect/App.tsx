import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ListaProdutos from "./components/ListaProdutos";
import Busca from "./components/Busca";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ListaProdutos /> */}
      <ListaProdutos/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
