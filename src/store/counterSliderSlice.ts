import { createSlice } from '@reduxjs/toolkit'

type SliderState = {
    indexPicture: number
}

const initialState: SliderState = {
    indexPicture: 0
}

const countSliderSlice = createSlice({
    name: 'countSlider',
    initialState,
    reducers: {
        nextPicture(state, action) {
            const { indexPicture } = state

            state.indexPicture = action.payload - 1 === indexPicture ? 0 : indexPicture + 1
        },
        previousPicture(state, action) {
            const { indexPicture } = state

            state.indexPicture = indexPicture === 0 ? action.payload - 1 : indexPicture - 1
        }
    }
})

export const { nextPicture, previousPicture } = countSliderSlice.actions

export default countSliderSlice.reducer
