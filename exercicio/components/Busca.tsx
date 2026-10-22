import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'

// 1. Definição da interface para o tipo de dado que a API retorna
interface Usuario {
  id: number
  name: string
  email: string
}

const BuscaUsuarios = () => {
  // 2. Definindo o estado com o tipo genérico Array de Usuario <Usuario[]>
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [termo, setTermo] = useState<string>('')

  useEffect(() => {
    fetch('https://typicode.com')
      .then((resposta) => resposta.json())
      .then((dados: Usuario[]) => setUsuarios(dados))
      .catch((erro) => console.log(erro))
  }, [])

  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.name.toLowerCase().includes(termo.toLowerCase())
  )

  return (
    <View style={styles.container}>
      <TextInput
        value={termo}
        onChangeText={setTermo}
        placeholder="Busque um usuário por nome..."
        style={styles.input}
      />

      <FlatList
        data={usuariosFiltrados}
        keyExtractor={(item) => item.id.toString()}
        // 3. O TypeScript infere automaticamente que 'item' é do tipo Usuario
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, backgroundColor: '#fff' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, marginBottom: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
  nome: { fontSize: 16, fontWeight: 'bold' },
  email: { fontSize: 14, color: '#666' }
})

export default BuscaUsuarios
