import { createSlice, current } from "@reduxjs/toolkit";

const isSorted = false

const initialState = {
    title: "",
    horizontalArray: [],
    verticalArrayDifficulty: [],
    verticalArrayFun: [],
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

        sortList: (state, action) => {

            console.log(action.payload)
            console.log(current(state.horizontalArray))

            
            
            // const res = state.all.map(item => item)
            // console.log(isSorted)
            // // if (isSorted) {
            // //     res.reverse()
            // // }
            // // const sortedList = res.sort((a, b) => (a[action.payload] < b[action.payload] ? -1 : 1), 0)
            // const sortedList = isSorted ? res.reverse() : res.sort((a, b) => (a[action.payload] < b[action.payload] ? -1 : 1), 0)

            // isSorted = !isSorted
            // state.all = sortedList

            // return state
        },
    }
})

export const { chartData, sortList } = ChartSlice.actions
export default ChartSlice.reducer

// labels: props.data.horizontalArray, //horizontal axis

// datasets: [
//     {
//         label: "Difficulty rating",
//         data: props.data.verticalArrayDifficulty, //vertical axis
//         backgroundColor: props.data.verticalArrayDifficulty
//             .map(item => item > 3.5 || item < 1 ? "red" : "rgb(66, 135, 245)"),

//         borderWidth: 1,
//         barPercentage: 1,
//         categoryPercentage: 0.7,
//         borderRadius: 10,
//     },
//     {
//         label: "Fun rating",
//         data: props.data.verticalArrayFun, //vertical axis
//         backgroundColor: props.data.verticalArrayFun
//             .map(item => item < 2 ? "red" : "rgb(182, 245, 66)"),

//         borderWidth: 1,
//         barPercentage: 1,
//         categoryPercentage: 0.7,
//         borderRadius: 10,
//     }],       
