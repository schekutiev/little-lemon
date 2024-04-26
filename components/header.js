import { StyleSheet, View, Image, Text } from 'react-native'
import logoGray from '../assets/little-lemon-logo-grey.png'

export default function Header({ colorScheme }) {
  return (
    <View
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#E5F0A7' }
          : { backgroundColor: '#222' }
      ]}
    >
      <View style={styles.flexRow}>
        <Text
          style={[
            styles.title,
            colorScheme === 'light'
              ? { color: '#333' }
              : { color: '#E5F0A7' }
          ]}
        >
          The Little Lemon
        </Text>
        <Image
          source={logoGray}
          style={styles.logo}
          accessible={true}
          accessibilityLabel='The Little Lemon logo'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 19,
    paddingBottom: 5
  },
  logo: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginLeft: 5
  },
  flexRow: { flexDirection: 'row', alignItems: 'center' }
})
