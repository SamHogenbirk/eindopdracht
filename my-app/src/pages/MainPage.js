import React from "react"
import { useSelector } from "react-redux"
import BarChart from "../components/BarChart"
import { useState } from "react"


const MainPage = () => {

    const data = useSelector((state) => state.data.StudentData)

    const assignmentArray = [...new Set(data.map(item => item.assignment))]
    const studentArray = [...new Set(data.map(item => item.studentName))]

    const AverageRatingByAssignment = (data, input) => {

        const averageRatingPerAssigntment = assignmentArray.map((assignment) => {

            const ratingPerAssignment =
                data.filter((data) => data.assignment === assignment)
                    .map((data) => data[input])

            const averageRating = ratingPerAssignment.reduce((a, b) => a + b) / ratingPerAssignment.length

            return averageRating

        })
        return averageRatingPerAssigntment
    }

    const funRatingAssignment = AverageRatingByAssignment(data, "fun")
    const difficultyRatingAssignment = AverageRatingByAssignment(data, "difficulty")

    const AverageRatingByStudent = (data, input) => {

        const RatingPerStudent = studentArray.map((student) => {

            const RatingPerStudent =
                data.filter((data) => data.studentName === student)
                    .map((data) => data[input])

            const averageRating = RatingPerStudent.reduce((a, b) => a + b) / RatingPerStudent.length

            return averageRating

        })
        return RatingPerStudent
    }

    const funRatingStudent = AverageRatingByStudent(data, "fun")
    const difficultyRatingStudent = AverageRatingByStudent(data, "difficulty")

    const [radio, setRadio] = useState({
        horizontal: assignmentArray,
        verticalD: difficultyRatingAssignment,
        verticalF: funRatingAssignment,
        title: "Assignment"
    })

    const handleChange = (e) => {

        if (e.target.value === "assignment") {
            setRadio({
                horizontal: assignmentArray,
                verticalD: difficultyRatingAssignment,
                verticalF: funRatingAssignment,
                title: "Assignment"
            })
        } else {
            setRadio({
                horizontal: studentArray,
                verticalD: difficultyRatingStudent,
                verticalF: funRatingStudent,
                title: "Student"
            })
        }
    }

    let horizontalArray = radio.horizontal
    let verticalArrayDifficulty = radio.verticalD
    let verticalArrayFun = radio.verticalF
    let title = `Difficulty and enjoyment rating per ${radio.title}`

    return (


        <div className="chart-wrapper" >
            <div className="radio">
                <label>
                    <label> assignment<input defaultChecked="checked" onChange={handleChange} type="radio" id="assignment" name="data" value="assignment"></input></label>
                    <label>Student:<input onChange={handleChange} type="radio" id="student" name="data" value="student"></input>    </label>
                </label>
            </div>

            <BarChart props={{
                title,
                horizontalArray,
                verticalArrayDifficulty,
                verticalArrayFun,

            }} />

        </div>
    )
}

export default MainPage