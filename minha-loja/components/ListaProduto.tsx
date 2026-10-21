import { FlatList, View, StyleSheet, ViewComponent } from 'react-native'
import Card from './Card';
import { produtos } from '../data/produtos';


const ListaProdutos = () => {
  return (
      <FlatList
      data={produtos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View >
          <Card titulo={item.titulo} img={item.imagem} preco={item.preco}/>
        </View>
      )}
    />
    
  )
}

export default ListaProdutos

const styles = StyleSheet.create({
  linha: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  titulo: { fontWeight: 'bold' },

  container: {
    backgroundColor: 'white',
    width: '100%',
    gap: 2
  }
})