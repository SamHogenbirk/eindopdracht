import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import BarChart from "../components/charts/BarChart"
import Navbar from "../components/Navbar"
import { chartData } from "../features/ChartSlice"
import { useEffect, useState } from 'react'
import LineChart from '../components/charts/LineChart'
import ChartTitle from '../components/charts/ChartTitle'
import StudentProfile from '../components/StudentProfile'
import CalculateAverage from '../components/CalculateAverage'


const Student = () => {

    const profile = useSelector((state) => state.data.combinedStudent)
    const { name } = useParams()

    CalculateAverage(["studentAverage", name])

    useEffect(() => {
        document.getElementById("line").classList.add('title-underline')
    }, [])

 
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

   // const dispatch = useDispatch()
 // const data = useSelector((state) => state.data.all)
    // const array = useSelector((state) => state.data.assignment)
  // const category = [...new Set(data.map(item => item.studentName))]
    // const ratingPerStudent = (data, name) => data.filter((data) => data.studentName === name)

        // useEffect(() => {
    //     dispatch(chartData({
    //         horizontal: array,
    //         verticalD: ratingPerStudent(data, name).map(item => item.difficulty),
    //         verticalF: ratingPerStudent(data, name).map(item => item.fun)
    //     }))
    // }, [data, name])

