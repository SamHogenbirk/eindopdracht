import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import BarChart from "../components/charts/BarChart"
import Navbar from "../components/Navbar"
import { chartData } from "../features/ChartSlice"
import { useEffect } from 'react'
import LineChart from '../components/charts/LineChart'
import ChartTitle from '../components/charts/ChartTitle'
import StudentProfile from '../components/StudentProfile'
import CalculateAverage from '../components/CalculateAverage'


const Student = () => {
    const dispatch = useDispatch()

    const profile = useSelector((state) => state.data.combinedStudent)
    const data = useSelector((state) => state.data.all)
    const array = useSelector((state) => state.data.assignment)

    const { name } = useParams()
    const category = [...new Set(data.map(item => item.studentName))]

    const ratingPerStudent = (data, name) => data.filter((data) => data.studentName === name)

    const av = CalculateAverage("studentAverage")


    useEffect(() => {
        document.getElementById("line").classList.add('title-underline')
    }, [])

    useEffect(() => {
        dispatch(chartData({
            horizontal: array,
            verticalD: ratingPerStudent(data, name).map(item => item.difficulty),
            verticalF: ratingPerStudent(data, name).map(item => item.fun)
        }))
    }, [data, name])





    // const averageRating = (inputA, inputB) => { //inputA = fun/difficult, inputB = assignment/studentName
    //     const averageRating = category.map((item) => {
    //         const ratingPerInput =
    //             data.filter((data) => data[inputB] === item)
    //                 .map((data) => data[inputA])
    //         const averageRating = ratingPerInput.reduce((a, b) => a + b) / ratingPerInput.length

    //         return averageRating
    //     })
    //     return averageRating.map(item => Math.round(item * 10) / 10)
    // }

    // const funRatingStudent = averageRating("fun", "studentName")
    // const difficultyRatingStudent = averageRating("difficulty", "studentName")

    // console.log(funRatingStudent)
    // console.log(difficultyRatingStudent)
    // console.log(category)

    // const x = new Object(category.map((item, index) => [{ [item]: [funRatingStudent[index], difficultyRatingStudent[index]] }]))

    // console.log(x)

    return (
        <>
            <Navbar />

            <div className='chart-title-wrapper'>
                <ChartTitle
                    title="Difficulty and enjoyment rating for:"
                    subtitle={name}
                />
                <div className='profile-wrapper'>
                    <StudentProfile data={profile} name={name} />
                </div>

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

export default Student

