import React from 'react'
import { StyleSheet, Text, View} from 'react-native'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start aaaaaaaaaa on your app!</Text>
        <Text>Changes you make will bybis reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
