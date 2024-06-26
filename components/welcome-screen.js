import { Image, StyleSheet, Text, View } from 'react-native'
import Button from './button'
import logo from '../assets/little-lemon-logo.png'

export default function WelcomeScreen({ navigation, colorScheme }) {
  return (
    <View
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#FAFFDB' }
          : { backgroundColor: '#333' }
      ]}
    >
      <Image
        source={logo}
        style={styles.logo}
        accessible={true}
        accessibilityLabel='The Little Lemon Main cover'
      />
      <Text
        style={[
          styles.intro,
          colorScheme === 'light'
            ? { color: '#333' }
            : { color: '#FAFFDB' }
        ]}
      >
        The Little Lemon - your local Mediterranean cafe ❤️‍🔥
      </Text>
      <Button
        onPress={() => navigation.navigate('Subscribe')}
        colorScheme={colorScheme}
      >
        Newsletter
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 30
  },
  logo: {
    width: 90,
    height: 159,
    resizeMode: 'contain'
  },
  intro: {
    fontSize: 22,
    textAlign: 'center'
  }
})
