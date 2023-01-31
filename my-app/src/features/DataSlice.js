import { createSlice, current } from "@reduxjs/toolkit";
import studentData from "../app/studentData";

// addStudent: (state, action) => { initialState.studentData.push(action.payload) },
// removeStudent: (state, action) => { initialState.studentData = initialState.studentData.filter((student) => student.id !== action.payload.id) },

let isSorted = false

const DataSlice = createSlice({
    name: "data",
    initialState: { studentData },

    reducers: {

        // sortList: (state, action) => {

        //     studentData > state ? state = state : state = [...studentData]

        //     const res = state.studentData.map(_ => _)
        //     const sortedList = isSorted ?
        //         res.reverse() :
        //         res.sort((a, b) => (a[action.payload] < b[action.payload] ? -1 : 1), 0)
        //     isSorted = !isSorted
        //     console.log(sortedList)
        //     return { studentData: sortedList }

        // },

        filterStudent: (state, action) => {

            state = [...studentData]
            const name = action.payload
            console.log(name)
            // console.log(current(state.studentData))
            return { studentData: state.filter((student) => !name.includes(student.studentName)) }

        },

    }
})

export const { addStudent, removeStudent, filterStudent, sortList } = DataSlice.actions
export default DataSlice.reducer
