import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Loggin = ({navigation}: any) => {
  return (
    <View style={styles.container}>
    
    <Text style={styles.texto}>Loggin</Text>

    <TextInput  style={styles.input} placeholder='Nome...'/>
    <TextInput style={styles.input} placeholder='Email...'/>

    <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Profile')}>Loggin</TouchableOpacity>

    
  </View>
  )
}

export default Loggin

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center', gap: 5 },

  input: {borderColor: 'black', borderWidth: 1.5, borderRadius: 4},
  texto: {fontFamily: 'Arial', fontSize: 20, fontWeight: 'bold'},
  botao: {
    padding: 8,
    width: 165,
    backgroundColor: "#1e40af",
    borderRadius: 8,
    color: "white",
    fontFamily: 'Arial',
    textAlign: 'center',
  },
})