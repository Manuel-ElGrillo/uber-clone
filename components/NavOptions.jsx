import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'

//Raw data to show something lol
const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen',
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatScreen',
    },
]

const NavOptions = () => {

    const navigation = useNavigation()
    const origin = useSelector(selectOrigin)

  return (
    <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        horizontal //Horizontal view
        renderItem={ ({item}) => (
            <TouchableOpacity
                disabled={!origin} //Disabling options if there is no origin - Look at line 40
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 rounded-lg`}
                onPress={() => navigation.navigate(item.screen)}>
                <View style={tw`${!origin ? 'opacity-20' : 'opacity-100'}`}>
                    <Image 
                        source={{uri: item.image}}
                        style={{width: 120, height: 120, resizeMode: 'contain'}}
                        // resizeMode == aspect-ratio
                    /> 
                    <Text style={tw`mt-2 text-lg font-semibold`}>
                        {item.title}
                    </Text>
                    <Icon 
                        type='antdesign'
                        name='arrowright'
                        color={'white'}
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}/>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})