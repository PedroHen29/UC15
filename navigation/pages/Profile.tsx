import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

const Profile = ({navigation}:any) => {
  return (
    <View style={styles.container}>
        <Text>Profile</Text>
        <Button
          title="Ir para Home"
          onPress={() => navigation.navigate('Home')}
        />

        <Button title='Ir para Register' onPress={() => navigation.navigate('Register')}/>
        <Button title='Voltar' onPress={() => navigation.goBack()}/>
      </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap:10 },
  })