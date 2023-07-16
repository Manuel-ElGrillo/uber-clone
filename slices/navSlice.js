//Slice for navigation from point A (origin) to point B (destination)

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInfromation: null,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: ( state, action ) => {
            state.origin = action.payload
        },
        setDestination: ( state, action ) => {
            state.destination = action.payload
        },
        setTravelTimeInformation: ( state, action ) => {
            state.travelTimeInfromation = action.payload
        }
    }
})

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions

//Selectors
export const selectOrigin = ( state ) => state.nav.origin
export const selectDestination = ( state ) => state.nav.destination
export const selectTravelTimeInformation = ( state ) => state.nav.travelTimeInfromation

export default navSlice.reducer