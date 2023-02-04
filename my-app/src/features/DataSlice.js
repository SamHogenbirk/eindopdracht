import { createSlice, current } from "@reduxjs/toolkit";
import studentData from "../app/studentData";
import mockData from "../app/mockData";

// addStudent: (state, action) => { initialState.studentData.push(action.payload) },
// removeStudent: (state, action) => { initialState.studentData = initialState.studentData.filter((student) => student.id !== action.payload.id) },

const initialState = {
    all: studentData,
    ar: [],
    assignment: [...new Set(studentData.map(item => item.assignment))],
    studentName: [...new Set(studentData.map(item => item.studentName))],
    combinedStudent: []

}

const DataSlice = createSlice({
    name: "data",
    initialState,

    reducers: {

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

        },

        addMockData: (state, action) => {

            if (state.combinedStudent.length === 0) {

                state.studentName.map((item, i) => {

                    const mockItem = mockData[i]
                    const newItem = {
                        id: mockItem.id,
                        firstName: item,
                        lastname: mockItem.last_name,
                        age: mockItem.age,
                        email: mockItem.email,
                        gender: mockItem.gender,
                        photo: mockItem.photo,
                    }

                    state.combinedStudent.push(newItem)

                })

                return state
            } else {

                return state
            }

            // state.combinedStudent =
            //     [...new Map(state.combinedStudent.map(item => [item.id, item])).values()]
            // //remove duplicates

        },
    }
})

export const { filterStudent, sortList, uniqueArray, addMockData } = DataSlice.actions
export default DataSlice.reducer
