import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    filter: "assignment",

}

const FilterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {

        radioResult: (state, action) => {
            state = action.payload
            console.log(state)
            return state
        }
    },
})

export const { radioResult } = FilterSlice.actions
export default FilterSlice.reducer