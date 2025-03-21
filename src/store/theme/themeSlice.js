import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    theme: 'light'
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState, 
    reducers: {
        toggleTheme(state) {
            let current = state.theme == 'light' ? 'dark' : 'light'
            state.theme = current
            localStorage.setItem('theme', current)
        },
        initTheme(state) {
            let value = localStorage.getItem('theme')
            if(value) {
                state.theme = value
            }
        }
    }
})

export const { toggleTheme, initTheme } = themeSlice.actions

export default themeSlice.reducer