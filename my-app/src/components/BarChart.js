import React from "react"
import { useState } from "react"
import { Bar } from 'react-chartjs-2'
import { useSelector } from "react-redux"


function BarChart() {

    const data = useSelector((state) => state.data.StudentData)

    const barOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: "Difficulty and Enjoyment Rating per Assignment"
            }
        }
    }

    const assignmentArray = [...new Set(data.map(item => item.assignment))]

    const AverageDifficultyRating = (data) => {
        const averageDifficultyRatingPerAssigntment = assignmentArray.map((assignment) => {
            const difficultyRatingPerAssignment = data.filter((data) => data.assignment === assignment).map((data) => data.difficulty)
            const averageDifficultyRating = difficultyRatingPerAssignment.reduce((a, b) => a + b) / difficultyRatingPerAssignment.length
            return averageDifficultyRating

        })
        return averageDifficultyRatingPerAssigntment
    }

    const difficulty = AverageDifficultyRating(data)

    const AverageFunRating = (data) => {
        const averageFunRatingPerAssigntment = assignmentArray.map((assignment) => {
            const funRatingPerAssignment = data.filter((data) => data.assignment === assignment).map((data) => data.fun)
            const averageFunRating = funRatingPerAssignment.reduce((a, b) => a + b) / funRatingPerAssignment.length
            return averageFunRating

        })
        return averageFunRatingPerAssigntment
    }

    console.log(assignmentArray)

    const fun = AverageFunRating(data)

    const [barData, setBarData] = useState({

        labels: assignmentArray, //horizontal axis

        datasets: [
            {
                label: "Difficulty Rating ",
                data: difficulty, //vertical axis
                backgroundColor: difficulty.map(item => item > 3.2 || item < 1 ? "red" : "rgb(66, 135, 245)"),

                borderWidth: 1
            },
            {
                label: "Enjoyment Rating",
                data: fun, //vertical axis
                backgroundColor: fun.map(item => item < 2 ? "red" : "rgb(182, 245, 66)"),

                borderWidth: 1
            }]
    })

    return (
        <div className="chart">
            <h2 className="chart-title" >Difficulty and enjoyment rating per Assignment</h2>
            <Bar
                data={barData}
                options={{ barOptions }}
            />
        </div>
    );
}

export default BarChart;