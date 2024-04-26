import { StyleSheet, Text, View } from 'react-native'

export default function Footer({ colorScheme }) {
  return (
    <View
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#E5F0A7' }
          : { backgroundColor: '#222' }
      ]}
    >
      <Text
        style={[
          styles.title,
          colorScheme === 'light'
            ? { color: '#333' }
            : { color: '#E5F0A7' }
        ]}
      >
        Made with care
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 16
  }
})
