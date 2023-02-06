import { useSelector, useDispatch } from 'react-redux'
import { chartData } from "../features/ChartSlice"
import { useEffect, useState } from 'react'

const CalculateAverage = (props) => {

    //props from MainPage & studen

    const dispatch = useDispatch()
    const data = useSelector((state) => state.data.all)
    const array = useSelector((state) => state.data.assignment)


    const [hasRun, setHasRun] = useState(false)

    const category = (input) => [...new Set(data.map(item => item[input]))]

    const averageRating = (inputA, inputB) => { //inputA = fun/difficult, inputB = assignment/studentName
        const averageRating = category(inputB).map((item) => {
            const ratingPerInput =
                data.filter((data) => data[inputB] === item)
                    .map((data) => data[inputA])
            const averageRating = ratingPerInput.reduce((a, b) => a + b) / ratingPerInput.length

            return averageRating
        })
        return averageRating.map(item => Math.round(item * 10) / 10)
    }//get average rating per category

    const onAssignment = () => {

        const funRatingAssignment = averageRating("fun", "assignment")
        const difficultyRatingAssignment = averageRating("difficulty", "assignment")

        dispatch(chartData({
            horizontal: category("assignment"),
            verticalD: difficultyRatingAssignment,
            verticalF: funRatingAssignment,
            title: "Difficulty and enjoyment rating per assignment"
        }))
    }

    const onStudent = () => {
        const funRatingStudent = averageRating("fun", "studentName")
        const difficultyRatingStudent = averageRating("difficulty", "studentName")

        dispatch(chartData({
            horizontal: category("studentName"),
            verticalD: difficultyRatingStudent,
            verticalF: funRatingStudent,
            title: "Difficulty and enjoyment rating per student"
        }))
    }

    useEffect(() => {

        if (props === "assignmentAverage") {

            onAssignment()

        } else if (props === "studentAverage") {

            onStudent()
            setHasRun(true)

        } else {

            if (hasRun === false) {
                onStudent()
            } //only run once

            const name = props
            const ratingPerStudent = (data, name) => data.filter((data) => data.studentName === name)

            dispatch(chartData({
                horizontal: array,
                verticalD: ratingPerStudent(data, name).map(item => item.difficulty),
                verticalF: ratingPerStudent(data, name).map(item => item.fun)
            }))
        }
        // eslint-disable-next-line
    }, [props, data])

    return (
        <>
            <div>
                {/* {averageRating("fun", "assignment")} */}
            </div>
        </>
    )

}

export default CalculateAverage