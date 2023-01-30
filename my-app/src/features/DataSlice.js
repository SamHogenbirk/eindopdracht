import { createSlice, current } from "@reduxjs/toolkit";
import studentData from "../app/studentData";


const DataSlice = createSlice({
    name: "data",
    initialState: { studentData },


    reducers: {

        // addStudent: (state, action) => { initialState.studentData.push(action.payload) },
        // removeStudent: (state, action) => { initialState.studentData = initialState.studentData.filter((student) => student.id !== action.payload.id) },

        filterStudent: (state, action) => {
            
            state = studentData
            const name = action.payload
            console.log(name)
            // console.log(current(state.studentData))
            return { studentData: state.filter((student) => !name.includes(student.studentName)) }

        },

    }
})

export const { addStudent, removeStudent, filterStudent } = DataSlice.actions
export default DataSlice.reducer
