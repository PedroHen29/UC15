import { View, StyleSheet } from 'react-native'
import EscolherFoto from './components/EscolherFoto'
import CameraCustom from './components/CameraCustom'

export default function App() {
  return (
    <View style={styles.container}>
      <EscolherFoto />
      <CameraCustom/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
})