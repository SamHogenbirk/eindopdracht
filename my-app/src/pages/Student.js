import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import BarChart from "../components/charts/BarChart"
import Navbar from "../components/Navbar"
import { chartData } from "../features/ChartSlice"
import { useEffect } from 'react'
import LineChart from '../components/charts/LineChart'
import ChartTitle from '../components/charts/ChartTitle'
import { addMockData } from '../features/DataSlice'
import StudentProfile from '../components/StudentProfile'


const Student = () => {

    const profile = useSelector((state) => state.data.combinedStudent)
    const data = useSelector((state) => state.data.all)
    const array = useSelector((state) => state.data.assignment)
    const dispatch = useDispatch()
    const { name } = useParams()

    const ratingPerStudent = (data, name) => data.filter((data) => data.studentName === name)

    useEffect(() => {
        dispatch(addMockData())
        document.getElementById("line").classList.add('title-underline')
    }, [])

    useEffect(() => {
        dispatch(chartData({
            horizontal: array,
            verticalD: ratingPerStudent(data, name).map(item => item.difficulty),
            verticalF: ratingPerStudent(data, name).map(item => item.fun)
        }))
    }, [data, name])

    return (
        <>
            <Navbar />

            <ChartTitle
                title="Difficulty and enjoyment rating for:"
                subtitle={name}
            />

            <StudentProfile data={profile} name={name} />

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

