import { createSlice } from "@reduxjs/toolkit";
import studentData from "../app/studentData";


const initialState = { studentData }


const DataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {

        addStudent: (state, action) => { initialState.studentData.push(action.payload) },
        removeStudent: (state, action) => { initialState.studentData = initialState.studentData.filter((student) => student.id !== action.payload.id) },


    }
})

export const { addStudent, removeStudent } = DataSlice.actions
export default DataSlice.reducer
