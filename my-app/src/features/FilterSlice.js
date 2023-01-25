import { createSlice } from "@reduxjs/toolkit";
import studentsData from "../app/StudentData";
import StudentData from "../app/StudentData";


const initialState = { StudentData }

const FilterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {

        uniqueArray: (state, action) =>  [...new Set(studentsData.map(item => item[action.payload]))]     

    }
})

export const { uniqueArray } = FilterSlice.actions
export default FilterSlice.reducer