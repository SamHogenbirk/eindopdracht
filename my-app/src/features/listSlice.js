import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [], }

const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {}
})



export const { addStudent, removeStudent } = listSlice.actions
export default listSlice.reducer
