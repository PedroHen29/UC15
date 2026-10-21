import { StatusBar } from "expo-status-bar";
import {ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "./components/Card";
import Botao from "./components/Botao";
import Cards from "./components/Cards";
import CardProduto from "./components/CardProduto";
import Produtos from "./components/Produtos";
import ListaProdutos from "./components/ListaProduto";
import { Busca } from "./components/Busca";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  return (
    
     <SafeAreaProvider>
     <SafeAreaView style={styles.container}>
       {/* <Cards/> */}
      {/* <Produtos/>  */}
      {/* <ListaProdutos/> */}
      <Busca/>
     </SafeAreaView>
   </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },

  
});
