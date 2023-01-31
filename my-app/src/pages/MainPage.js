
import Navbar from "../components/Navbar"
import BarChart from "../components/charts/BarChart"
import LineChart from "../components/charts/LineChart"
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { chartData } from "../features/ChartSlice"



const MainPage = () => {

    const data = useSelector((state) => state.data)
    const filterData = useSelector((state) => state.filter.filter)
    const dispatch = useDispatch()

    // console.log(data.studentData)

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


    // const [cat, setCat] = useState({
    //     horizontal: category("assignment"),
    //     verticalD: difficultyRatingAssignment,
    //     verticalF: funRatingAssignment,
    //     title: "assignment"
    // }

    useEffect(() => {
        dispatch(chartData({
            horizontal: category("assignment"),
            verticalD: difficultyRatingAssignment,
            verticalF: funRatingAssignment,
            title: "assignment"
        }))
    }, [dispatch])



    useEffect(() => {

        const funRatingStudent = AverageRating("fun", "studentName")
        const difficultyRatingStudent = AverageRating("difficulty", "studentName")

        // if (filterData === "assignment") {
        //     setCat({
        //         horizontal: category("assignment"),
        //         verticalD: difficultyRatingAssignment,
        //         verticalF: funRatingAssignment,
        //         title: "Assignment"
        //     })
        // } else {
        //     setCat({
        //         horizontal: category("studentName"),
        //         verticalD: difficultyRatingStudent,
        //         verticalF: funRatingStudent,
        //         title: "Student"
        //     })
        // }

        if (filterData === "assignment") {
            dispatch(chartData({
                horizontal: category("assignment"),
                verticalD: difficultyRatingAssignment,
                verticalF: funRatingAssignment,
                title: "Difficulty and enjoyment rating per Assignment"
            }))
        } else {
            dispatch(chartData({
                horizontal: category("studentName"),
                verticalD: difficultyRatingStudent,
                verticalF: funRatingStudent,
                title: "Difficulty and enjoyment rating per Student"
            }))
        }

        // eslint-disable-next-line
    }, [filterData])

    // let chartDatax = {
    //     title: `Difficulty and enjoyment rating per ${cat.title}`,
    //     horizontalArray: cat.horizontal,
    //     verticalArrayDifficulty: cat.verticalD,
    //     verticalArrayFun: cat.verticalF,
    // }

    return (
        <>
            <Navbar />

            <div className="chart-wrapper" >

                {/* data={chartDatax} */}

                <div className="bar-chart">
                    <BarChart />
                </div>

                {/* <div className="line-chart">
                    <LineChart  />
                </div> */}
            </div>
        </>
    )

}

export default MainPage