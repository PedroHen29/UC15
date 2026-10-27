import { View, Text, Button, StyleSheet   } from 'react-native'
import React from 'react'

export default function Home({ navigation }: any) {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button 
          
          title="Ir para Profile"
          onPress={() => navigation.navigate('Profile')}
        />

        <Button  title='Ir para Register' onPress={() => navigation.navigate('Register')}/>
        <Button title='Voltar' onPress={() => navigation.goBack()}/>
      </View>
    )
  }



const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 },
  })