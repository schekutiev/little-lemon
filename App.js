import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'
import Header from './components/header'
import Footer from './components/footer'
import WelcomeScreen from './components/welcome-screen'
import SubscribeScreen from './components/subscribe-screen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App() {
  const colorScheme = useColorScheme()
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Header colorScheme={colorScheme} />
      <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#D1AF0F' }
        }}
      >
        <Stack.Screen name='Welcome'>
          {props => (
            <WelcomeScreen colorScheme={colorScheme} {...props} />
          )}
        </Stack.Screen>
        <Stack.Screen name='Subscribe'>
          {props => (
            <SubscribeScreen colorScheme={colorScheme} {...props} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
      <Footer colorScheme={colorScheme} />
    </NavigationContainer>
  )
}
