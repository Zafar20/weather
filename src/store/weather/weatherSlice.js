import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
    apiKey: import.meta.env.VITE_OPENWEATHER_API_KEY,
    data: null
}

export const getCordinates = createAsyncThunk('weatherSlice/getCordinates', async(city, {dispatch}) => {
    let { data } = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${initialState.apiKey}`)
    dispatch(getWeather(data[0]))
})

export const getWeather = createAsyncThunk('weatherSlice/getWeather', async(info) => {
    let { lat, lon } = info
    let { data } = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${initialState.apiKey}&lang=ru&units=metric`)
    return data    
})



const weatherSlice = createSlice({
    name: 'weatherSlice',
    initialState, 
    reducers: {
        
    },
    extraReducers: (builder) =>  {
        builder.addCase(getWeather.fulfilled, (state,action) => {
            state.data = action.payload
        })
    }
})

export default weatherSlice.reducer