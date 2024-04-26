import { StatusBar } from 'expo-status-bar'
import { StyleSheet, useColorScheme } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/header'
import Footer from '../components/footer'
import WelcomeScreen from '../components/welcome-screen'
import SubscribeScreen from '../components/subscribe-screen'

const Stack = createNativeStackNavigator()

export default function RootNavigator() {
  const colorScheme = useColorScheme()

  return (
    <>
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
    </>
  )
}
