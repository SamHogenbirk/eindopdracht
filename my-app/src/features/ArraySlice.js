import { createSlice } from "@reduxjs/toolkit";
import studentData from "../app/studentData";

const initialState = {
    assignment: [...new Set(studentData.map(item => item.assignment))],
    studentName: [...new Set(studentData.map(item => item.studentName))],
}

const ArraySlice = createSlice({
    name: "array",
    initialState,
    reducers: {

        uniqueArray: (state, action) => {

            console.log(action.payload)
        },

    }
})

export const { uniqueArray } = ArraySlice.actions
export default ArraySlice.reducer