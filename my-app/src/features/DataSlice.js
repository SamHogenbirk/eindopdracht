import { createSlice, current } from "@reduxjs/toolkit";
import studentData from "../app/studentData";
import mockData from "../app/mockData";

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

            return state

        },

        addMockData: (state, action) => {

            if (state.combinedStudent.length === 0) {

                state.studentName.map((item, i) => {

                    const mockItem = mockData[i]
                    const newItem = {
                        id: mockItem.id,
                        firstName: item,
                        lastName: mockItem.last_name,
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
            // //remove duplicates due strictmode

        },
    }
})

export const { filterStudent, sortList, addMockData } = DataSlice.actions
export default DataSlice.reducer
