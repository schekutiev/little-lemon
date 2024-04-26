import { useState } from 'react'
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput
} from 'react-native'
import Button from './button'
import logoGray from '../assets/little-lemon-logo-grey.png'
import validateEmail from '../utils/index'

export default function SubscribeScreen({ colorScheme }) {
  const [email, setEmail] = useState('')
  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#FAFFDB' }
          : { backgroundColor: '#333' }
      ]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        keyboardDismissMode='on-drag'
        contentContainerStyle={styles.container}
      >
        <Image
          source={logoGray}
          style={styles.logo}
          accessible={true}
          accessibilityLabel='The Little Lemon logo'
        />
        <Text
          style={[
            styles.title,
            colorScheme === 'light'
              ? { color: '#333' }
              : { color: '#FAFFDB' }
          ]}
        >
          Subscribe to out newsletter for our latest delicious recipes!
        </Text>
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
          keyboardType='email-address'
          clearButtonMode='always'
          placeholder='Type your email'
          placeholderTextColor='#333'
        />
        <Button
          onPress={() =>
            Alert.alert('Thank you for subscribing, stay tuned!')
          }
          disabled={!validateEmail(email)}
          colorScheme={colorScheme}
        >
          Sign In
        </Button>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  logo: {
    width: 100,
    height: 117,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 18,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    alignSelf: 'stretch',
    borderColor: 'black',
    borderRadius: 6,
    backgroundColor: 'white',
    fontSize: 18,
    padding: 5,
    marginTop: 5,
    marginBottom: 5
  }
})
