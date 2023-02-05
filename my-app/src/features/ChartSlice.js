import { createSlice, current } from "@reduxjs/toolkit";


let isSorted = false

const initialState = {

    horizontalArray: [],
    verticalArrayDifficulty: [],
    verticalArrayFun: [],
    sortParam: "",
    sortDirection: "asc"
}

const ChartSlice = createSlice({
    name: "chart",
    initialState,
    reducers: {

        chartData: (state, action) => {

            state.horizontalArray = action.payload.horizontal
            state.verticalArrayDifficulty = action.payload.verticalD
            state.verticalArrayFun = action.payload.verticalF
            //set state from mainPage.js

            return state

        },

        sortChart: (state, action) => {

            let sortBy = action.payload

            if (sortBy !== state.sortParam) {
                isSorted = false
            } else if (action.payload === "") {
                return state
            }
            state.sortParam = sortBy
            //prevent the array from being sorted in reverse order first

            const sortArray = state.horizontalArray.map((item, i) => {

                return {
                    difficulty: state.verticalArrayDifficulty[i],
                    fun: state.verticalArrayFun[i],
                    category: item
                }
            })//split the arrays into objects

            const sortedArray = isSorted ?
                sortArray.reverse() :
                sortArray.sort((a, b) => (a[sortBy] < b[sortBy]) ? -1 : 1)
            isSorted = !isSorted

            //sort the array by the value of the action.payload

            const [newArrayFun, newArrayDifficulty, newArrayCategory] = sortedArray.reduce((acc, cur) => {
                acc[0].push(cur.fun);
                acc[1].push(cur.difficulty);
                acc[2].push(cur.category);
                return acc;
            }, [[], [], []]) //split the sorted array back into 3 arrays

            state.horizontalArray = newArrayCategory
            state.verticalArrayDifficulty = newArrayDifficulty
            state.verticalArrayFun = newArrayFun
            //set the state to the new sorted arrays

            return state

        },
    }
})

export const { chartData, sortChart } = ChartSlice.actions
export default ChartSlice.reducer
