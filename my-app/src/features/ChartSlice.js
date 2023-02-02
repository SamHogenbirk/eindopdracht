import { createSlice, current } from "@reduxjs/toolkit";

let isSorted = false

const initialState = {
    title: "",
    horizontalArray: [],
    verticalArrayDifficulty: [],
    verticalArrayFun: [],
    isSorted: isSorted

}



const ChartSlice = createSlice({
    name: "chart",
    initialState,
    reducers: {

        chartData: (state, action) => {

            state.title = action.payload.title
            state.horizontalArray = action.payload.horizontal
            state.verticalArrayDifficulty = action.payload.verticalD
            state.verticalArrayFun = action.payload.verticalF

            return state

        },

        sortChart: (state, action) => {

            const sortBy = action.payload
            console.log(sortBy)

            const res = { ...state }

            const sortArray = state.horizontalArray.map((item, i) => {

                return {
                    difficulty: state.verticalArrayDifficulty[i],
                    fun: state.verticalArrayFun[i],
                    category: item
                };
            });

            const sortedArray = isSorted ?
                sortArray.reverse() :
                sortArray.sort((a, b) => (a[action.payload] < b[action.payload]) ? -1 : 1)

            isSorted = !isSorted

            const [newArrayFun, newArrayDifficulty, newArrayCategory] = sortedArray.reduce((acc, cur) => {
                acc[0].push(cur.fun);
                acc[1].push(cur.difficulty);
                acc[2].push(cur.category);
                return acc;
            }, [[], [], []]);

            state.horizontalArray = newArrayCategory
            state.verticalArrayDifficulty = newArrayDifficulty
            state.verticalArrayFun = newArrayFun

            // console.log(current(state))

            return state

        },
    }
})

export const { chartData, sortChart } = ChartSlice.actions
export default ChartSlice.reducer
