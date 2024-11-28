import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './src/navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import store from './src/store'

const App = () => {
  return (
    <SafeAreaProvider style={{flex:1}}>
      <Provider store={store}>
      <Navigation/>
      </Provider>
      </SafeAreaProvider>
  )
}

export default App