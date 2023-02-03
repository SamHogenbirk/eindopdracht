import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import BarChart from "../components/charts/BarChart"
import Navbar from "../components/Navbar"
import { chartData } from "../features/ChartSlice"
import { useEffect } from 'react'
import LineChart from '../components/charts/LineChart'

const Student = () => {

    const data = useSelector((state) => state.data.all)
    const array = useSelector((state) => state.data.assignment)
    const dispatch = useDispatch()
    const { name } = useParams()

    const ratingPerStudent = (data, name) => data.filter((data) => data.studentName === name)

    useEffect(() => {
        dispatch(chartData({
            title: `Difficulty and enjoyment rating for ${name}`,
            horizontal: array,
            verticalD: ratingPerStudent(data, name).map(item => item.difficulty),
            verticalF: ratingPerStudent(data, name).map(item => item.fun)
        }))
    }, [data, name])

    return (
        <>
            <Navbar />

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

