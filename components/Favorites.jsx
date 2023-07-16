import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

const data = [
    {
        id: '123',
        icon: 'home',
        location: 'Home',
        destination: 'Montevideo'
    },
    {
        id: '456',
        icon: 'briefcase',
        location: 'Work',
        destination: 'Montevideo'
    },
]

const Favorites = () => {
  return (
    <View>

    <FlatList
        data={data}
        ItemSeparatorComponent={()=> (
            <View style={tw`bg-blue-100 h-0.5`}/>
        )}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => (
            <TouchableOpacity style={tw`flex-row items-center p-5`}>
                <Icon
                    style={tw`mr-4  rounded-full bg-gray-300 p-3`}
                    name={item.icon}
                    type='ionicon'
                    color={'black'}
                    size={18}
                />
                <View>
                    <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
                    <Text style={tw`text-gray-500`}>{item.destination}</Text>
                </View>
            </TouchableOpacity>
        )}
    />

    </View>
  )
}

export default Favorites

const styles = StyleSheet.create({})