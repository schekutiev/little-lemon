import { StyleSheet, View, Pressable, Text } from 'react-native'

export default function Button({
  onPress,
  disabled,
  colorScheme,
  children
}) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.button,
          colorScheme && disabled
            ? { borderColor: '#555', backgroundColor: '#777' }
            : colorScheme === 'light' && !disabled
            ? { borderColor: '#004200', backgroundColor: '#007300' }
            : { borderColor: '#002200', backgroundColor: '#6C8300' }
        ]}
      >
        <Text style={styles.label}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 42,
    paddingVertical: 5
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontSize: 16,
    color: 'white'
  }
})
