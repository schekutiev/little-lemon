import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './navigators/root-navigator'

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}
