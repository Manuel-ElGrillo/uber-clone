import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames' //Check package.json dependencies to see how to install Tailwind :D
import NavOptions from '../components/NavOptions'
import Favorites from '../components/Favorites'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { API_KEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice' // The actions :D
import grillo from '../assets/grillo.png'

const HomeScreen = () => {

    const dispatch = useDispatch()

    return (
        <SafeAreaView style={[styles.mainContainer, tw`bg-white`]}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain'
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
                />

                <Image 
                    style={{
                        width:50,
                        height: 50,
                        top: -75,
                        left: 50,
                        resizeMode: 'contain'
                    }}
                    source={grillo}
                />

                <GooglePlacesAutocomplete 
                    nearbyPlacesAPI='GooglePlacesSearch' //which API to use for current location
                    debounce={200} //delay time
                    placeholder='Begin your journey or order some food'
                    enablePoweredByContainer={false} //Disable the 'powered by Google ad'
                    query={{
                        key: API_KEY,
                        language: 'en',
                      }}
                    styles={{
                        container: {
                            flex: 0
                        },
                        textInput: {
                            borderWidth: 1,
                            borderColor: 'gray'
                        }
                    }}
                    onPress={ ( data, details = null) => {
                        // console.log(data)
                        // console.log(details)
                        dispatch(setOrigin({ // Redux actions 👀
                            location: details.geometry.location,
                            description: data.description
                        }))
                        dispatch(setDestination(null))

                    }}
                    fetchDetails={true}
                    returnKeyType={'search'}
                />

                <NavOptions />

                <Favorites />

            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop:StatusBar.currentHeight
    }
})