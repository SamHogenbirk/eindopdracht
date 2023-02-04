import Navbar from "../components/Navbar"
import BarChart from "../components/charts/BarChart"
import LineChart from "../components/charts/LineChart"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { chartData } from "../features/ChartSlice"
import ChartTitle from "../components/charts/ChartTitle"
// import { addMockData } from "../features/DataSlice"

const MainPage = () => {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.data.all)
    const filterData = useSelector((state) => state.filter.filter)
    const category = (input) => [...new Set(data.map(item => item[input]))]

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

    useEffect(() => {

        const funRatingStudent = AverageRating("fun", "studentName")
        const difficultyRatingStudent = AverageRating("difficulty", "studentName")


        if (filterData === "assignment") {
            dispatch(chartData({
                horizontal: category("assignment"),
                verticalD: difficultyRatingAssignment,
                verticalF: funRatingAssignment,
                title: "Difficulty and enjoyment rating per assignment"
            }))
        } else {
            dispatch(chartData({
                horizontal: category("studentName"),
                verticalD: difficultyRatingStudent,
                verticalF: funRatingStudent,
                title: "Difficulty and enjoyment rating per student"
            }))
        }

        // eslint-disable-next-line
    }, [filterData, category])

    useEffect(() => {
        // dispatch(addMockData())
        document.getElementById("line").classList.remove('title-underline')

    }, [])

   
    return (
        <>
            <Navbar />

            <ChartTitle
                data={filterData}
                title="Difficulty and enjoyment rating per:"
            />

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
