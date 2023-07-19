import { View, Text, SafeAreaView, TouchableOpacity, FlatList,Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'

const CarOptionsCard = () => {

  const navigation = useNavigation()
  const [carSelected, setCarSelected] = useState(null)
  const travelTimeInformation = useSelector(selectTravelTimeInformation) //getting the travel time info

  const carOptions = [
    {
      id: 'CO-123-A',
      title: 'Basic',
      multiplier: 1, //Cost for the ride
      image: 'https://links.papareact.com/3pn'
    },
    {
      id: 'CO-456-B',
      title: 'Lux',
      multiplier: 1.2, //Cost for the ride
      image: 'https://links.papareact.com/5w8'
    },
    {
      id: 'CO-789-C',
      title: 'Premium',
      multiplier: 1.75, //Cost for the ride 
      image: 'https://links.papareact.com/7pf'
    }
  ]

  //Ficticious charge
  const CHARGE = 1.5

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>

      <View style={tw`border-b`}>

        <TouchableOpacity 
          style={tw`absolute top-1 left-5 z-50 p-3 rounded-full`}
          onPress={() => navigation.navigate('NavigateCard')}>
            <Icon 
              name='chevron-left'
              type='font-awesome'/>
        </TouchableOpacity>

        <Text style={tw`text-center text-xl py-3`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>

      </View>

      <FlatList
        style={tw`border-b`}
        data={carOptions}
        ItemSeparatorComponent={()=> (
          <View style={tw`bg-blue-100 h-0.5`}/>
        )}
        keyExtractor={item => item.id}
        renderItem={ ({item}) => (
          <TouchableOpacity 
            onPress={() => setCarSelected(item)}
            style={tw`flex-row items-center justify-between px-5 ${item.id === carSelected?.id && 'bg-blue-100'}`} 
          >
            <Image
              style={{width: 100, height: 100, resizeMode: 'contain'}}
              source={{uri: item.image}}
            />
            <View>
              <Text style={tw`font-semibold text-xl`}>Choose {item.title}</Text>
              <Text>Travel time:</Text>
              <Text>{travelTimeInformation?.duration?.text}</Text>
            </View>
            <Text style={tw`text-xl`}>
              { //Using JS API and setting the price
                new Intl.NumberFormat('es-UY', {
                  style: 'currency',
                  currency: 'UYU',
                }).format(
                  (travelTimeInformation?.duration.value * CHARGE * item.multiplier ) / 100
                )
              }
            </Text>
          </TouchableOpacity>
        ) }
      />

      {/* <View>
        <TouchableOpacity style={tw`bg-black`}>
          <Text style={tw`text-center text-white text-xl`}>Choose {carSelected?.title}</Text>
        </TouchableOpacity>
      </View> */}


    </SafeAreaView>
  )
}

export default CarOptionsCard