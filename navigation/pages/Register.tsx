import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Register = ({navigation}:any) => {
  return (
    <View style={styles.container}>
    <Text>Home</Text>
    <Button 
      
      title="Ir para Profile"
      onPress={() => navigation.navigate('Profile')}
    />

    <Button  title='Ir para Homr' onPress={() => navigation.navigate('Home')}/>

    <Button title='Voltar' onPress={() => navigation.goBack()}/>
  </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap:10 },
  })