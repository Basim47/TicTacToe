import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Main from './src/screens/main/main'
import VsComp from './src/screens/PvP/VsComp'
import Route from './src/routes/Route'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Route />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})