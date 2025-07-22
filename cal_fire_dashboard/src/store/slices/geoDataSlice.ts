import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface GeoData {
    zipcode:number|null;
    city:string|null;
    county:string|null;
}

const initialState: GeoData = {
    zipcode:null,
    city:null,
    county:null
}

export const geoDataSlice = createSlice({
    name:'goeData',
    initialState,
    reducers:{
        updateZip: (state, action: PayloadAction<number>) => {
            state.zipcode = action.payload
        },
        updateCity : (state, action: PayloadAction<string>) =>{
            state.city = action.payload
        },
        updateCounty : (state, action: PayloadAction<string>) =>{
            state.county = action.payload
        }
    }
})

export const {updateZip, updateCity, updateCounty } = geoDataSlice.actions;

export default geoDataSlice.reducer;