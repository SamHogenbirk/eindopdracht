import { createSlice, current } from "@reduxjs/toolkit";


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

            // console.log(action.payload)

            state.title = action.payload.title
            state.horizontalArray = action.payload.horizontal
            state.verticalArrayDifficulty = action.payload.verticalD
            state.verticalArrayFun = action.payload.verticalF

            // console.log(current(state))

            return state

        }
    }
})

export const { chartData } = ChartSlice.actions
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
