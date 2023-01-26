import React from "react"
import BarChart from "../components/charts/BarChart"
import RadioButton from "../components/RadioButton"
import Navbar from "../components/Navbar"
import LineChart from "../components/charts/LineChart"
import { useSelector } from "react-redux"
import { useState } from "react"
// import { uniqueArray } from "../features/FilterSlice"
// import { useDispatch } from "react-redux"


const MainPage = () => {

    const data = useSelector((state) => state.data.StudentData)

    let category = (input) => [...new Set(data.map(item => item[input]))]

    const AverageRating = (inputA, inputB) => { //inputA = fun/difficult, inputB = assignment/studentName

        const averageRating = category(inputB).map((item) => {

            const ratingPerInput =
                data.filter((data) => data[inputB] === item)
                    .map((data) => data[inputA])

            const averageRating = ratingPerInput.reduce((a, b) => a + b) / ratingPerInput.length

            return averageRating
        })
        return averageRating.map(item => Math.round(item * 10) / 10)
    } //get average rating per category

    const funRatingAssignment = AverageRating("fun", "assignment")
    const difficultyRatingAssignment = AverageRating("difficulty", "assignment")

    const [radio, setRadio] = useState({
        horizontal: category("assignment"),
        verticalD: difficultyRatingAssignment,
        verticalF: funRatingAssignment,
        title: "assignment"
    })//default state

    const handleChange = (e) => {

        const funRatingStudent = AverageRating("fun", "studentName")
        const difficultyRatingStudent = AverageRating("difficulty", "studentName")


        if (e.target.value === "assignment") {
            setRadio({
                horizontal: category("assignment"),
                verticalD: difficultyRatingAssignment,
                verticalF: funRatingAssignment,
                title: "Assignment"
            })
        } else {
            setRadio({
                horizontal: category("studentName"),
                verticalD: difficultyRatingStudent,
                verticalF: funRatingStudent,
                title: "Student"
            })
        }
    }//change state

    const handleClick = (e) => {

        const barChart = document.querySelector(".bar-chart")
        const lineChart = document.querySelector(".line-chart")


        if (barChart.style.display === "none") {
            barChart.style.display = "block"
            lineChart.style.display = "none"


        } else {
            barChart.style.display = "none"
            lineChart.style.display = "block"


        }
    }//switch chart


    return (
        <>
            <Navbar />

            <div className="chart-wrapper" >
                <RadioButton handleChange={handleChange} />

                <button className="chart-button" onClick={handleClick}>switch chart</button>

                <div className="bar-chart">
                    <BarChart data={{
                        title: `Difficulty and enjoyment rating per ${radio.title}`,
                        horizontalArray: radio.horizontal,
                        verticalArrayDifficulty: radio.verticalD,
                        verticalArrayFun: radio.verticalF,
                    }} />
                </div>

                <div className="line-chart">
                    <LineChart data={{
                        title: `Difficulty and enjoyment rating per ${radio.title}`,
                        horizontalArray: radio.horizontal,
                        verticalArrayDifficulty: radio.verticalD,
                        verticalArrayFun: radio.verticalF,
                    }} />
                </div>
            </div>
        </>
    )
}

export default MainPage