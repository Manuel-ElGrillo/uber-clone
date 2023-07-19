import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { API_KEY } from '@env'
import { setDestination } from '../slices/navSlice'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import Favorites from '../components/Favorites'
import { Icon } from 'react-native-elements'

const NavigateCard = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.navigateContainer}>

            <Text style={tw`text-center py-5 text-xl`}>Hello Random User</Text>

            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>

                    <GooglePlacesAutocomplete
                        nearbyPlacesAPI='GooglePlacesSearch' 
                        debounce={200} 
                        placeholder='Destination'
                        enablePoweredByContainer={false}
                        query={{
                            key: API_KEY,
                            language: 'en',
                        }}
                        styles={{
                            container: {
                                flex: 0,
                                paddingTop: 20
                            },
                            textInput: {
                                borderWidth: 1,
                                borderColor: 'gray'
                            },
                            textInputContainer: {
                                paddingHorizontal: 20
                            }
                        }}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }))

                            navigation.navigate('CarOptionsCard')

                        }}
                        fetchDetails={true}
                        returnKeyType={'search'}
                    />

                </View>

                <Favorites />

            </View>

            <View style={tw`flex-row justify-evenly bg-white py-2 border-t border-blue-100`}>

                <TouchableOpacity 
                    style={tw`flex flex-row justify-between bg-gray-300 w-24 px-4 py-3 rounded-full`}
                    onPress={() => navigation.navigate('CarOptionsCard')}>
                        <Icon
                            name='car'
                            type='font-awesome'
                            color={'black'}
                            size={16}/>
                        <Text style={tw`text-black text-center`}>Rides</Text>
                </TouchableOpacity>

                <TouchableOpacity style={tw`flex flex-row justify-between bg-gray-300 w-24 px-4 py-3 rounded-full`}>
                        <Icon
                            name='fast-food-outline'
                            type='ionicon'
                            color={'black'}
                            size={16}/>
                        <Text style={tw`text-black text-center`}>Eats</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({
    navigateContainer: {
        backgroundColor: "white",
        flex: 1
    }
})