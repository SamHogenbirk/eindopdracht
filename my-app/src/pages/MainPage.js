import Navbar from "../components/Navbar"
import BarChart from "../components/charts/BarChart"
import LineChart from "../components/charts/LineChart"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { chartData } from "../features/ChartSlice"
import ChartTitle from "../components/charts/ChartTitle"
import CalculateAverage from "../components/CalculateAverage"

const MainPage = () => {

    // const dispatch = useDispatch()
    // const data = useSelector((state) => state.data.all)
    const filterData = useSelector((state) => state.filter.filter)
    // const category = (input) => [...new Set(data.map(item => item[input]))]

    filterData === "assignment" ? CalculateAverage("assignmentAverage") : CalculateAverage("studentAverage")

    // const averageRating = (inputA, inputB) => { //inputA = fun/difficult, inputB = assignment/studentName
    //     const averageRating = category(inputB).map((item) => {
    //         const ratingPerInput =
    //             data.filter((data) => data[inputB] === item)
    //                 .map((data) => data[inputA])
    //         const averageRating = ratingPerInput.reduce((a, b) => a + b) / ratingPerInput.length

    //         return averageRating
    //     })
    //     return averageRating.map(item => Math.round(item * 10) / 10)
    // }//get average rating per category



    // const funRatingAssignment = averageRating("fun", "assignment")
    // const difficultyRatingAssignment = averageRating("difficulty", "assignment")

    // useEffect(() => {

    //     // console.log("x")
    //     const funRatingStudent = averageRating("fun", "studentName")
    //     const difficultyRatingStudent = averageRating("difficulty", "studentName")


    //     if (filterData === "assignment") {
    //         dispatch(chartData({
    //             horizontal: category("assignment"),
    //             verticalD: difficultyRatingAssignment,
    //             verticalF: funRatingAssignment,
    //             title: "Difficulty and enjoyment rating per assignment"
    //         }))
    //     } else {
    //         dispatch(chartData({
    //             horizontal: category("studentName"),
    //             verticalD: difficultyRatingStudent,
    //             verticalF: funRatingStudent,
    //             title: "Difficulty and enjoyment rating per student"
    //         }))
    //     }

    //     // eslint-disable-next-line
    // }, [filterData, category])

    useEffect(() => {
        document.getElementById("line").classList.remove('title-underline')
    }, [])



    // console.log(av)

    // av("assignmentAverage")

    return (
        <>
            <Navbar />

            <div className="chart-title-wrapper">
                <ChartTitle
                    data={filterData}
                    title="Difficulty and enjoyment rating per:"
                />
            </div>
            <div className="chart-wrapper" >
                <div className="bar-chart">
                    <BarChart />
                </div>

                <div className="line-chart">
                    <LineChart />
                </div>
            </div>
        </>
    )

}

export default MainPage
