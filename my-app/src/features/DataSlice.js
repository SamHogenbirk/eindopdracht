import { createSlice, current } from "@reduxjs/toolkit";
import studentData from "../app/studentData";

// addStudent: (state, action) => { initialState.studentData.push(action.payload) },
// removeStudent: (state, action) => { initialState.studentData = initialState.studentData.filter((student) => student.id !== action.payload.id) },

let isSorted = false

const initialState = {
    all: studentData,
    ar: [],
    assignment: [...new Set(studentData.map(item => item.assignment))],
    studentName: [...new Set(studentData.map(item => item.studentName))],
   
}

const DataSlice = createSlice({
    name: "data",
    initialState,

    reducers: {

        // sortList: (state, action) => {

        //     console.log(action.payload)
        //     const res = state.all.map(item => item)
        //     console.log(isSorted)
        //     // if (isSorted) {
        //     //     res.reverse()
        //     // }
        //     // const sortedList = res.sort((a, b) => (a[action.payload] < b[action.payload] ? -1 : 1), 0)
        //     const sortedList = isSorted ? res.reverse() : res.sort((a, b) => (a[action.payload] < b[action.payload] ? -1 : 1), 0)

        //     isSorted = !isSorted
        //     state.all = sortedList

        //     return state
        // },

        filterStudent: (state, action) => {

            state.all = [...studentData]
            const name = action.payload
            state.all = state.all.filter((student) => !name.includes(student.studentName))
            // console.log(current(state))

            return state

        },

        uniqueArray: (state, action) => {

            // state.ar = []
            // const unique = [...new Set(studentData.map(item => item[action.payload]))]
            // state.ar.push(unique)

            // return state

        }

    }
})

export const { filterStudent, sortList, uniqueArray } = DataSlice.actions
export default DataSlice.reducer
