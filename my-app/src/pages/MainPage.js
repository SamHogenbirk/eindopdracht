import React from "react"
import BarChart from "../components/charts/BarChart"
import Navbar from "../components/Navbar"
import LineChart from "../components/charts/LineChart"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"


const MainPage = () => {

    const data = useSelector((state) => state.data.StudentData)
    const filterData = useSelector((state) => state.filter.filter)

    let category = (input) => [...new Set(data.map(item => item[input]))] //get unique values

    const AverageRating = (inputA, inputB) => { //inputA = fun/difficult, inputB = assignment/studentName

        const averageRating = category(inputB).map((item) => {

            const ratingPerInput =
                data.filter((data) => data[inputB] === item)
                    .map((data) => data[inputA])

            const averageRating = ratingPerInput.reduce((a, b) => a + b) / ratingPerInput.length

            return averageRating
        })
        return averageRating.map(item => Math.round(item * 10) / 10)
    }//get average rating per category

    const funRatingAssignment = AverageRating("fun", "assignment")
    const difficultyRatingAssignment = AverageRating("difficulty", "assignment")

    const [radio, setRadio] = useState({
        horizontal: category("assignment"),
        verticalD: difficultyRatingAssignment,
        verticalF: funRatingAssignment,
        title: "assignment"
    })//default state

    useEffect(() => {

        const funRatingStudent = AverageRating("fun", "studentName")
        const difficultyRatingStudent = AverageRating("difficulty", "studentName")

        if (filterData === "assignment") {
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
    }, [filterData])

    return (
        <>
            <Navbar />

            <div className="chart-wrapper" >

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