
import { useSelector, useDispatch } from 'react-redux'
import { chartData } from "../features/ChartSlice"
import { useEffect, useState } from 'react'

const CalculateAverage = (props) => {

    const [prevProp, setPrevProp] = useState("assignmentAverage")

    console.log(props === prevProp)

    const dispatch = useDispatch()
    const data = useSelector((state) => state.data.all)
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

    useEffect(() => {
        if (props === "assignmentAverage") {

            const funRatingAssignment = averageRating("fun", "assignment")
            const difficultyRatingAssignment = averageRating("difficulty", "assignment")

            dispatch(chartData({
                horizontal: category("assignment"),
                verticalD: difficultyRatingAssignment,
                verticalF: funRatingAssignment,
                title: "Difficulty and enjoyment rating per assignment"
            }))

            setPrevProp("assignmentAverage")

        } else {

            const funRatingStudent = averageRating("fun", "studentName")
            const difficultyRatingStudent = averageRating("difficulty", "studentName")

            dispatch(chartData({
                horizontal: category("studentName"),
                verticalD: difficultyRatingStudent,
                verticalF: funRatingStudent,
                title: "Difficulty and enjoyment rating per student"
            }))

            setPrevProp("studentAverage")

        }
        // eslint-disable-next-line
    }, [props])


    return (
        <>
            <div>
                {/* {averageRating("fun", "assignment")} */}
            </div>
        </>
    )

}


export default CalculateAverage