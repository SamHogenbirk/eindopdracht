import { createSlice } from "@reduxjs/toolkit";
import StudentData from "../app/studentData";


const initialState = { StudentData }

const DataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {

        addStudent: (state, action) => { },
        removeStudent: (state, action) => { },
    }
})

export const { addStudent, removeStudent } = DataSlice.actions
export default DataSlice.reducer
