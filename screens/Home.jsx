import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames' //Check package.json dependencies to see how to install Tailwind :D
import NavOptions from '../components/NavOptions'

const Home = () => {
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
                    }} />

                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop:StatusBar.currentHeight
    }
})