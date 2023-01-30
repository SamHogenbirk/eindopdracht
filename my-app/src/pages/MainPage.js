
import Navbar from "../components/Navbar"
import BarChart from "../components/charts/BarChart"
import LineChart from "../components/charts/LineChart"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"


const MainPage = () => {

    const data = useSelector((state) => state.data)
    const filterData = useSelector((state) => state.filter.filter)

    // console.log(data)

    const category = (input) => [...new Set(data.studentData.map(item => item[input]))]

    const AverageRating = (inputA, inputB) => { //inputA = fun/difficult, inputB = assignment/studentName

        const averageRating = category(inputB).map((item) => {

            const ratingPerInput =
                data.studentData.filter((data) => data[inputB] === item)
                    .map((data) => data[inputA])

            const averageRating = ratingPerInput.reduce((a, b) => a + b) / ratingPerInput.length

            return averageRating
        })
        return averageRating.map(item => Math.round(item * 10) / 10)
    }//get average rating per category

    const funRatingAssignment = AverageRating("fun", "assignment")
    const difficultyRatingAssignment = AverageRating("difficulty", "assignment")


    const [cat, setCat] = useState({
        horizontal: category("assignment"),
        verticalD: difficultyRatingAssignment,
        verticalF: funRatingAssignment,
        title: "assignment"
    })//default state

    useEffect(() => {

        const funRatingStudent = AverageRating("fun", "studentName")
        const difficultyRatingStudent = AverageRating("difficulty", "studentName")

        if (filterData === "assignment") {
            setCat({
                horizontal: category("assignment"),
                verticalD: difficultyRatingAssignment,
                verticalF: funRatingAssignment,
                title: "Assignment"
            })
        } else {
            setCat({
                horizontal: category("studentName"),
                verticalD: difficultyRatingStudent,
                verticalF: funRatingStudent,
                title: "Student"
            })
        }

        // eslint-disable-next-line
    }, [filterData, data])

    let chartData = {
        title: `Difficulty and enjoyment rating per ${cat.title}`,
        horizontalArray: cat.horizontal,
        verticalArrayDifficulty: cat.verticalD,
        verticalArrayFun: cat.verticalF,
    }

    return (
        <>
            <Navbar />

            <div className="chart-wrapper" >

                <div className="bar-chart">
                    <BarChart data={chartData} />
                </div>

                <div className="line-chart">
                    <LineChart data={chartData} />
                </div>
            </div>
        </>
    )

}

export default MainPage