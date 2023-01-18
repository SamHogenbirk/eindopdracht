import { createSlice } from "@reduxjs/toolkit";
import StudentData from "../app/StudentData";

const initialState = { StudentData }

const DataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {}
})



export const { addStudent, removeStudent } = DataSlice.actions
export default DataSlice.reducer
