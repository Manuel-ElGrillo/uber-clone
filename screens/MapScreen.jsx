import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import NavigateCard from '../components/NavigateCard'
import CarOptionsCard from '../components/CarOptionsCard'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const MapScreen = () => {

  const Stack = createNativeStackNavigator()

  return (
    <SafeAreaView style={styles.mainMapContainer}>
      <View>
        <View style={tw`h-1/2`}>
            <Map />
        </View>

        <View style={tw`h-1/2`}>
          <Stack.Navigator>
            <Stack.Screen 
              name='NavigateCard'
              component={NavigateCard}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen 
              name='CarOptionsCard'
              component={CarOptionsCard}
              options={{
                headerShown: false
              }}
            />
          </Stack.Navigator>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  mainMapContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
})