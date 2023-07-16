import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin } from '../slices/navSlice'
import MapViewDirections from 'react-native-maps-directions'
import { API_KEY } from '@env'

const Map = () => {

    //Getting the selector origin (Point A) from store (redux) :3
    const origin = useSelector(selectOrigin)
    //Getting the selector destination (Point B)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null)

    //Making a zoom out from Point A to Point B
    useEffect( () => {

        if( !origin || !destination ) return

        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], { // A MapView Component function lol
            edgePadding: {
                top: 50,
                right: 50,
                bottom: 50,
                left: 50
            }
        }) 

    }, [origin, destination])

    return (
        <MapView
            ref={mapRef}
            style={tw`flex-1`}
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005, //Dont know TF is this
                longitudeDelta: 0.005,
            }}
        >

            {
                origin && destination && (
                    <MapViewDirections
                        origin={origin.description}
                        destination={destination.description}
                        apikey={API_KEY} 
                        strokeWidth={3}
                        strokeColor='red'
                    />
                )
            }

            {/* Origin marker */}
            {
                origin?.location && (
                    <Marker 
                        coordinate={{
                            latitude: origin.location.lat,
                            longitude: origin.location.lng
                        }}
                        title= 'Origin'
                        description={origin.description}
                        identifier='origin'
                    />
                )
            }

            {/* Destination Marker */}
            {
                destination?.location && (
                    <Marker 
                        coordinate={{
                            latitude: destination.location.lat,
                            longitude: destination.location.lng
                        }}
                        title= 'Destination'
                        description={destination.description}
                        identifier='destination'
                    />
                )
            }

        </MapView>
    )
}

export default Map

const styles = StyleSheet.create({})