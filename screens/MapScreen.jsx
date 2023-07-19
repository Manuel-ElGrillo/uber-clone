import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import NavigateCard from '../components/NavigateCard'
import CarOptionsCard from '../components/CarOptionsCard'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const MapScreen = () => {

  const Stack = createNativeStackNavigator()
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.mainMapContainer}>

      <TouchableOpacity
        style={tw`absolute z-50 bg-gray-100 top-8 left-5 p-3 rounded-full shadow-lg`}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Icon 
          name='home'/>
      </TouchableOpacity>

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