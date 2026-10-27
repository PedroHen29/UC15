import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Loggin from './pages/Loggin'
import Profile from './pages/Profile'
import Register from './pages/Register'

// Cria o objeto da navegação
const Stack = createNativeStackNavigator()
export default function App() {
  return (
  // Componente que envolve os outros 
    <NavigationContainer>
      {/** componente que indica que vamos trabalhar com navegação por pilha/stack */}
      {/** initialRouteName indica qual é a tela que vai aparecer primeiro */}
      <Stack.Navigator initialRouteName="Loggin">
        {/** Dentro de Stack.Navigator ficam as Stack.Screen */}
        {/** Elas representam cada tela de navegação */}
        {/** Cada uma tem um nome e qual pagina ela representa */}
        <Stack.Screen name="Loggin" component={Loggin} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name='Register' component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}